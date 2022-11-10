const fs = require('node:fs');
const { misha, masha, marry, anna, liza, maksim } = require('./person/people');

fs.mkdir('boys', (err) => {
    console.log(err);
});

fs.mkdir('girls', (err) => {
    console.log(err);
});
//
// const dataMisha = JSON.stringify(misha);
// fs.writeFileSync('./boys/misha.json', dataMisha);
//
// const dataMasha = JSON.stringify(masha);
// fs.writeFileSync('./boys/masha.json', dataMasha);
//
// const dataMarry = JSON.stringify(marry);
// fs.writeFileSync('./boys/marry.json', dataMarry);
//
// const dataAnna = JSON.stringify(anna);
// fs.writeFileSync('./girls/anna.json', dataAnna);
//
// const dataLiza = JSON.stringify(liza);
// fs.writeFileSync('./girls/liza.json', dataLiza);
//
// const dataMaksim = JSON.stringify(maksim);
// fs.writeFileSync('./girls/maksim.json', dataMaksim);

fs.readdir('./boys', (err, files) => {
    console.log(files);

    for (const fileName of files) {
        fs.stat(`./boys/${fileName}`, (err1, stats) => {
            console.log(`./boys/${fileName}`);
            console.log(stats.isDirectory());

            if (stats.isFile()) {
                fs.readFile(`./boys/${fileName}`, (err2, data) => {
                    const person = JSON.parse(data);
                    console.log(person.gender);
                    if (person.gender === 'Female') {
                        fs.rename(`./boys/${fileName}`, `./girls/${fileName}`, (err) => {
                            console.log(err);
                        });
                    }
                });

            }
        });
    }
});

fs.readdir('./girls', (err, files) => {
    console.log(files);

    for (const fileName2 of files) {
        fs.stat(`./girls/${fileName2}`, (err1, stats2) => {
            console.log(`./girls/${fileName2}`);
            console.log(stats2.isDirectory());

            if (stats2.isFile()) {
                fs.readFile(`./girls/${fileName2}`, (err2, data2) => {
                    const person2 = JSON.parse(data2);
                    console.log(person2.gender);
                    if (person2.gender === 'Male') {
                        fs.rename(`./girls/${fileName2}`, `./boys/${fileName2}`, (err) => {
                            console.log(err);
                        });
                    }
                });

            }
        });
    }
});







