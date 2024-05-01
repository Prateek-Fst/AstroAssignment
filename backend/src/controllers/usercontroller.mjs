import smodel from "../models/smodel.mjs";
import { assignSeeker , toggleTopGuru } from "./gcontroller.mjs";
const createSeeker = async (req,res) =>{
    try {
        const data = req.body;
        const {email} = req.body;

        const checkSeekerExists = await smodel.findOne({email : email});

        if(checkSeekerExists) {
            return res.status(200).send({message : "Seeker already exists"});
        }

        const createSeeker = await smodel.create(data);
        await createSeeker.populate("assignedGuru");

        return res.status(200).send({
            status : "ok", 
            message : createSeeker
        });

    } catch (error) {
        return res.status(500).send({
            status : "Failed",
            message : error.message
        });
    }
};

export { createSeeker, assignSeeker, toggleTopGuru}; 