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
            <form method={"post"} onSubmit={createDoctor}>
                <fieldset>
                    <legend>
                        Cadastro
                    </legend>
                    <div>
                        <div>
                            <label>
                                Nome do médico
                            </label>
                            <input placeholder={"Ex:Raphael Barbosa Rodrigues"} name={"name"} id={"name"}/>
                        </div>
                        <div>
                            <label>
                                CRM
                            </label>
                            <input placeholder={"Ex:3424234"}  name={"crm"} id={"crm"}/>
                        </div>
                        <div>
                            <label>
                               Telefone
                            </label>
                            <input placeholder={"Ex:(11) 454841-4444"}  name={"phone"} id={"phone"}/>
                        </div>
                        <div>
                            <label>
                                Estado
                            </label>
                            <input placeholder={"Ex:SP"}  name={"state"} id={"state"} maxLength={2}/>
                        </div>
                        <div>
                            <label>
                                Cidade
                            </label>
                            <input placeholder={"Ex:São Paulo"}  name={"city"} id={"city"}/>
                        </div>
                        <button>Cadastrar</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

