import express from "express";
import ejs from "ejs"
import mongoose from "mongoose";
import { Employee } from "./Employee.js";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

await mongoose.connect('mongodb://localhost:27017/company');

app.get('/',  (req, res) => {

    res.render('home');
}
);

app.post('/', async (req, res) => {
    let nam = ["Priti", "vaishnavi", "gayatri"];
    let sal = [80000, 90000, 100000];
    let lan = ["JavaScript", "Python", "Java"];
    let ci = ["Pune", "New York", "Banglore"];
    let man = [true, false];

    let final = [];
    let i = 1;
    while (i <= 10) {


  
    final.push( {name: nam[Math.floor(Math.random() * 3)],
            salary: sal[Math.floor(Math.random() * 3)],
            Language: lan[Math.floor(Math.random() * 3)],
            City: ci[Math.floor(Math.random() * 3)],
            isManager: man[Math.floor(Math.random() * 2)]}
        );

            i++

}
    await Employee.deleteMany({})

    await Employee.insertMany(final)
  

    res.send('generated successfully...');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});