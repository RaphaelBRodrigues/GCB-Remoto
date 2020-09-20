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



export { deleteDoctor , updateDoctor };