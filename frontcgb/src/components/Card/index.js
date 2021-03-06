import React, {useEffect, useState} from 'react';
import { deleteDoctor , updateDoctor , getDoctorSpecialities , deleteSpecialityAPI } from "./handles";
import "./index.css";
import ModalSpeciality from '../ModalSpeciality';

export default ({ doctor , updateList }) => {


   //Form
    const [name,setName] = useState(doctor.name);
    const [crm,setCrm] = useState(doctor.crm);
    const [phone,setPhone] = useState(doctor.phone);
    const [state,setState] = useState(doctor.state);
    const [city,setCity] = useState(doctor.city);

    const [showModalSpeciality,setShowModalSpeciality] = useState(false);


    const [specialities,setSpecialities] = useState([]);

    const [isEditable,setIsEditable] = useState(false);


    async function confirmDeleteDoctor(id){
        const sure = window.confirm("Deseja deletar o doutor(a) "+doctor.name+"?");

        if(sure){
            await deleteDoctor(id);
            updateList(id + Date.now());
        }
    }

    async function listSpecialities(){
        const resp = await getDoctorSpecialities(doctor.id);

        setSpecialities(resp);
        return resp;
    };

    useEffect(()=>{
        listSpecialities().then(()=>{

        });
    },[]);


    async function saveDoctor(e){

        e.preventDefault();

        const name = e.target.name.value;
        const crm = e.target.crm.value;
        const phone = e.target.phone.value;
        const state = e.target.state.value;
        const city = e.target.city.value;

        const data = {name,crm,phone,state,city};

        const res = await updateDoctor(data,doctor.id);

        if(res){
            alert("Usuário atualizado!!");
            updateList(doctor.id + Date.now());
            setIsEditable(false);
        }else{
            alert("Falha ao atualizar usuário!!");
            setIsEditable(false);
        }
    }

   async function deleteSpeciality(speciality_id){
        const data = {
            speciality_id,
            doctor_id:doctor.id
        }

        const sure = window.confirm("Tem certeza de que deseja deletar esta especialidade");

        if(sure) {
            const res = await deleteSpecialityAPI(data);
            if (res) {
                alert("Especialidade deletada");
                await listSpecialities();
            }
        }
    }

    function createNewSpeciality(){
        alert(doctor.id);
    }


    return (
        <section id="doctor-card">
            {showModalSpeciality ?
                <ModalSpeciality doctorsSpecialities={specialities} updateList={updateList} doctor_name={doctor.name} doctor_id={doctor.id} showModalSpeciality={showModalSpeciality} setShowModalSpeciality={setShowModalSpeciality} />
                : null}
            <fieldset>
                <legend>
                    {isEditable ? <input onChange={(e)=>setName(e.target.value)} value={name}/> :doctor.name}
                </legend>

                <form id={"update"+doctor.id} onSubmit={saveDoctor} method={"post"}>
                    {isEditable ?  <input style={{display:"none"}}  name={"name"} onChange={(e)=>setName(e.target.value)} value={name}/> : null}
                    <div>
                        <div>
                            <ul>
                                    <li>
                                       <label>Telefone:  </label>{isEditable ? <input name={"phone"} onChange={(e)=>setPhone(e.target.value)} value={phone}/>  : doctor.phone}
                                    </li>
                                    <li>
                                        <label> CRM:</label> {isEditable ? <input  name={"crm"} onChange={(e)=>setCrm(e.target.value)} value={crm}/> :doctor.crm}
                                    </li>
                                    <li>
                                        <label>  Estado: </label>{isEditable ? <input maxLength={2} name={"state"} onChange={(e)=>setState(e.target.value)} value={state}/> :doctor.state}
                                    </li>
                                    <li>
                                        <label> Cidade:</label> {isEditable ? <input  name={"city"} onChange={(e)=>setCity(e.target.value)} value={city}/> :doctor.city}
                                    </li>
                            </ul>
                        </div>
                        <div>
                           <ul>
                               <li>
                                    Especialidades

                               </li>

                               {specialities.map((speciality,index)=>{
                                   return (
                                       <li key={index}>
                                           {speciality.name}
                                           {isEditable && <sup onClick={()=>{deleteSpeciality(speciality.id)}}> X </sup>}
                                       </li>
                                   );
                               })}
                           </ul>

                        </div>
                    </div>
                    <button className={"danger"} type={"button"} onClick={()=>confirmDeleteDoctor(doctor.id)}>
                        Deletar
                    </button>
                    <button type={"button"} onClick={()=>{setIsEditable(!isEditable)}}>
                        {isEditable ? "Voltar" : "Atualizar"}
                    </button>

                    {isEditable ?
                        <button className={"primary"} onClick={()=>{setShowModalSpeciality(!showModalSpeciality)}} type={"button"}>
                            Adicionar nova especialidade
                        </button>
                        : null}

                    {isEditable ?
                        <button className={"success"} form={"update"+doctor.id} type={"submit"}>
                            Salvar
                        </button>
                        : null}
                </form>
            </fieldset>
        </section>
    );
}

