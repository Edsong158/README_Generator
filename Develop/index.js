 import fs from 'fs';
 import inquire from 'inquirer';
 import questions from '../question.js';
 import generateMarkdown from './utils/generateMarkdown.js';

 function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} generated successfully!`);
        }
    });
 }

 inquire.prompt(questions)
 .then((answerObj) => { 
    const md = generateMarkdown(answerObj);

    writeToFile('./README.md', md);

 });

