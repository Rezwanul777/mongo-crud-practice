const {MongoClient}=require('mongodb')
require('dotenv').config()

// const url='mongodb+srv://rezwanDoc1:8ZRI4mLwxvAUeNO3@cluster0.kcswcx5.mongodb.net/?retryWrites=true&w=majority'
// var url =mongodb+srv://rezwanDoc1:<password>@cluster0.kcswcx5.mongodb.net/test

// create new Client
;
const  client=new MongoClient(process.env.DATABASE)
//console.log('Database connected');
//insertData(client)
//deleteOne(client)
//deleteMany(client)
//findwithoutCondition(client)
//findWithCondition(client)

//findAllData(client)

//findAllDatabyProjection(client)
//findAllDataQuery(client)
//findLimitData(client)
//findSortData(client)
//findSortDataWithLetter(client)
//updateOneData(client)
//createMyCollection(client)
//deleteMyCollection(client)
module.exports={client}

// insert data-----------------------
function insertData(client){
   let myDataBase=client.db("team")
   let myCollection=myDataBase.collection("players")
   let myData={name:'prince',age:40,profession:'web-developer',city:'Bogura'}

   myCollection.insertOne(myData,function(error){
      if(error){
         console.log('data insert failed');
      }else{
         console.log('data insert succeed');
      }
   })
}

// delete one data----------------------------------
function deleteOne(client){
   let myDataBase=client.db("team")
   let myCollection=myDataBase.collection("players")

   let deleteItem={age:41}
   myCollection.deleteOne(deleteItem,function(error){
      if(error){
         console.log('data deletd failed');
      }else{
         console.log('data deletd succeed');
      }
   })
}

// delete many data
function deleteMany(client){
   let myDataBase=client.db("team")
   let myCollection=myDataBase.collection("players")

   myCollection.deleteMany(function(error){
      if(error){
         console.log('All data deletd failed');
      }else{
         console.log('all data deleted');
      }
   })
}

// find data without condition

function findwithoutCondition(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   let FindObj={}
   myCollection.findOne(FindObj,function(error,result){
      console.log(result);
   })
}

// find data with condition

function findWithCondition(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   let FindObj={'age':41}
   myCollection.findOne(FindObj,function(error,result){
      console.log(result);
   })
}

//find all data

function findAllData(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   myCollection.find().toArray(function(error,result){
      console.log(result);
   })
}

// find projection
function findAllDatabyProjection(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   let itemObj={}
   let itemProjection={projection:{age:1}}
   myCollection.find(itemObj,itemProjection).toArray(function(error,result){
      console.log(result);
   })
}

// find query data

function findAllDataQuery(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   let query={profession:"web-developer",city:"Naogoan"}
   myCollection.find(query).toArray(function(error,result){
      console.log(result);
   })
}

// limit data by find

function findLimitData(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   myCollection.find().limit(3).toArray(function(error,result){
      console.log(result);
   })
}

// data sort  by find

function findSortData(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   let sortPattern={age:1}
   myCollection.find().sort(sortPattern).toArray(function(error,result){
      console.log(result);
   })
}

// data sort  by find

function findSortDataWithLetter(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   let sortPattern={name:1}
   myCollection.find().sort(sortPattern).toArray(function(error,result){
      console.log(result);
   })
}

//update data--- 

function updateOneData(client){
   let myDataBase=client.db('team')
   let myCollection=myDataBase.collection('players')
   let myQuery={name:"prince"}
   let newValues={$set:{name:"rezwanul haque",age:45,city:'Dhaka'}}
   myCollection.updateOne(myQuery,newValues,function(error,result){
      console.log(result);
   })
}

// create collection

function createMyCollection(client){
   let myDataBase=client.db('team')
   myDataBase.createCollection('Bangladesh')
      console.log('Collection is created');  
}

// delete collection
function deleteMyCollection(client){
   let myDataBase=client.db('team')
   myDataBase.dropCollection('Bangladesh',function(error,result){
      console.log(result);
   })   
}


