import { warning } from "@remix-run/router";
import React from "react";
import styles from "./Login.module.css";


const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) =>{
    let errors ={};

    if (!regexEmail.test(inputs.user)){
        errors.user = 'El usuario debe ser un correo electrónico'
    }

    if (!inputs.password){
        errors.password = 'Se requiere una contraseña'
    }
    return errors;
}

export default function Login () {

    const [inputs, setInputs] = React.useState({
        user : '',
        password: ''
    });

    const [errors, setErrors] = React.useState({
        user: '',
        password: ''
    });

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
        setErrors(validate({
            ...inputs,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Object.values(errors).length){
            alert("Datos completos")
            setInputs({
                user: '',
                password: ''
            })
            setErrors({
                user:'',
                password:''
            })

        }else {
            alert('Debe llenar todos los campos')
        }
    }



    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user" className={styles.label}>Usuario: </label>
                    <input type= "text" name="user"  placeholder="Escribe tu usuario..." 
                    value = {inputs.name} onChange={handleChange} className={errors.user && 'warning'}></input>
                    {errors.user && <p className={styles.danger}>{errors.user}</p>}
                <label htmlFor="password">Contraseña: </label>
                    <input type="text" name="password" placeholder="Escribe tu contraseña..."
                    value={inputs.password} onChange={handleChange} className={errors.password && 'warning'}></input>
                    {errors.password && <p className={styles.danger}>{errors.password}</p>}
                <button type = "submit" className={styles.btn}>Ingresar</button>
            </form>
        </div>
    )
}