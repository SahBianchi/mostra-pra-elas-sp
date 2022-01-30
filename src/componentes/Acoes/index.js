import React from "react";
import styles from './styles.module.css'
import Card from 'react-bootstrap/Card'
import ImgAjuda from '../../assets/img/Img-Acao1.png'
import ImgDenuncia from '../../assets/img/Img-Acao2.png'
import ImgEmprego from '../../assets/img/Img-Acao3.png'
import ImgViolencia from '../../assets/img/Img-Acao4.png'

export default function Acoes(){
    return(
        <div className={styles.container}>
            <div className={styles.containerTexto}>
                <h2 className={styles.subTitulo}>Qual é a sua situação hoje?</h2>

                <p className={styles.texto1}>Selecione uma das opções abaixo e descubra quais são as ações que você pode tomar.
                </p>

            </div>

            <div className={styles.containerCards}>
                <Card className={styles.cardBody}>
                    <Card.Img src={ImgAjuda} variant="top"/>
                    <Card.Body>
                        <Card.Text className={styles.cardText}>
                            Acesse aqui
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.cardBody}>
                    <Card.Img src={ImgDenuncia} variant="top"/>
                    <Card.Body>
                        <Card.Text className={styles.cardText}>
                            Acesse aqui
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.cardBody}>
                    <Card.Img src={ImgEmprego} variant="top"/>
                    <Card.Body>
                        <Card.Text className={styles.cardText}>
                            Acesse aqui
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.cardBody}>
                    <Card.Img src={ImgViolencia} variant="top"/>
                    <Card.Body>
                        <Card.Text className={styles.cardText}>
                            Acesse aqui
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
} 