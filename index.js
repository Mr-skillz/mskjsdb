const db = require('./msk_db')
db.mskDb.db('test')

// db.mskDb.createDb('test');
db.mskDb.dbInsert('peter', 'test', 'this is a simple test')