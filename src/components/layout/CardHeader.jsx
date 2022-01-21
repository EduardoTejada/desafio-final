import style from "./CardHeader.module.css";

function CardHeader(props) {
    return(
    <>
    <header className={style.cardHeader}>
        <h1 className={style.cardHeaderH1}>{props.text}</h1>
        { props.text === "Cadastre-se" && <div className={style.bigUnderlineBar} />}
        { props.text !== "Cadastre-se" && <div className={style.smallUnderlineBar} />}
    </header>
    </>
    )
}

export default CardHeader;