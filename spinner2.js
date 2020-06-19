let write = ['| ', '/  ','- ', '\\','|', '/ ','- ', '| ','\\']
let timeStart = 100
process.stdout.write('hello from spinner1.js... \rheyyy\n');
for (let spinner of write) {
  timeStart += 200
  setTimeout(() => {
  process.stdout.write(`\r${spinner}`);
}, timeStart);
}
