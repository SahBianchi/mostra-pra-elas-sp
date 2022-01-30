import React from "react";
import styles from './styles.module.css'
import ImgInicio from '../imagens/Img-Inicio.png'


export default function Inicio(){
    return(
        <>
            <div className={styles.containerBanner}>
                <img src={ImgInicio} className={styles.banner} />
            </div>

            <div className={styles.containerTexto}>
                <h1 className={styles.titulo}>Mostra Pra Elas e ajude a quebrar esse ciclo de abuso!</h1>
                <p className={styles.textoApoio}>Saiba as opções e projetos que te ajudam a sair desta situação de violência. Vem com a gente!</p>
            </div>
          
          
        </>
    )
}