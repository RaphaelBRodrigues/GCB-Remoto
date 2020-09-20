import React, {useEffect, useState} from 'react';
import { deleteDoctor , updateDoctor } from "./handles";
import "./index.css";

export default ({ doctor , updateList }) => {

   //Form
    const [name,setName] = useState(doctor.name);
    const [crm,setCrm] = useState(doctor.crm);
    const [phone,setPhone] = useState(doctor.phone);
    const [state,setState] = useState(doctor.state);
    const [city,setCity] = useState(doctor.city);


    const [isEditable,setIsEditable] = useState(false);


    async function confirmDeleteDoctor(id){
        const sure = window.confirm("Deseja deletar o doutor(a) "+doctor.name+"?");

        if(sure){
            await deleteDoctor(id);
            updateList(id);
        }
    }

    async function saveDoctor(e){

        e.preventDefault();

        const name = e.target.name.value;
        const crm = e.target.crm.value;
        const phone = e.target.phone.value;
        const state = e.target.state.value;
        const city = e.target.city.value;

        const data = {name,crm,phone,state,city};

        console.log(data);

        const res = await updateDoctor(data,doctor.id);

        if(res){
            alert("Usuário atualizado!!");
            updateList(doctor.id);
            setIsEditable(false);
        }else{
            alert("Falha ao atualizar usuário!!");
            setIsEditable(false);
        }
    }

    return (
        <section id="doctor-card">
            <fieldset>
                <form id={"update"+doctor.id} onSubmit={saveDoctor} method={"post"}>

                <legend>
                    <p>
                        {isEditable ?  <input name={"name"} onChange={(e)=>setName(e.target.value)} value={name}/> :doctor.name}
                    </p>
                </legend>
                <div>
                    <div>
                        <ul>
                                <li>
                                    Telefone: {isEditable ? <input name={"phone"} onChange={(e)=>setPhone(e.target.value)} value={phone}/>  : doctor.phone}
                                </li>
                                <li>
                                    CRM: {isEditable ? <input  name={"crm"} onChange={(e)=>setCrm(e.target.value)} value={crm}/> :doctor.crm}
                                </li>
                                <li>
                                    Estado: {isEditable ? <input name={"state"} onChange={(e)=>setState(e.target.value)} value={state}/> :doctor.state}
                                </li>
                                <li>
                                    Cidade: {isEditable ? <input  name={"city"} onChange={(e)=>setCity(e.target.value)} value={city}/> :doctor.city}
                                </li>
                        </ul>
                    </div>
                    <div>

                        {/*{specialities && specialities.map((speciality)=>{*/}
                        {/*        return <p>teste</p>*/}
                        {/*})}*/}
                    </div>
                </div>
                <button type={"button"} onClick={()=>confirmDeleteDoctor(doctor.id)}>
                    Deletar
                </button>
                <button type={"button"} onClick={()=>{setIsEditable(!isEditable)}}>
                    Atualizar
                </button>
                {isEditable ?
                    <button form={"update"+doctor.id} type={"submit"}>
                        Salvar
                    </button>
                    : null}
                </form>
            </fieldset>
        </section>
    );
}

