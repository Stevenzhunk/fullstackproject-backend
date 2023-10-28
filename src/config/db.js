import msql from 'mysql2/promise';


const connectDB = async()=>{
  try{
  // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
  if(connection!=null{
    console.log(`connect with succesful with mySQL`)
  })
  
  }
  catch(error){
    console.log(error);
  }
}