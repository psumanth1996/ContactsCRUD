const {MongoClient, ObjectID} = require('mongodb')// we are destructuring here and getting the result same as the above code

const connectionUrl  = 'mongodb://127.0.0.1:27017'
const databaseName  = 'Crud'


const id = new ObjectID()
console.log(id);



MongoClient.connect(connectionUrl,{useNewUrlParser:true,useUnifiedTopology: true },(error,client)=>{
    if (error) {
        return console.log('Not able to connect to the database');
    }
    const db =  client.db(databaseName);



    // db.collection('tasks').insertMany([
    //         {
    //             description:'first description of the tasks collection',
    //             completed:true
    //         },
    //         {
    //           description:'second description of the tasks collection',
    //           completed:false  
    //         },
    //         {
    //             description:'Third description of the tasks collection',
    //             completed:true
    //         }
    //     ],(error,result)=>{
    //         if (error) {
    //         return console.log('Unable to insert into the collection');
    //         }
    //         console.log(result.ops);
    //     })

})