import React from "react";
import Logo from '../imagens/Logo.png'
import styles from './styles.module.css'
import Botao from "../Botao";

export default function Navbar(){
    return(
        <>
            <nav className={styles.container}>
                <div>
                    <img src={Logo} className={styles.imagemLogo} />
                </div>
                
                <div>
                    <ul className={styles.containerLinks}>
                        <li><a>Início</a></li>
                        <li><a>O Projeto</a></li>
                        <li><a>Ações</a></li>
                        <li><a>Mapa</a></li>
                        <li>
                    <Botao type="primario" onclick={()=>{
                        console.log("fui clicado")
                    }}> Quero apoiar </Botao>
                    </li>
                    </ul>
                </div>

                {/* <div>
                    <Botao type="primario" onClick={()=>{
                        console.log("fui clicado")
                    }}> Quero apoiar </Botao>
                </div> */}
            </nav>
        
        </>
    )
}