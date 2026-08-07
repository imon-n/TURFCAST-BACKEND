import { Request, Response } from "express"
import { turfservice } from "./turf.service"
import { error } from "node:console"

const createTurf = async (req: Request, res:Response) =>{
    try {
        const result = await turfservice.createTurf(req.body)
        res.status(201).json(result)
    } catch (e) {
        res.status(400).json({
            error:"Turf Creation failed",
            details: e
        })
    }
}

export const TurfController = {
    createTurf
}