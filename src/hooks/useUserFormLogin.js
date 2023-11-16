import {useContext} from "react";
// useRouter rutas next
import { useRouter } from "next/router";
// useLazyQuery traer datos cuando envio parametros 

import { SessionContext } from "@/contexts/SessionContext";

export const useUserFormLogin = ()=>{
  const {logIn} = useContext(SessionContext)
    const router = useRouter();
    
    const initialValues = {
        email: "",
        password:"12345",
    }

    const validate = (values)=>{
        let error = {}
        if(values.email.length < 1)
        { error.email = "Por favor ingresa un email valido" }

        if(values.password.length < 1)
        { error.password = "Por favor ingresa un password valido" }
        return error;
    }

    const onSubmit = async (values, { resetForm }) => {
        resetForm();
        const response = await logIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        });
        if (!response.error) {
          // console.log("entro", response);
        }
      };



return{
    initialValues,
    validate,
    onSubmit,
}
}