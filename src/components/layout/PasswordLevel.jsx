import "./PasswordLevel.css"

function PasswordLevel(props) {
    const level = checkPassword(props.password);
    return (
    <>
    <div className="levelContainer">
        { level >= 1 ? <div className="bar1-green" /> : <div className="bar1-gray" />}
        { level >= 2 ? <div className="bar2-green" /> : <div className="bar2-gray" />}
        { level >= 3 ? <div className="bar3-green" /> : <div className="bar3-gray" />}
        { level === 4 ? <div className="bar4-green" /> : <div className="bar4-gray" />}
        { level === 0 && <span>Muito Fraca</span> }
        { level === 1 && <span>Fraca</span> }
        { level === 2 && <span>Média</span> }
        { level === 3 && <span>Forte</span> }
        { level === 4 && <span>Muito Forte</span> }
    </div>
    </>
    )
}

function checkPassword(password) {
    if(password.length < 6) return 0;
    else if(hasLowerCase(password) && hasUpperCase(password)){
        if(hasNums(password) && (hasLowerCase(password) || hasUpperCase(password))){
            if(hasSpecialCharacters(password)){
                return 4;
            }
            else{
                return 3;
            }
        }
        else{
            return 2;
        }
    }
    else{
        return 1;
    }
}

function hasLowerCase(password) {
    return (/[a-z]/.test(password));
}

function hasUpperCase(password) {
    return (/[A-Z]/.test(password));
}

function hasNums(password) {
    if(password.search(/\d/) !== -1) {
        return true;
    }
    else return false;
}

function hasSpecialCharacters(password) {
    return(/[ `!@#$ %^&*()_+\-=[\]{};':"\\|,.<>/? ~]/.test(password));
}

export default PasswordLevel;