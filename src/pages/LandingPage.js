import LandingPageHeader from '../components/layout/LandingPageHeader';
import classes from "../components/layout/LandingPage.module.css"
import img from './../imgs/PersonLearning.svg'
function LandingPage () {
    return (
    <div>
        <LandingPageHeader />
        <body className={classes.body}>
                <div className={classes.container}>
                    <h1>Aprenda com a 3035tech!</h1>
                    <ul>
                        <li><span>Desenvolva suas habilidades com a nossa equipe.</span></li>
                        <li><span>Faça tarefas e receba o Feedback.</span></li>
                        <li><span>Personalize sua experiência.</span></li>
                        <li><span>Estude em qualquer lugar.</span></li>
                    </ul>
                </div>
                <img src={img} alt="Imagem de uma pessoa aprendendo" className={classes.img}/>
                <div className={classes.line}/>
        </body>
    </div>
    )
}

export default LandingPage;