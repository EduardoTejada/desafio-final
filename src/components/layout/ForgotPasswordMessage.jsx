import { Link } from 'react-router-dom'
import "./ForgotPasswordMessage.css"

function ForgotPasswordMessage() {
    return (
    <>
    <div><Link className="forgot-password-message" to="/forgot-password">Esqueci a senha</Link></div>
    </>
    )
}

export default ForgotPasswordMessage;