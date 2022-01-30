import React from "react";
import styles from './styles.module.css'
import Botao from "../Botao";

export default function Ajuda(){
    return(
        <div className={styles.container}>
            <h2 className={styles.subTitulo}>Se identificou em uma situação de violência?</h2>
            <p className={styles.textoApoio}>Saiba que você não está sozinha! Existe toda uma rede de apoio preparada para te receber e orientar sobre possíveis soluções. Veja qual projeto ou iniciativa mais se enquadra em sua situação.</p>

            <div className={styles.botaoAjuda}>
                <Botao type="secundario" onclick={()=>{
                            console.log("fui clicado")
                        }}> Clique para saber suas opções </Botao>
            </div>

        </div>
    )
}