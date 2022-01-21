import { Link } from "react-router-dom";
import classes from './HeaderCarousel.module.css';
import logo from '../../imgs/logo-3035.svg';
import acount from '../../imgs/headerCarousel_Img/acount.png';
import notification from '../../imgs/headerCarousel_Img/notification.png';
import exite from '../../imgs/headerCarousel_Img/exite.png';
import search from '../../imgs/headerCarousel_Img/search.png';

import exitePop from '../../imgs/headerCarousel_Img/exitePop.png';


    
function HeaderCarousel(){

    function Popups(){
        
            
                <img src={exitePop} className={classes.exitePop} alt='teste' />
            
        
    }
    
    return(
        
        <header className={classes.header}>
            <div>
                <img className={classes.img} src={logo} alt="Logo da 3035 Tech" />
            </div>
            
            <div className={classes.search}>
                <img src={search} alt="Icone de lupa" ></img>
                <input type="text" id="search" name="search" placeholder="Pesquisar"></input>
            </div>
            <div className={classes.eventos}>
                <Link to="/">Eventos</Link>
            </div>
            <div className={classes.eventos}>
                <Link to="/">Calendario</Link>
            </div>
            <div>
                <img className={classes.icone1} src={notification} alt="Icone de notificaçao" ></img>  
            </div>
            <div>
                <img className={classes.icone2}  src={acount} alt="Icone de conta" />   
            </div>
            <div id="teste">
                <img className={classes.icone3} src={exite} alt="Icone sair" onMouseOver={Popups()}/>   
            </div>
            
        </header>
    
    );
}

export default HeaderCarousel;