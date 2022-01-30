import React from "react";
import styles from '../Botao/styles.module.css'

export default function Botao({type, children, onclick}){
    function click(){
        return onclick()
    }
    return(
        <>
        <button className={styles[type]} onClick={click}>{children}</button>
        </>
    )
}