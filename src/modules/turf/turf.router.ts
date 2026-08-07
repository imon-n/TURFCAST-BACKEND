import express, { Router } from "express";
import { TurfController } from "./turf.controller";
const router = express.Router();

router.post("/", 
    TurfController.createTurf
);

export const turfRouter: Router = router;

// import express from "express";
// const router = express.Router();

// export const turfRouter = router;
