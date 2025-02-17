import mongoose from "mongoose";

const uri = 
"mongodb+srv://TrainersTome:alihussain9981@oriondb.1lnjo.mongodb.net/?retryWrites=true&w=majority&appName=OrionDB";


async function connect() {
    try{
        await mongoose.connect(uri);
        console.log("connected to MongoDB Successfully!");
    } catch (e) {
        console.error("Error connecting to MongoDB", e);
        throw e;
    }
}
 
export { connect as mongoConnect };



