const {MongoClient}=require('mongodb')
require('dotenv').config()

const  client=new MongoClient(process.env.DATABASE)
console.log('Database connected');

//module.exports={client}

const insertSingleData=async()=>{
   try {
      const database=client.db('Cricket')
      const users=database.collection('Bangladesh')
   
      const doc={
         name:'Rezwanul',
         city:'Dhaka',
         age:'41',
         profession:'Web-developer'
      }
      const result= await users.insertOne(doc)
      console.log(result); 
   } catch (error) {
      console.log(error);
   }finally{
      await client.close()
   }

} 
insertSingleData()


