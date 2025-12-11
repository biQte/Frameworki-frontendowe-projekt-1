const fs = require('fs');
const path = require('path');

const count = Number(process.argv[2]);
let names = [];

const srcPath = path.join(__dirname, '..', 'src', 'data', 'module-data.js');

if (fs.existsSync(srcPath)) {
  console.log("module-data.js already exists. Skipping generation.");
  process.exit(0);
}

fs.readFile(path.join(__dirname, 'names.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  names = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);

  let content = "export const data = [\n";
  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const name = names[~~((Math.random() * names.length) / 1)];
    const birthDate = new Date(+(new Date()) - Math.floor(Math.random() * 1000000000000)).toISOString().split('T')[0];
    const email = `${name.toLowerCase()}${id}@wsei.edu.pl`;
    const phone = `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`;

    content += `  {\n`;
    content += `    id: ${id},\n`;
    content += `    name: "${name}",\n`;
    content += `    birthDate: "${birthDate}",\n`;
    content += `    email: "${email}",\n`;
    content += `    phone: "${phone}"\n`;
    content += `  },\n`;
  }
  content += "];"

  fs.writeFile(srcPath, content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("module-data.js generated");
  });
});
