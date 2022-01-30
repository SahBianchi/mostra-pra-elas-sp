import React from "react";
import styles from './styles.module.css'
import LogoAdeSampaePrefeitura from '../../assets/img/logo-adesampa-prefeitura.png'
import LogoBuser from '../../assets/img/logo-buser.png'
import LogoCronapp from '../../assets/img/logo-cronapp.jpg'
import LogoIfood from '../../assets/img/logo-ifood.png'
import LogoUber from '../../assets/img/logo-uber.png'

export default function Acoes(){
    return(
        <div className={styles.container}>
            <h2 className={styles.subTitulo}>Olha só os nossos parceiros!</h2>
            
            <div className={styles.logos}>
                <img src={LogoAdeSampaePrefeitura} className={styles.logo} />
                <img src={LogoBuser} className={styles.logo} />
                <img src={LogoCronapp} className={styles.logo} />
                <img src={LogoIfood} className={styles.logo} />
                <img src={LogoUber} className={styles.logo} />
            </div>
        </div>
    )
}
