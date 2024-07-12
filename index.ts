#! /usr/bin/env node

import inquirer from 'inquirer';

class student {
    name : string
    constructor (n : string){
        this.name = n
    }
}
class person {
    Students : student[] =[]
    addstudent(obj : student){
        this.Students.push(obj)
    }
}
const persons = new person();

const CourseStart = async (persons : person) => {
    console.log("Welcome!");
    let ans = await inquirer.prompt(
        {
            name : "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices : ["Staff", "Student", "Exit"]
        }
    );
    if (ans.select === "Staff"){
        console.log ("Go to the Staff room.");
    } else if (
        ans.select === "Student"
    ){
        let answer = await inquirer.prompt({
            name : "Student",
            type : "input",
            message : "Please tell us the student name you wish to talk."
        })
        let student : any = persons.Students.find (val => val.name == answer.Student)
        if (!student){
            let name = new student(answer.Student)
            persons.addstudent(name)
            console.log(`Hello, I'm ${name.name}. Good to see you here!`);
            console.log ("New student has been added!");
            console.log("Current Students list:");
            console.log(persons.Students);        
        } else {
            console.log(`Hello, I am ${student.name}. Glad to see you here!`);
            console.log("Current Students List:");
            console.log(persons.Students);
        } 
    }
    else {
        ans.select === "Exit"
        console.log("Exiting the Program....");
    }
}
CourseStart (persons);