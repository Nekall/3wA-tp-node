import bcrypt from "bcrypt";
import { Users } from "../models/User.js";
import { Pastries } from "../models/Pastry.js";
import { Game } from "../models/Game.js";
import dotenv from "dotenv";
dotenv.config();
const { SALT_ROUNDS } = process.env;
import { signUpValidators, loginValidators } from "../utils/validators.js";
import { getRandomNumber } from "../utils/randomNumber.js";
import { startYams } from "../utils/yams.js";

export const home = async (req, res) => {
  const games = await Game.find();
  let numberOfPastriesWon = 0;
  for (let game of games) {
    numberOfPastriesWon = numberOfPastriesWon + game.pastriesWin.length;
  }
  const gameOver = numberOfPastriesWon >= 50 ? true : false
  res.render("home", {
    gameOver: gameOver,
    isAuth: req.session.isAuth,
    firstName: req.session.firstName,
    lastName: req.session.lastName,
    email: req.session.email,
  });
};

export const game = async (req, res) => {
  const games = await Game.find();
  let numberOfPastriesWon = 0;
  for (let game of games) {
    numberOfPastriesWon = numberOfPastriesWon + game.pastriesWin.length;
  }

  if(numberOfPastriesWon >= 50) {

    let winners =[];
    for (let game of games) {
      if(game.pastriesWin.length > 0) {
        winners.push({ name: game.firstName + " " + game.lastName, pastries: game.pastriesWin, date: game.createdAt });
      }
    }
    return res.render("endGame", {
      winners: winners,
    });
  }

  if(await Game.findOne({ email: req.session.email }) !== null) {
    return res.render("game", {
      isAuth: req.session.isAuth,
      firstName: req.session.firstName,
      lastName: req.session.lastName,
      email: req.session.email,
      dicesYams: req.session.dicesYams,
      yamsResult: req.session.yamsResult,
      pastriesWin: req.session.pastriesWin,
    });
  }

  if (req.method === "GET" ) {
      res.render("startGame", {
        isAuth: req.session.isAuth,
        firstName: req.session.firstName,
        lastName: req.session.lastName,
        email: req.session.email,
        yamsResult: req.session.yamsResult,
        pastriesWin: req.session.pastriesWin,
      });
  } else if (req.method === "POST") {
    let dice1 = getRandomNumber(1, 6);
    let dice2 = getRandomNumber(1, 6);
    let dice3 = getRandomNumber(1, 6);
    let dice4 = getRandomNumber(1, 6);
    let dice5 = getRandomNumber(1, 6);
    const pastries = await Pastries.find().then(pastry=>pastry);

    setTimeout(() => {
      req.session.dicesYams = [dice1, dice2, dice3, dice4, dice5];
      req.session.yamsResult = startYams(dice1, dice2, dice3, dice4, dice5);

      const choosePastry = (yamsResult) => {
        for(let i = 0; i < yamsResult; i++) {
          let random = getRandomNumber(0, 7);
          req.session.pastriesWin.push(pastries[random]);
        }
      }
      choosePastry(req.session.yamsResult);

      Game.insertMany({ 
        firstName: req.session.firstName,
        lastName: req.session.lastName,
        email: req.session.email,
        dicesYams: [dice1, dice2, dice3, dice4, dice5],
        yamsResult: startYams(dice1, dice2, dice3, dice4, dice5),
        pastriesWin: req.session.yamsResult === 0 ? [] : req.session.pastriesWin,
      });

      res.render("game", {
        isAuth: req.session.isAuth,
        firstName: req.session.firstName,
        lastName: req.session.lastName,
        email: req.session.email,
        dicesYams: req.session.dicesYams,
        yamsResult: req.session.yamsResult,
        pastriesWin: req.session.pastriesWin,
      });
    }, 2000)
  }
};

export const signup = (req, res) => {
  if (req.method === "GET") {
    res.render("signup");
  } else {
    let validators = signUpValidators(req.body);
    if (validators.noErrors) {
      Users.findOne({ email: req.body.email })
        .then((user) => {
          if (user) {
            return res.render("signup", {
              email: "An account already exists with this email address.",
            });
          } else {
            bcrypt
              .hash(req.body.password, parseInt(SALT_ROUNDS))
              .then(function (hash) {
                Users.create({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  password: hash,
                })
                  .then(() => {
                    res.redirect("/login");
                  })
                  .catch((error) => {
                    console.error(error);
                    res.status(500).send("Error: " + error);
                  });
              });
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("Error: " + error);
        });
    } else {
      res.render("signup", validators);
    }
  }
};

export const login = (req, res) => {
  if (req.method === "GET") {
    res.render("login");
  } else if (req.method === "POST") {
    let validators = loginValidators(req.body);
    if (validators.noErrors) {

      Users.findOne({ email: req.body.email })
        .then((user) => {
          if (user) {
            bcrypt.compare(req.body.password, user.password).then(async (result) => {
              if (result) {
                await Game.findOne({ email: user.email })
                .then((game) => {
                    req.session.dicesYams = game ? game.dicesYams : [];
                    req.session.yamsResult = game ? game.yamsResult : 0;
                    req.session.pastriesWin = game ? game.pastriesWin : [];
                });
                req.session.isAuth = true;
                req.session.firstName = user.firstName;
                req.session.lastName = user.lastName;
                req.session.email = user.email;
                res.redirect("/profile");
              } else {
                return res.render("login", {
                  email: "Password is not correct",
                });
              }
            });
          } else {
            return res.render("login", {
              email: "No account with this email address was found.",
            });
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("Error: " + error);
        });
    } else {
      res.render("login", validators);
    }
  }
};

export const logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
    } else {
      return res.redirect("/login");
    }
  });
};

export const profile = (req, res) => {
  res.render("profile", {
    isAuth: req.session.isAuth,
    firstName: req.session.firstName,
    lastName: req.session.lastName,
    email: req.session.email,
  });
};

export const pastries = async (req, res) => {
  const pastries = await Pastries.find();
  res.json(pastries);
};

export const gameData = async (req, res) => {
  const gameData = await Game.find();
  res.json(gameData);
}