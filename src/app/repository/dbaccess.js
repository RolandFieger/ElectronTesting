import Trilogy from 'trilogy';

var DbAccess = {

    insertName: async function(){
        testdb = new Trilogy('./test.db', {
            client: 'sql.js',
            verbose: console.log.bind(console)
        });
        people = await testdb.model('people', {
            name: String,
            age: Number,
            email: String,
            uid: { type: Number, primary: true }
        });
        await Promise.all([
            people.create({name: 'fieger', age: 54, email: 'keine', uid: 1})
        ])
    }

}