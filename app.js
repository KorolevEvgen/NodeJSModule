const fs = require('fs/promises');
const path = require('path');
//const { misha, masha, marry, anna, liza, maksim } = require('./person/people');

// fs.mkdir('boys', (err) => {
//     console.log(err);
// });
//
// fs.mkdir('girls', (err) => {
//     console.log(err);
// });

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

const sorter = async (readFolder, writeFolder, gender) => {
    try {
        const folderPath = path.join(__dirname, readFolder);

        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = await fs.readFile(filePath);
            const user = JSON.parse(data);

            if (user.gender === gender) {
                await fs.rename(filePath, path.join(__dirname, writeFolder, file));
            }
        }
    } catch (e) {
        console.error(e)
    }
}

sorter('boys', 'girls', 'Female');
sorter('girls', 'boys', 'Male');
