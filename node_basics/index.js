console.log("Hello world!");

const { arr, obj, str, add } = require("./code");

console.log(obj);
console.log(arr);
console.log(str);
console.log(add(2, 7));

//file system
const fs = require("fs");
//sync way to write which is not recommended
const read = fs.readFileSync("./test.txt", { encoding: "utf-8" });
console.log(read);

// use async always
fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log("reading test file");

//operating system
const os = require("os");
const cpuData = os.cpus();
console.log(cpuData);
console.log(cpuData.length); // number of cores
console.log(cpuData.map((e) => e.speed)); //every core speed
console.log(os.platform()); //windows platform
