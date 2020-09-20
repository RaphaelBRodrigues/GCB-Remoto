import { api } from '../../services/api';


async function getSpecialities(doctor_specialities){

    const response = await api.get("/speciality/");
    const { result } = response.data.result;


    if(result.length > 0){
        return result;
    }

    return false;
}

async function createDoctorSpeciality(doctor_id,specialities){

    try{
        const result = [];
        console.log(specialities);
        specialities.map(async (speciality)=>{
            const data = {
                doctor_id,
                speciality_id:speciality
            };
            console.log(data);

            const response = await api.post("/doctorSpeciality/",{...data});
            result.push(response);
        });
        return result;
    }catch (err){
        return false
    }



}


export { createDoctorSpeciality , getSpecialities };