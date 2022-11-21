import { Pastries } from "./models/Pastry.js";

export const seed = async () => {
    const pastriesData = [
        { "name" : "Supreme fondant" , "sophisticated" : 1 },
        { "name" : "Chocolate cake",  "sophisticated" : 2},
        { "name" : "Raspberry Chocolate Cake", "sophisticated" : 3},
        { "name" : "Sweet Brioche with chocolate", "sophisticated" : 4},
        { "name" : "Iced Chocolate Fudge Cake", "sophisticated" : 5},
        { "name" : "Chocolate éclair", "sophisticated" : 6},
        { "name" : "Chocolate-and-Pear Pie", "sophisticated" : 7},
        { "name" : "Chocolate Banana", "sophisticated" : 8}
    ];
    await Pastries.insertMany(pastriesData);
    //await Pastries.deleteMany();
    console.log("🌱 Database seeded");
    const pastries = await Pastries.find();
    console.log("🍩 Pastries", pastries);
}