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

    async createDoctorSpecialities(doctor_id,speciality_id){
        const data = { doctor_id , speciality_id};
        try{
            const result = await knex.insert({...data}).into("doctorsSpeciality");
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

    async getDoctorSpecialities(doctor_id){
        console.log("getDoctorSpecialities");
    }
}


module.exports = new Speciality();