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
