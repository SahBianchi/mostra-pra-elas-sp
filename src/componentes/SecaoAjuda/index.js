import React from "react";
import Botao from '../Botao'
import styles from './styles.module.css'

export default function SecaoAjuda(){
    return(
        <div className={styles.container}>
            <div className={styles.containerTexto}>
                <h2 className={styles.subTitulo}>Quero ajudar uma mulher!</h2>
                <p className={styles.textoApoio}>A Rede de Apoio é parte fundamental no combate à violência doméstica. Por isso, toda ajuda é sempre muito bem vinda. Clique e saiba como ajudar uma mulher.</p>
            </div>

            <div className={styles.botaoAjuda} >
            <Botao type="secundario" onclick={()=>{
                        console.log("fui clicado")
                    }}> Quero ajudar </Botao>
            </div>
        </div>
    )
}