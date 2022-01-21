import { Link } from 'react-router-dom'

import Button from "../layout/Button";
import mainHeaderStyle from "./MainHeader.module.css"

import img from "../../imgs/logo-3035.svg"

function MainHeader(props) {
    let pathing = "";
    if(props.textBtn === "Cadastrar-se"){
        pathing = "/create-user";
    }
    else{
        pathing = "/login"
    }
    return (
    <>
    <header className={mainHeaderStyle.mainheader}>
        <Link to="/">
            <img src={img} alt="Logo 3035TECH" className={mainHeaderStyle.logo}/>
        </Link>
        <nav>
            <Link to={pathing}>
                <Button className={mainHeaderStyle.btn}>{props.textBtn}</Button>
            </Link>
        </nav>
    </header>
    </>
    )
}

export default MainHeader;
