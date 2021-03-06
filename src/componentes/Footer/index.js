import React from "react";
import styles from './styles.module.css'

import LogoBranca from '../../assets/img/Logo-Branca.png'
import IconeYoutube from '../../assets/img/Icone-Youtube.png'
import IconeInstagram from '../../assets/img/Icone-Instagram.png'
import IconeFacebook from '../../assets/img/Icone-Facebook.png'

export default function Footer(){
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.containerEsquerda}>
                    <img src={LogoBranca} className={styles.logoFooter} />

                    <p className={styles.texto}>O projeto Mostre Pra Elas que visa combater a violência doméstica na cidade de São Paulo. Vamos juntas tornar a cidade de São Paulo um lugar mais seguro!</p>
                </div>
            </div>

            <div className={styles.icones}>
                <img src={IconeYoutube} />
                <img src={IconeInstagram} />
                <img src={IconeFacebook} />
            </div>
        </div>
    )
}