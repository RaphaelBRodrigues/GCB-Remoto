const Speciality = require("../models/Speciality");

class SpecialityController{
    async getSpecialities(req,res){
        try{
            const result = await Speciality.getSpecialities();
            if(result.status){
                res.status(201);
                res.json({
                    result,
                    status:true
                });
            }else{
                res.status(500);
                res.json({
                    result,
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

    async getSpecialityById(req,res){
        const { id } = req.params;

        try{
            const result = await Speciality.getSpecialityById(id);
            if(result.status){
                res.status(200);
                res.json({
                    result,
                    status:true
                });
            }else{
                res.status(404);
                res.json({
                    result,
                    status:false,
                    message:"Especialidade não encontrada"
                });
            }
            return;
        }catch (err){
            res.status(400);
            res.json({
                err,
                status:false

            });
            return;
        }

    }

    async createDoctorSpeciality(req,res) {
        const { doctor_id , speciality_id } =  req.body;

        try{
            const result = await Speciality.createDoctorSpecialities(doctor_id,speciality_id) ;

            if(result.err){
                res.status(404);
                res.json({
                    status:false,
                    message:"Usuário ou especialidade inválida",
                    result
                });
            }else {
                res.json({
                    result,
                    status:true
                });
            }
        }catch (err){
            res.status(500);
            res.json({
                status:false,
                err
            });
        }


    }

    async getDoctorSpecialities(req,res) {
        const { id } = req.params;

        try{
            const result = await Speciality.getDoctorSpecialities(id) ;

            if(result.status){
                res.status(200);
                res.json({
                    result,
                    status:true
                });
            }
            else {
                res.status(404);
                res.json({
                    status:false,
                    message:"Usuário inválido ou não possui especialidades cadastradas",
                });
            }
        }catch (err){
            res.status(500);
            res.json({
                status:false,
                err
            });
        }
    }

    async deleteDoctorSpecialities(req,res) {
        const { doctor_id , speciality_id } =  req.params;

        try{
            const result = await Speciality.deleteDoctorSpecialities(doctor_id,speciality_id) ;

            if(result.status){
                res.status(200);
                res.json({
                    result,
                    status:true
                });
            }
            else {
                res.status(404);
                res.json({
                    status:false,
                    message:"Usuário inválido ou o usuário não possui esta especialidade",
                });
            }
        }catch (err){
            res.status(500);
            res.json({
                status:false,
                err
            });
        }
    }

}

module.exports = new SpecialityController();

