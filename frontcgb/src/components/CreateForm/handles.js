import { api } from '../../services/api';


async function createDoctor(){
    const response = await api.post("/doctor");
    const { result } = response.data.result;

    return result;
}



export { createDoctor };