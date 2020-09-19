import React, {useEffect, useState} from 'react';
import "./index.css";


import {createDoctorAPI} from "./handles";



export default () => {

    async function createDoctor(e){
        e.preventDefault();

        const name = e.target.name.value;
        const crm = e.target.crm.value;
        const phone = e.target.phone.value;
        const state = e.target.state.value;
        const city = e.target.city.value;

        const data = {name,crm,phone,state,city};

        const res = await createDoctorAPI(data);

        if(res){
            alert("Usuário cadastrado com sucesso!!");
        }else{
            alert("Ocorreu uma falha ao cadastrar o usuário");
        }
    }


    return (
        <section id="doctor-create-form">
            <form onSubmit={createDoctor}>
                <fieldset>
                    <legend>
                        Cadastro
                    </legend>
                    <div>
                        <div>
                            <label>
                                Nome do médico
                            </label>
                            <input name={"name"} id={"name"}/>
                        </div>
                        <div>
                            <label>
                                CRM
                            </label>
                            <input name={"crm"} id={"crm"}/>
                        </div>
                        <div>
                            <label>
                               Phone
                            </label>
                            <input name={"phone"} id={"phone"}/>
                        </div>
                        <div>
                            <label>
                                Estado
                            </label>
                            <input name={"state"} id={"state"} maxLength={2}/>
                        </div>
                        <div>
                            <label>
                                Cidade
                            </label>
                            <input name={"city"} id={"city"}/>
                        </div>
                        <button>Cadastrar</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

