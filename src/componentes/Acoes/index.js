import React from "react";
import styles from './styles.module.css'
// import ImgProjeto from '../../assets/img/Img-Projeto.png'

export default function Acoes(){
    return(
        <div className={styles.container}>
            <div className={styles.containerTexto}>
                <h2 className={styles.subTitulo}>Qual é a sua situação hoje?</h2>

                <p className={styles.texto1}>Selecione uma das opções abaixo e descubra quais são as ações que você pode tomar.
                </p>

            </div>

            <div className={styles.containerCards}>
                <div className={styles.card}>
                    <h3 className={styles.subTitulo}>Onde posso buscar ajuda?</h3>
                    <div className={styles.cardBody}>
                        <h4>Acesse aqui</h4>
                    </div>
                </div>
                
            </div>
        </div>
    )
} 