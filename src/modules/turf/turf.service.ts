import { Turf } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const createTurf = async(data:Omit<Turf,"id" | "createdAt" | "updatedAt">) =>{
    const result = await prisma.turf.create({
        data
    })

    return result;
}

export const turfservice = {
    createTurf
}