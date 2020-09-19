const knex = require("../database/connection");


class Speciality{

    async getSpecialities(){

        try{
            const result = await knex.select().table("speciality");
            if(result){
                return {
                    status:true,
                    result
                };
            }else{
                return {
                    status:false,
                    result
                };
            }


        }catch (err){
            return {
                status:false,
                err
            };
        }

    }

    async getDoctorSpecialities(doctor_id){
        console.log("getDoctorSpecialities");
    }
}


module.exports = new Speciality();