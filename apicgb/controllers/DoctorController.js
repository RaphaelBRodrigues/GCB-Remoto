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


    async getDoctorByCrm(req,res){
        const { crm } = req.params;

        try{
            const result = await Doctor.getDoctorByCrm(crm);
            if(result.status){
                res.json({
                    result,
                    status:true
                });
                res.status(201);
            }else{
                res.status(404);
                res.json({
                    result,
                    message:"Usuário não encontrado"
                });
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
                res.status(500);
                res.json({
                    result:result,
                    status:false

                });
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

        try{
            const result = await Doctor.delete(id);


            if(result.status){
                res.status(202);
                res.send({result});
            }else{
                res.status(404);
                res.json({
                    result:result,
                    message:"O usuário não existe",
                    status:false

                });
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

    async update(req,res){
        const { name,crm,state,city } = req.body;
        const { id } = req.params;

        const data = {};
        if(id) {
            data.id = id;
            if (name) {
                data.name = name;
            }
            if (crm) {
                data.crm = crm;
            }
            if (state) {
                data.state = state;
            }
            if (city) {
                data.city = city;
            }

            try{
                const result = await Doctor.updateDoctor(data);
                if(result.status){
                    res.status(200);
                    res.json({
                        result,
                        status:true
                    });
                }else{
                    res.status(400);
                    console.log(result);
                    res.json({
                        message:"Falha ao atualizar os dados do médico",
                        status:false
                    });
                }
            }catch (err){
                res.status(500);
                res.json({
                    err:err,
                    message:"Falha ao atualizar os dados do médico",
                    status:false
                });
            }
        }
    }
}

module.exports = new DoctorController();

