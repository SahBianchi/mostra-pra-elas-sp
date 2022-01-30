import React from "react";
import Logo from '../imagens/Logo.png'
import styles from './styles.module.css'

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
                    </ul>
                </div>
            </nav>
        
        </>
    )
}