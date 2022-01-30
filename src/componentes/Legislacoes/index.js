import React from "react";
import Botao from '../Botao'
import styles from './styles.module.css'

export default function Legislacao(){
    return(
        <div className={styles.containerSecao}>
            <div className={styles.container}>
                <h2 className={styles.subTitulo}>A ajuda está sempre perto de você</h2>
                <p className={styles.textoApoio}>Selecione no mapa o local onde você deseja saber de iniciativas, projetos, centros e delegacias que possam te ajudar.</p>
            </div>

            <div className={styles.containerCards}>
                <div className={styles.card}>
                    <h3 className={styles.nomeLei}>Lei Maria da Penha (nº 11.340)</h3>
                    <h4 className={styles.dataLei}>7 de agosto de 2006</h4>
                    <p className={styles.textoLei}>Cria mecanismos para coibir a violência doméstica e familiar contra a mulher, dispõe sobre a criação dos Juizados de Violência Doméstica e Familiar contra a Mulher, altera o Código de Processo Penal, o Código Penal e a Lei de Execução Penal, e dá outras providências.</p> 
                </div>


                <div className={styles.card}>
                   <h3 className={styles.nomeLei}>Lei do Feminicídio (nº 13.104)</h3>
                   <h4 className={styles.dataLei}>9 de março de 2015</h4>
                   <p className={styles.textoLei}>Prevê o feminicídio como circunstância qualificadora do crime de homicídio, ou seja, quando crime for praticado contra a mulher, pelo simples fato de ser mulher.</p> 
                </div>

                <div className={styles.card}>
                   <h3 className={styles.nomeLei}>Importunação Sexual  (Lei de nº 13.718)</h3>
                   <h4 className={styles.dataLei}>7 de agosto de 2006</h4>
                   <p className={styles.textoLei}>Tipifica os crimes de importunação sexual e de divulgação de cena de estupro. revogando o dispositivo de “ofensa ao pudor”.</p> 
                </div>
            </div>

            <div className={styles.botaoLeis}>
                <Botao type="primario2" onclick={()=>{
                            console.log("fui clicado")
                        }}> Clique para conhecer mais leis </Botao>
            </div>
        </div>
    )
}