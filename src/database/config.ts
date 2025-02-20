import mongoose from "mongoose";

const uri = 
"mongodb+srv://TrainersTome:<password>@oriondb.1lnjo.mongodb.net/Trainer'sTome?retryWrites=true&w=majority&appName=OrionDB";


async function connect() {
    try{
        await mongoose.connect(uri);
    } catch (e) {
        throw e;
    }
}
 
export { connect as mongoConnect };



