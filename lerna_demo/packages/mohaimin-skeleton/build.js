// // include node fs module
var fs = require('fs'),
    styleString = fs.readFileSync('./styles/style.css', 'utf-8'),
    htmlString = fs.readFileSync('./templates/starter.html', 'utf-8'),
    iconsDest = '';

console.log('\x1b[36m%s\x1b[0m', 'I am cyan', 'hello world'); //cyan

var iconsDest = fs.existsSync('../../src') ?  '../../src/cb-icons' : './cb-icons';
if (!fs.existsSync(iconsDest)) fs.mkdirSync(iconsDest);


fs.createReadStream('./styles/dog.png')
    .pipe(fs.createWriteStream(iconsDest+'/dog.png'));



if (fs.existsSync('../../src')) {
    fs.writeFile('../../src/starter-template.html', htmlString, function (err) {
        if (err) throw err;
        console.log('\x1b[36m%s\x1b[0m','Template is created in src folder successfully.');
    });
    fs.writeFile('../../src/style.css', styleString, function (err) {
        if (err) throw err;
        console.log('File is created in src folder successfully.');
    });
} else {
    fs.writeFile('../../starter-template.html', htmlString, function (err) {
        if (err) throw err;
        console.log('\x1b[36m%s\x1b[0m','Template created in root folder');
    });
    fs.writeFile('../../style.css', styleString, function (err) {
        if (err) throw err;
        console.log('File is created in root folder.');
    });
}