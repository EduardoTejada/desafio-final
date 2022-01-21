import { Link } from 'react-router-dom'

function LoginMessage() {
    return (
    <>
    <div className="cardMessage">Já tem uma conta? <Link to="/login">Fazer Login</Link></div>
    </>
    )
}

export default LoginMessage;