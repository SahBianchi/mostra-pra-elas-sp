import React from "react";
import styles from './styles.module.css'
import Ccm from '../../assets/img/ccm.png'
import Creas from '../../assets/img/creas.png'
import Crm from '../../assets/img/crm.png'
import Delegacia from '../../assets/img/delegacia.png'
import Gevid from '../../assets/img/gevid.png'
import Outros from '../../assets/img/outros.png'
import ServicoDeViolencia from '../../assets/img/servico-de-violencia.png'


export default function Maps(){
    return(
        <div className={styles.container}>
            <div className={styles.containerTexto}>
                <h2 className={styles.subTitulo}>A ajuda está sempre perto de você</h2>

                <p className={styles.texto1}>Selecione no mapa o local onde você deseja saber de iniciativas, projetos, centros de cidadania da Mulher e delegacias que possam te ajudar. Inserindo o seu endereço você consegue buscar os mais próximos de sua casa.
                </p>

                <p className={styles.texto2}>Vamos juntas tornar a cidade de São Paulo um lugar mais seguro!</p>

            </div>

            <div>
                <p>
                <iframe width="1166" height="488" src="//pt.batchgeo.com/map/393bcb8ef4bc817f02f19e829e79a1dc" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
            <p><small>Veja o mapa <a href="https://pt.batchgeo.com/map/393bcb8ef4bc817f02f19e829e79a1dc">Mostra Pra Elas</a> em tela cheia</small></p>
            
                <ul className={styles.listaMaps}>
                    <li className={styles.listaMaps}><img src={Crm} /><strong>   CRM - Centros de Referência da Mulher</strong> - São unidades que oferecem às mulheres em situação de violência atendimento psicológico, social, e jurídico. Seg a Sex em horário comercial. </li>

                    <li className={styles.listaMaps}><img src={Ccm} /><strong>   CCM - Centros de Cidadania da Mulher</strong> - São espaços de qualificação e formação em cidadania, nos quais mulheres de diferentes idades, raças e crenças podem se organizar e defender seus direitos sociais, econômicos e culturais.</li>

                    <li className={styles.listaMaps}><img src={Creas} /><strong>   CREAS - Centro de Referência Especializado de Assistência Social</strong> - da Secretaria Municipal de Assistência e Desenvolvimento Social (SMADS), oferece acompanhamento técnico especializado desenvolvido por equipe multiprofissional para potencializar a capacidade de proteção da família e favorecer a reparação da situação de violência.</li>

                    <li className={styles.listaMaps}><img src={Outros} /><strong>   Casa da Mulher Brasileira</strong> - O espaço de 3.659 m2 atende 24 horas por dia para prestar serviços integrais e humanizados para mulheres em situação de violência.</li>

                    <li className={styles.listaMaps}><img src={Gevid} /><strong>   GEVID - MPSP</strong> - O GEVID, órgão do Ministério Público de São Paulo, atua na defesa e proteção dos direitos das mulheres em situação de violência doméstica e familiar, por meio da responsabilização dos/das autores/as de violência e pela consecução de ações e projetos voltados à efetivação da Lei Maria da Penha e à prevenção de situações de violência.</li>

                    <li className={styles.listaMaps}><img src={ServicoDeViolencia} /><strong>   Serviços de Violência Sexual e Aborto Legal</strong> - Atendimento médico para mulheres vítimas de violência sexual. A denúncia da violência sexual e o Boletim de Ocorrência são importantes para apurar e punir o crime sexual, mas NÃO obrigatórios para atendimento e interrupção da gravidez.</li>

                    <li className={styles.listaMaps}><img src={Delegacia} /><strong>   Delegacia Especializada de Atendimento à Mulher</strong> - Delegacias Policiais especializadas no atendimento à mulheres vítimas.</li>

                    <li className={styles.listaMaps}><img src={Outros} /><strong>   Defensoria Pública de SP - Núcleo Especializado de Promoção e Defesa dos Direitos das Mulheres</strong> - O Núcleo possui atuação de destaque na aplicação da Lei nº 11.340/2006, também conhecida como Lei Maria da Penha, que prevê medidas de prevenção e repressão à violência doméstica e familiar contra a mulher. O órgão a companha e auxilia as Defensorias Especializadas no atendimento às mulheres em situação de violência doméstica, vinculadas aos Juizados Especiais de Violência Doméstica.</li>
                </ul>
            </div>
        </div>
    )
}