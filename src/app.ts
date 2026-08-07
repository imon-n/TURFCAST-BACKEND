import express, { Application } from "express";
import { turfRouter } from "./modules/turf/turf.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app: Application = express();
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json())

app.use("/turfs",turfRouter)

app.get("/", (req,res) =>{
    res.send("hlw world")
})

export default app;


//=======================================================

// import express, { Application } from "express";

// const app: Application = express();

// app.get("/", (req,res) =>{
//     res.send("hlw world")
// })

// export default app;
