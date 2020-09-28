import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
   BrowserRouter as Router,
   Switch,
 } from "react-router-dom";
 //firebase
import {firebase} from '../firebase/firebase-config';
//components
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
//actions
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

   //Mantener el estado de auth al recargar
   const dispatch = useDispatch()

   //creandp un estado local para revisar el estado de la auth
   const [checking, setChecking] = useState(true)
   //creando una bandera para saber si esta autenticado o no
   //Si esta en true puede ver la pantalla del journal, caso contrario saca al usuario a la pantalla login
   const [isLoggedIn, setIsLoggedIn ] = useState(false)

   //Se usa un effect porque el estado vcambia
   useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
         //evaluar si el objeto user tiene algo
         if(user?.uid) {
            dispatch(login(user.uid, user.displayName));
            setIsLoggedIn(true)
         } else {
            setIsLoggedIn(false)
         }
         //termino el chequeo o respuesta
         setChecking(false)
      })
   }, [dispatch, setChecking, setIsLoggedIn])

   //validando la espera de la respuesta
   //Si se muestra los screen significa que ya se tiene el uid del usuario
   if(checking) {
      return (
         <h1>Espere...</h1>
      )
   }

   return (
      <Router>
         <div>
            <Switch>
               {/* Ruta publica */}
               <PublicRoute
                  path="/auth"
                  component={AuthRouter}
                  isLoggedIn={isLoggedIn}
               />
               {/* Ruta privada */}
               <PrivateRoute
                  exact
                  path="/"
                  component={JournalScreen}
                  isLoggedIn={isLoggedIn}
               />
            </Switch>
         </div>
      </Router>
   )
}
