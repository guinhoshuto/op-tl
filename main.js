const fs = require('fs');
const readline = require('readline');
import tl from './output.json'

let period = ""
let record;
let source;

async function processLineByLine() {
  const fileStream = fs.createReadStream('raw');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
    if(!line.includes(" – ") && line != "" && !line.startsWith("Note:")){
      period = line
    }

    if(line.includes(" – ")){
    if(line.includes(""))
      record = line.split(" – ", 2)
      source = record[1].split("(")[getSourceLocation(record[1])]
      source = source.substring(0, source.length-1)
      let r = {
        period: period, 
        date: record.map((r, i) => {
          if(i === record.length - 1){
            return ""
          } else {
            return r
          }
        }).join(""), 
        description: record[1], 
        source: source 
      }
      fs.appendFileSync("output.json", JSON.stringify(r, null, 2));
    }
  }
}

// processLineByLine();

function getSourceLocation(str){
  return str.replace(/[^(]/g, "").length
}

(async () => {
  // const tl = await fetch('output.json')
  console.log(tl)
  // console.log(tl)
})()