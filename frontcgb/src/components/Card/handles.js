import { api } from '../../services/api';


async function deleteDoctor(id){
    console.log(id);
    const response = await api.delete("/doctor/"+id);
    const { result } = response.data.result;

    return result;
}



export { deleteDoctor };