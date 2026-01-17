import readline from 'readline';
import path from 'path';
import fs from 'fs';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const createFile = () => {
    rl.question('Enter the file name (with extension): ', (fileName) => {
        rl.question('Enter the content for the file: ', (content) => {  
            fs.writeFile(fileName, content, 'utf-8', (err) => {
                if (err) {
                    console.log('Error creating file:', err);
                } else {
                    console.log(`File '${fileName}' created successfully.`);
                }
                rl.close();
            });
        });
    });
};

createFile();
