import ConnectDB from './db/index.js';
import dotenv from "dotenv"





dotenv.config({
    path: './.env'
})




ConnectDB().
then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Listening at port no ${process.env.PORT}`)
    })
}).
catch((error)=>{
    console.log("There is error in connecting to MONGODB",console.error())
})




/*
const app=express()



;
(async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
         console.log("Error",error);
         throw error   
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
        const Cat = mongoose.model('Cat', { name: String });
        const kitty = new Cat({ name: 'Zildjian' });
        kitty.save().then(() => console.log('meow'));
    }catch(error){
        console.log(error)
    }
})()


*/