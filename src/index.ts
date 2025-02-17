import Express from "express";
import { bootstrap } from "./bootstrap";
import { mongoConnect } from "./database/config";


const app = Express();


app.use(Express.json());

app.get("/", (req,res) => {
    res.json({
        version: 1.0,
    });
});

bootstrap(app);

mongoConnect().then(() => {
    app.listen(3000, () => {
        console.log("server started at port 3000")
    });
});