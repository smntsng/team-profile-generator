const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const team = inquirer.prompt([
    
    {
        prefix: 'Please build your team',
        type: 'input',
        message: 'What is the Team Manager\'s name?',
        name: 'managerName',
    },

    {
        type: 'input',
        message: 'What is the Team Manager\'s id?',
        name: 'managerId',
    },

    {
        type: 'input',
        message: 'What is the Team Manager\'s email?',
        name: 'managerEmail',
    },

    {
        type: 'input',
        message: 'What is the Team Manager\'s office number?',
        name: 'managerOfficeNumber',
    },

    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer',
          'Intern',
          'i don\'t want to add anymore team members.'],
    },

    
    {
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'engineerName',
        when:function (answers) {
            return answers.teamMember === 'Engineer';
    },
    },

    {
        type: 'input',
        message: 'What is the Engineer\'s id?',
        name: 'engineerId',
        when:function (answers) {
            return answers.teamMember === 'Engineer';
    },
    },

    {
        type: 'input',
        message: 'What is the Engineer\'s email?',
        name: 'engineerEmail',
        when:function (answers) {
            return answers.teamMember === 'Engineer';
    },
    },

    {
        type: 'input',
        message: 'What is the Engineer\'s Github username?',
        name: 'engineerGithub',
        when:function (answers) {
            return answers.teamMember === 'Engineer';
    },
    },
    

]);

