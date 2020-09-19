const Doctor = require("../models/Doctor");

class DoctorController{
    async getDoctors(req,res){
        console.log("getDoctors");
    }

    async getDoctorById(req,res){
        const { id } = req.params;
        console.log("getDoctorById");
    }

    async getDoctorByCrm(req,res){
        const { crm } = req.body;
        console.log("getDoctorByCrm");

    }


    async create(req,res){
        const { id,name,crm,state,city,phone } = req.body;
        const data = {id,name,crm,state,city,phone };

        try{
            const result = await Doctor.createDoctor(data);
            if(result.status){
                res.json({
                    status:true,
                    result
                });
                res.status(201);
            }else{
                res.json({
                    status:false,
                    result
                });
                res.status(500);
            }
            return;
        }catch (err){
            res.status(400);
            res.json({
                status:false,
                err,
            });
        }


    }

    async delete(req,res){
        const { id } = req.params;
        console.log("delete");


    }

    async update(req,res){
        const { name,crm,state,city } = req.body;
        const { id } = req.params;
        console.log("update");


    }

}

module.exports = new DoctorController();

