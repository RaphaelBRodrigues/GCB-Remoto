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
        console.log(id);
    }
}

module.exports = new SpecialityController();

