const Speciality = require("../models/Speciality");

class SpecialityController{
    async getSpecialities(req,res){
        console.log();
    }

    async getSpecialityById(req,res){
        const { id } = req.params;
        console.log(id);
    }
}

module.exports = new SpecialityController();

