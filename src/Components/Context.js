import React,{useState,createContext} from "react";

export const ProductContext=createContext();

export const ProductProvider =(props) => {

    const[product,setProduct]=useState([])

    return (<ProductContext.Provider value={[product,setProduct]}>
        {props.children}
    </ProductContext.Provider>);
}