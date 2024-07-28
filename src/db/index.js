import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const ConnectDB = async () => {
  try{
    const Connection_instance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n mongo connected !! DB HOST !!${Connection_instance.connection.host}`)

  }
  catch(error){
    console.log("MONGO DB CONNECTION FAILED !!!!",error)
    process.exit(1)
  }

}



export default ConnectDB