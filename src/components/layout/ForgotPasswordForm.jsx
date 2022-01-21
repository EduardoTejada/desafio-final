import { useState } from 'react'
import Button from "./Button.jsx"

function ForgotPasswordForm () {
    
    const [ email, setEmail ] = useState("");

    let emailIsValid = /\S+@\S+\.\S+/.test(email);
    let showEmailWarning = !emailIsValid && email !== '';

    function submitHandler(event) {

        event.preventDefault()

        if(emailIsValid)
        {
            /*const userData = {
                email: email
            }*/
        }
    }

    return(
    <>
        <form className="form" onSubmit={submitHandler}>
            { showEmailWarning && <div className="invalidEmail">Insira um enderço de email válido.</div> }
            <div className="control">
                <img src="https://lh3.googleusercontent.com/09s5-J6z21Tjpelb9DimYIj9fa-vV01O8cOWLwf-vwOrRWqhw9ihRtvkvJ2SHjIzvOzD9zTSAgjEtEfJVL7zbBFyK_kNsZrszooFatqd6dMJiac7zLb0LK6koN3EzLWCXMEESMVK1aid1_f6BJSMrqNA3ankho6y0NHGajNMJII_N7cOf91vR80UxUFqJSEHxiXv7TRp4UWZN1ouJWsYxMcZO7n4K8rAlOWQy9fNiccse7K-BhsfHNQPTZ4hxA4KbAA17FRrDH0GTtNoxsN5pKXBzAtSVIWCTDU-KdStFMNudxiZtxxLuwIGVI1L5y-Pnx2Q8cpHmPn-yIFcZjIas_08lOdikt4MIPuvgUCMvSGaDCtw5uEICNedD9NqQvo7zo8WRJeu8ja0VZy3RYXyCMiPPVSG88JvysSyNSE7394j0f0uGJXcQz8ZJUNsGgQWHOGC73pvFFNiZRK-jdEAyVrEtOypS4BoAI4v761VpI6rC4l9fmxoyHE8M_KVguhVyFCL_P0gEJuq1egG0_qW6kEcdKqDMSYo91driq0ewbthGkuSnViVMTSiJ8KZm1aKfXvuQnXYdcUf2BtCReenItEUQ2TrjocgQjaW64nfALggVpTZZJKEKEczsAtgncFNZ0A_WII2XjeezWOjQmpihJUPiJuOfHmNAp1QOytOCnXOWdmF8k5vHBYcl888zEFkEy1Jv9D9sNT7Txw2HDgBpOmhvw=w18-h14-no" alt=""/>
                <input type='email' required id='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)} value={email}/>
            </div>
            <Button className="formBtn">Redefinir Senha</Button>
        </form>
    </>
    )
}

export default ForgotPasswordForm;