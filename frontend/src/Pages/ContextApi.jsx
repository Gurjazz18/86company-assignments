import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
 const[state,setsate]=useState({
    isAuth:false,
    token:null
 })

 const loginUser=(token)=>{
    setsate({
        ...state,
         isAuth:true,
         token
    })
 }

 const logoutUser=()=>{
    setsate({
        ...state,
        isAuth:false,
        token:null
    })
 }


  return (
    <AppContext.Provider value={{authState:state,loginUser,logoutUser  }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

