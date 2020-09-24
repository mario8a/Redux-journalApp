import { types } from "../types/types";

// export const login = (uid, displayName) => {
//    return {
//       type: types.login,
//       payload: {
//          uid,
//          displayName
//       }
//    }
// }


//Forma corta

export const login = (uid, displayName) => ({
   type: types.login,
   payload: {
      uid,
      displayName
   }
})