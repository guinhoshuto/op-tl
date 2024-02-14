const fs = require('fs');
const readline = require('readline');

let period = ""
let record;

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
      record = line.split(" – ")
      let r = {
        period: period,
        date: record[0],
        description: record[1]
      }
      fs.appendFileSync("output.json", JSON.stringify(r, null, 2));
    }
  }
}

processLineByLine();

//note:


// let page_token = ""; 
// let allSubs = []; 
// while (page_token !== undefined) {
//   let subs = await hotmartAuth.getSubscriptions(page_token);
//   page_token = subs.page_info.next_page_token;
//   let items = subs.items;
//   allSubs = [...allSubs, ...items];
//   fs.writeFileSync("output.json", JSON.stringify(allSubs, null, 2));
// }