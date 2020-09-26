import React from 'react'
import validator from 'validator';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {


   const [formValues, handleInputChange] = useForm({
      name: 'Mario',
      email: 'mario@gmail.com',
      password: '123456',
      password2: '123456',
   })

   const {name, email, password, password2} = formValues;

   const handleRegister = (e) => {
      e.preventDefault()

      //validacion
      if(isFormValid()) {
         console.log('Formulario valido')
      }
   }

   //funcion para validar formulario
   const isFormValid = () => {

      if(name.trim().length === 0) {
         console.log('Name is required')
         return false
      } else if(!validator.isEmail(email)) {
         console.log('email is not valid')
         return false
      } else if(password !== password2 || password.length < 5) {
         console.log('password incorrecto')
         return false
      }

      return true
   }
   

   return (
      <>
        <h3 className="auth__title">Register</h3>

        <form action="" onSubmit={handleRegister}>

         <div className="auth__alert-error">
            Hola mundo
         </div>

        <input 
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
         />

         <input 
            type="text"
            placeholder="correo@gmail.com"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
         />

         <input 
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            value={password}
            onChange={handleInputChange}
         />

         <input 
            type="password"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
            value={password2}
            onChange={handleInputChange}
         />

         <button
            type="submit"
            className="btn btn-primary btn-block mb-5"
         >
            Register
         </button>

         <p className="txt-singup">
            Do you hace account?
            <Link className="btn-signup link" to="/auth/login">
               Sign In
            </Link> 
         </p>

        </form>
      </>
   )
}
