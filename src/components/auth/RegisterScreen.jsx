import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom';
//Custom hooks
import { useForm } from '../../hooks/useForm'
//actions
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

   //Tarea: Hacer el dispatch de cada accion
   const dispatch = useDispatch();
   //Este hook regresa la informacion que hay en redux
   // const state = useSelector(state => state);
   const {msgError} = useSelector(state => state.ui);
   // console.log(msgError);

   const [formValues, handleInputChange] = useForm({
      name: 'Mario',
      email: 'demo@gmail.com',
      password: '123456',
      password2: '123456',
   })

   const {name, email, password, password2} = formValues;

   const handleRegister = (e) => {
      e.preventDefault()

      //validacion
      if(isFormValid()) {
         // console.log('Formulario valido')
         dispatch(startRegisterWithEmailPasswordName(email,password,name))
      }
   }

   //funcion para validar formulario
   const isFormValid = () => {

      if(name.trim().length === 0) {
         // console.log('Name is required')
         dispatch(setError('Name is required'))
         return false
      } else if(!validator.isEmail(email)) {
         dispatch(setError('email is not valid'))
         return false
      } else if(password !== password2 || password.length < 5) {
         dispatch(setError('password incorrecto'))
         return false
      }
      //Hacer el remove del error
      dispatch(removeError());
      return true
   }
   

   return (
      <>
        <h3 className="auth__title">Register</h3>

        <form 
         onSubmit={handleRegister}
         className="animate__animated animate__fadeIn animate__faster"
         >

         {
            msgError &&
            (
               <div className="auth__alert-error">
               {msgError}
               </div>
            )
         }

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
