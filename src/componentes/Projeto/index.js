import React from "react";
import styles from './styles.module.css'
import ImgProjeto from '../../assets/img/Img-Projeto.png'

export default function Projeto(){
    return(
        <div className={styles.container}>
            <div className={styles.containerTexto}>
                <h2 className={styles.subTitulo}>Quer saber mais sobre o projeto?</h2>

                <p className={styles.texto1}>O Mostra pra Elas é um portal de acolhimento para as mulheres da cidade de São Paulo. Aqui você encontra as principais políticas públicas e organizações de suporte às mulheres, em situação de violência, distribuídas na cidade.
                </p>

                <p className={styles.texto2}>Vamos juntas tornar a cidade de São Paulo um lugar mais seguro!</p>

            </div>

            <div>
                <img src={ImgProjeto} className={styles.imgProjeto}/>
            </div>
        </div>
    )
}