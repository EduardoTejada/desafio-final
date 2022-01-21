//import axios from 'axios';
import { useState } from 'react'
import Button from "./Button.jsx"
import './LoginForm.css'
import ForgotPasswordMessage from "./ForgotPasswordMessage";

function LoginForm () {
    
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    let emailIsValid = /\S+@\S+\.\S+/.test(email);
    let showEmailWarning = !emailIsValid && email !== '';

    function submitHandler(event) {

        event.preventDefault()

        if(emailIsValid)
        {
            // axios.post(`https://back-3035teach.herokuapp.com/oauth/token`)

            /*const api = axios.create({
                baseURL: `https://back-3035teach.herokuapp.com/oauth/token`
              })
            
            const basicAuth = `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`;
            const urlPost = `${urls.baseURL}oath/token?username=${email}&password=${password}&grant_type=password`;

            class App extends Component {
                constructor() {
                    super();
                    api.post('/').then(res => {
                        console.log(res.data);
                    })
                }
            }

            await axios({
                method: 'post',
                url: urlPost,
                headers: {
                    'content-type': 'application/json',
                    Authorization: basicAuth
                }
            })*/
        }
    }
    return(
    <>
        <form className="form" onSubmit={submitHandler}>
            { showEmailWarning && <div className="invalidEmail">Insira um endereço de email válido.</div> }
            <div className="control">
                <img src="https://lh3.googleusercontent.com/09s5-J6z21Tjpelb9DimYIj9fa-vV01O8cOWLwf-vwOrRWqhw9ihRtvkvJ2SHjIzvOzD9zTSAgjEtEfJVL7zbBFyK_kNsZrszooFatqd6dMJiac7zLb0LK6koN3EzLWCXMEESMVK1aid1_f6BJSMrqNA3ankho6y0NHGajNMJII_N7cOf91vR80UxUFqJSEHxiXv7TRp4UWZN1ouJWsYxMcZO7n4K8rAlOWQy9fNiccse7K-BhsfHNQPTZ4hxA4KbAA17FRrDH0GTtNoxsN5pKXBzAtSVIWCTDU-KdStFMNudxiZtxxLuwIGVI1L5y-Pnx2Q8cpHmPn-yIFcZjIas_08lOdikt4MIPuvgUCMvSGaDCtw5uEICNedD9NqQvo7zo8WRJeu8ja0VZy3RYXyCMiPPVSG88JvysSyNSE7394j0f0uGJXcQz8ZJUNsGgQWHOGC73pvFFNiZRK-jdEAyVrEtOypS4BoAI4v761VpI6rC4l9fmxoyHE8M_KVguhVyFCL_P0gEJuq1egG0_qW6kEcdKqDMSYo91driq0ewbthGkuSnViVMTSiJ8KZm1aKfXvuQnXYdcUf2BtCReenItEUQ2TrjocgQjaW64nfALggVpTZZJKEKEczsAtgncFNZ0A_WII2XjeezWOjQmpihJUPiJuOfHmNAp1QOytOCnXOWdmF8k5vHBYcl888zEFkEy1Jv9D9sNT7Txw2HDgBpOmhvw=w18-h14-no" alt=""/>
                <input type='email' required id='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)} value={email}/>
            </div>
            <div className="control">
                <img src="https://lh3.googleusercontent.com/DjrDOXTrkLyb-yKNrVnvBAz-oO5AShlJ2KL3K0gyFTwK3aVV9TGLjWmL9-hJ_mZFciB16ZIVoxUooUbZKxOPn4Zf3WOb6ilX-kn-Vdb1gQRZfGOx_iHpAzw7CDeMBlfWb8rwU0XwivOzpQwzw0uFVoJIJctybDjrY7l4RYPu2BiKOXBizmrQZV84uSnffXqCfu-RPa7VeupQOeIxp3cxXmsUpW7XtWvR-rdZw-kGQfO-Zn9BhGp5onAwKsK40lids2EIhGRN3jPDjWRK7Ux2hGLMcLGH0-3gy_9aRwMh7uRfgqpLiGM0JasdMuS-xIx4a-aNUX-7Ia6w2Y8DP6Zvm3rYuMIbxHnDxK7oJBBwCyQ4x1YYRQHOu5MxcSET5z1qsvSVbiQFJwqIVVOPxu_I6Hl7HhpXkl8nHPMs62s9QtVh3O1y7-Fx4TDS1YT0sTQ8Z2uprOaA6Y9_rIU4NKgAP_9NdxQz5NUpf-8FNx01EaweNYAw8gDBVVEQSMabstZFyKAlMXEBwCjibpRjbVO5jFJPmgwJp8UG6S4stO0yxRXfemzG2D9d_KQq0fSfkTrAOTiA8jXbiqB5pEIi37ZNx4OL7jP78VpmQhIi8oF6MpUdxeIkuWdKr00nX1Mg8Dqa8h8pSt8xZnvzpeR9dA3pJn6zUlvmg-A6Ho-4FUbJhTtfj8ibCbD8LgK6EztwzPLYeoGKqzkDMNM14O9CI4vTGiAJtQ=w18-h20-no" alt=""/>
                <input type='password' required id='password' placeholder='Senha' onChange={(event) => setPassword(event.target.value)} value={password}/>
            </div>
            <Button className="formBtn">Fazer Login</Button>
            <div className="login-form-footer">
                <div className="remember-me-container">
                    <input type="checkbox" value="remember-me" id="remember-me" className="remember-me-btn"/>
                    <label htmlFor="remember-me" className="remember-me-lbl">Lembrar de mim</label>
                </div>
                <ForgotPasswordMessage />
            </div>
        </form>
    </>
    )
}

export default LoginForm;