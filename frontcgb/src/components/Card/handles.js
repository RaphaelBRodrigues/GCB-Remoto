import { api } from '../../services/api';


async function deleteDoctor(id){
    const response = await api.delete("/doctor/"+id);
    const { result } = response.data.result;

    return result;
}

async function updateDoctor(data,doctor_id){
    const response = await api.put("/doctor/"+doctor_id,{...data});
    const { result } = response.data.result;


    return result;
}

async function getSpecialities(doctor_id){

    const response = await api.get("/doctorSpeciality/"+doctor_id);
    const { result } = response.data.result;

    if(result.length > 0){
        return result;
    }

    return [];
}

async function deleteSpecialities(data,doctor_id){
    const response = await api.put("/doctor/"+doctor_id,{...data});
    const { result } = response.data.result;


    return result;
}



export { deleteDoctor , updateDoctor ,getSpecialities };