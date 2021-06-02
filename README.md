# mskDb
to create a database use thus comment
# db.mskDb.createDb('test');

to insert data into the database use this command
# mydb.mskDb.dbInsert(name, type, content)

to read single row
# var data = mydb.mskDb.readDb('test');
# console.log(data.rows[0].id)

to read all rows
# var data = mydb.mskDb.readDb('test');
# console.log(data.rows)

to delete database
# mydb.mskDb.deleteDb('mskDb')


# mskDb
to create a database use thus comment
# db.mskDb.createDb('test');

to insert data into the database use this command
# mydb.mskDb.dbInsert(name, type, content)

to read single row
# var data = mydb.mskDb.readDb('test');
# console.log(data.rows[0].id)

to read all rows
# var data = mydb.mskDb.readDb('test');
# console.log(data.rows)

to delete database



// mskDb.createDb('mskDb');

// msc(mskDb.searchDb("auto number"));
// mskDb.dbInsert('auto number', 'test file', 'this is a test');

// msc(mskDb.dbInsert('peter'));

// msc(mskDb.readDb("mskDb"));

// msc(mskDb.version)
# mydb.mskDb.deleteDb('mskDb')
