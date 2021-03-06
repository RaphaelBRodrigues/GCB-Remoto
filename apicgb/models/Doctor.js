const knex = require("../database/connection");


class Doctor{

    async getDoctors(){
        try{
            const result = await knex.select().from("doctor");
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

    async getDoctorByCrm(crm){
        try{
            const result = await knex.select().from("doctor").where("crm","like",`%${crm}%`);

            if(result.length > 0){
                return {
                    status:true,
                    result
                };
            }else{
                return {
                    status:false,

                }
            }

        }catch (err){
            console.log(err);
            return {
                status:false,
                err
            };

        }
    }

    async delete(id){
        try{
            await knex.delete().table("doctorsSpeciality").where({doctor_id:id});
            const result = await knex.delete().table("doctor").where({id});
            const status = result ? true : false;
            return {
                status
            };
        }catch (err){
            return {
                status:false,
                err
            };

        }
    }

    async updateDoctor({id, name, crm, state, city , phone}){

        const data = { name, crm, state, city , phone };

        try{
            const result = await knex.update({...data}).table("doctor").where({id});
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

    async createDoctor({name, crm, state, city,phone}){

        try{
            const result = await knex.insert({
                name,crm,state,city,phone
            }).into("doctor");
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