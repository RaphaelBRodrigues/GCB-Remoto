const knex = require("../database/connection");


class Doctor{

    async getDoctors(){

        try{
            const result = await knex.select().from("doctor");
            console.log(result);
            return {
                status:true,
                result
            };
        }catch (err){
            return {
                status:false,
                err
            };

        }
}

    async getDoctorById(id){
        console.log("getDoctorById");
    }

    async delete(id){
        console.log("delete");
    }

    async updateDoctor(id,name,crm,state,city){
        console.log("updateDoctor");
    }

    async createDoctor({name, crm, state, city,phone}){

        try{
            const result = await knex.insert({
                name,crm,state,city,phone
            }).into("doctor");
             console.log(result);
            return {
              status:true,
              result
            };
        }catch (err){
            return {
              status:false,
              err
            };

        }



     }

}


module.exports = new Doctor();