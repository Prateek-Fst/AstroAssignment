import gmodel from "../models/gmodel.mjs";

const addGuru = async (req,res) =>{
    try {
        const data = req.body;
        const {email} = req.body;

        const checkGuruExists = await gmodel.findOne({email : email});

        if(checkGuruExists) {
            return res.status(200).send({message : "already exists"});
        }

        const createGuru = await guruModel.create(data);
        return res.status(200).send({
            status : "ok", 
            message : createGuru
        });

    } catch (error) {
        return res.status(500).send({
            status : "Failed",
            message : error.message
        });
    }
};

const assignSeeker = async (req,res) => {
    try {
        let gurus = await gmodel.find({}).sort({ flowCount: -1 });

        if (!gurus.length) {
            return res.status(404).send({ message: "No gurus found" });
        }

        let assignedGuru = gurus[0];
        assignedGuru.flowCount += 1;

        res.status(200).send({ guruId: assignedGuru._id });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const toggleTopGuru = async (req, res) => {
    try {
        const { guruId } = req.params;

        let guru = await gmodel.findById(guruId);
        guru.top = !guru.top;

        res.status(200).send({ message : guru });
    } catch (error) {
        res.status(500).send({ message : error.message });
    }
};

export {addGuru, assignSeeker, toggleTopGuru};