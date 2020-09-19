const Doctor = require("../models/Doctor");

class DoctorController{
    async getDoctors(req,res){

        try{
            const result = await Doctor.getDoctors();
            if(result.status){
                res.json({
                    result,
                    status:true
                });
                res.status(201);
            }else{
                res.json({
                    result,
                    status:false
                });
                res.status(500);
            }
            return;
        }catch (err){
            res.status(400);
            res.json({
                err,
                status:false

            });
        }


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
                    result,
                    status:true

                });
                res.status(201);
            }else{
                res.json({
                    result:result,
                    status:false

                });
                res.status(500);
            }
            return;
        }catch (err){
            res.status(400);
            res.json({
                err,
                status:false
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

