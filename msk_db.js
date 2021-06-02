function msc(c) {
  console.log(c);
}
const fs = require("fs");
const path = require("path");
const mskDb = {
  db: (db = 'mskDb')=>{
    return fs.writeFile(`db/${db}.msk`, '', (e) => {});
  },

  createDb: (dbName = 'mskDb') => {
    fs.appendFile(`db/${dbName}.msk`, "", (e) => {});
  },

  createTable: (dbName, table) => {
    fs.writeFile(`db/${dbName}.msk`, table, (e) => {});
  },

  dbInsert: (Name, type, content) => {
    var activDb = mskDb.db,
      autoId = 0;
    var today = new Date(),
      uid;
    uid = `${today.getFullYear()}${today.getMinutes()}${today.getDay()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}${today.getMilliseconds()}`;
    var lastId = fs.readFileSync(`${activDb}.msk`, "utf-8");
    var final, finished;
    final = `[${lastId}]`.replace(",", "");

    finished = JSON.parse(final);
    for (const thisLine of finished) {
      if (parseInt(thisLine.id) > autoId) {
        autoId = parseInt(thisLine.id);
      }
    }
    fs.appendFileSync(
      `db/${activDb}.msk`,
      `,{"id": "${
        autoId + 1
      }","name": "${Name}","type": "${type}","content": "${content}","date": "${today.toLocaleString()}", "uid": "${uid}"}\n`,
      (e, msg) => {
        msc(msg);
      }
    );
  },

  deleteDb: (dbName) => {
    fs.unlink(`db/${dbName}.msk`, (data) => {});
  },

  searchDb: (value) => {
    var activDb = mskDb.db,
      rawData;
    rawData = fs.readFileSync(`${activDb}.msk`, "utf-8");
    var final, finished;
    final = `[${rawData}]`.replace(",", "");
    finished = JSON.parse(final);
    output = finished.filter((rows) => rows.name == value);

    return output;
  },

  readDb: (tableName) => {
    rawData = fs.readFileSync(`db/${tableName}.msk`, "utf-8");

    var final, finished;
    final = `[${rawData}]`.replace(",", "");
    finished = JSON.parse(final);
    return { rows: finished, error: "pending" };
  },

  version: "1.0.0",
  license: "MIT",
  author: "Mr skillz d boss",
  dir: 'db/'
};


module.exports = { mskDb, msc};
