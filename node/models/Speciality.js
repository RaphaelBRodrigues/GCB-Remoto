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

    async getSpecialityById(id){

        try{
            const result = await knex.select().from("speciality").where({id});
            if(result.length > 0){
                return{
                    status:true,
                    result
                }
            }else{
                return {
                    status: false
                }
            }
        }catch (err){
            return{
                status:false,
                err
            }
        }

    }

    async createDoctorSpecialities(doctor_id,specialities){
        console.log(specialities);
        return true;
    }

    async getDoctorSpecialities(doctor_id){
        console.log("getDoctorSpecialities");
    }
}


module.exports = new Speciality();