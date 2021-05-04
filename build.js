const { version } = require("./package.json");
const fs = require("fs");

const copies = {
  scad: {
    from: "./scad/braille_keyboard_covers.scad",
    to: `./thingiverse/braille_keyboard_covers-${version}.scad`,
  },
  stl: {
    from: "./stl/braille_keyboard_covers.stl",
    to: `./thingiverse/braille_keyboard_covers-${version}.stl`,
  },
};
const thingiverseDir = './thingiverse'
if (!fs.existsSync(thingiverseDir)){
    fs.mkdirSync(thingiverseDir);
}

for (feature in copies) {
  fs.copyFile(copies[feature].from, copies[feature].to, (err) => {
    if (err) throw err;
  });
}

console.log(version);
