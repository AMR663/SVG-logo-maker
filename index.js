
const fs = require('fs');
const { prompt } = require('inquirer');


const { questions } = require('./questions.js');


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}


function init() {
    prompt(questions).then((answers) => {
        fs.readFile(`Lib/${answers['Shape']}.svg`, "utf8", (err, data) => {
            let output = data;
            output = output.replace("{shape-color}", answers['Shape Color'])
                .replace("{text-color}", answers['Text Color'])
                .replace("{text}", answers['Text']);

            writeToFile("logo.svg", output);
            console.log('Generated logo.svg file');
        });



    });
}


init();
