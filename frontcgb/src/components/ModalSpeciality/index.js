import React, {useEffect, useState} from 'react';
import { createDoctorSpeciality , getSpecialities } from './handles';
import "./index.css";


export default ({ doctor_id , doctor_name , setShowModalSpeciality , updateList , doctorsSpecialities , create}) => {




    const [specialities,setSpecialities] = useState([]);
    const [newSpecialities,setNewSpecialities] = useState([]);


    async function showSpecialities(){
        const res = await getSpecialities(doctor_id);
        setSpecialities(res);
    }

    async function addSpeciality(speciality_id){
        const specialitiesList = newSpecialities;
        specialitiesList.push(speciality_id);
        setNewSpecialities(specialitiesList);

    }


    async function saveSpecialities(){

        const res = await createDoctorSpeciality(doctor_id,newSpecialities);


        if(res){
            if(!create){
                updateList();
            }
            setShowModalSpeciality(false);
            window.location.reload(false);  // TEMPORÁRIO - ARRUMAR O RELOAD DA LISTA!!!
            alert("Especialidades salvas");
        }else{
            alert("Ocorreu um erro ao salvar as especialidades");
        }
    }

    useEffect(()=>{
        showSpecialities().then();
    },[]);

    return (
        <div id="speciality-modal">

            <fieldset>
                <legend>
                    { doctor_name }
                </legend>
                <div>

                    <ul>
                        {specialities.map((speciality,index)=>{

                           const isAlready = doctorsSpecialities.some((doctorSpeciality)=>{
                                return doctorSpeciality.id == speciality.id;
                            });

                            if(isAlready){
                                return false;
                            }else {
                                return (
                                    <li key={index}>
                                        {speciality.name}
                                        <button
                                            className={"success"}
                                            onClick={(e) => {
                                                e.target.classList = "disabled";
                                                addSpeciality(speciality.id);
                                            }}
                                        >
                                            Adicionar
                                        </button>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
                <div>
                    <button onClick={()=>setShowModalSpeciality(false)} >
                        Voltar
                    </button>
                    <button className={"success"} onClick={()=>saveSpecialities()} >
                        Salvar
                    </button>
                </div>
            </fieldset>

        </div>
    );
}

