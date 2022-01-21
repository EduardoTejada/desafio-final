import { useState } from 'react'
import Button from "./Button.jsx"
import PasswordLevel from "./PasswordLevel.jsx"
import "./CreateUserForm.css"

function CreateUserForm () {
    
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    let emailIsValid = /\S+@\S+\.\S+/.test(email);
    let showEmailWarning = !emailIsValid && email !== '';

    function submitHandler(event) {
        
        event.preventDefault()
        
        if(emailIsValid){
            /*const userData = 
            {
                name: name,
                email: email,
                password: password
            }*/
        }
    }
    return(
    <>
        <form className="form" onSubmit={submitHandler}>
            { showEmailWarning && <div className="invalidEmail">Insira um endereço de email válido.</div> }
            <div className="control">
                <img src="https://lh3.googleusercontent.com/bg93K2xvo1nPCkwTkYZxvGHwRfYevhBRBDdnIAiLsRdEYk3zK0QBbCSGftbHvbXCoHPSYbYA6JCjdXoPtif9MoFSwyHkqTIJXUX-UKyxPA8XEvUPG7a9meqxzRRlePYsag2i3sxxsxB1ZHfaIGMvf5f_X5sqi7KwMrwztxLmFLquNHSwQ1-v8jxy9hyQqzzASUdH3Zfg4c93P1qAe9ms_tHMps--sIXmyl0yMrV_vEL2rwfjtvY5T6hcd5NrtUaV8khkD38CCH0SGte3synNWR4yg-ywGj0YOSa8NdSBUHMQckoyvi1DQ7JFCDUzPSMeaycycfpMVQGu9NtxXgSuairXJw7RN5HUbel1V5fB3nE2M9siHgLNqczGzsjxtB5s3FRa5lcjtfLNbogYTcCqaCOS4jDA6OpIAfk7VZs3VJ5k39bDTbAG7cO8j6YUZVSPVzhGcCcnzsSgzuhRqtLZngqZG5pqJ6GiiWuwnBF7lYyE5ZgHQdvmKK9KAOWar03rhtXFElqYDIDioPe53UK2hgaKs5-oRD2AtoiTx74j9e10MMQ2xsbYpN07YMLhEo4GX7aP8DB9rjcgogzwmXUDeZPkJSYYUUUewYW0_iEMX-E9FrlwhrPtsvNdvcb10_ZFV0BtAVxv448h_MIwy4l8-ypQ2OFL8uiFa-BVGWN83c4h-9P8Wnwy1Pa47caSRwmB5zsx7QJZMKf1xIjmkffdhmsjGQ=w17-h20-no" alt=""/>
                <input type='text' required id='name' placeholder='Nome Completo' onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
            <div className="control">
                <img src="https://lh3.googleusercontent.com/09s5-J6z21Tjpelb9DimYIj9fa-vV01O8cOWLwf-vwOrRWqhw9ihRtvkvJ2SHjIzvOzD9zTSAgjEtEfJVL7zbBFyK_kNsZrszooFatqd6dMJiac7zLb0LK6koN3EzLWCXMEESMVK1aid1_f6BJSMrqNA3ankho6y0NHGajNMJII_N7cOf91vR80UxUFqJSEHxiXv7TRp4UWZN1ouJWsYxMcZO7n4K8rAlOWQy9fNiccse7K-BhsfHNQPTZ4hxA4KbAA17FRrDH0GTtNoxsN5pKXBzAtSVIWCTDU-KdStFMNudxiZtxxLuwIGVI1L5y-Pnx2Q8cpHmPn-yIFcZjIas_08lOdikt4MIPuvgUCMvSGaDCtw5uEICNedD9NqQvo7zo8WRJeu8ja0VZy3RYXyCMiPPVSG88JvysSyNSE7394j0f0uGJXcQz8ZJUNsGgQWHOGC73pvFFNiZRK-jdEAyVrEtOypS4BoAI4v761VpI6rC4l9fmxoyHE8M_KVguhVyFCL_P0gEJuq1egG0_qW6kEcdKqDMSYo91driq0ewbthGkuSnViVMTSiJ8KZm1aKfXvuQnXYdcUf2BtCReenItEUQ2TrjocgQjaW64nfALggVpTZZJKEKEczsAtgncFNZ0A_WII2XjeezWOjQmpihJUPiJuOfHmNAp1QOytOCnXOWdmF8k5vHBYcl888zEFkEy1Jv9D9sNT7Txw2HDgBpOmhvw=w18-h14-no" alt=""/>
                <input type='email' required id='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)} value={email}/>
            </div>
            <div className="control">
                <img src="https://lh3.googleusercontent.com/DjrDOXTrkLyb-yKNrVnvBAz-oO5AShlJ2KL3K0gyFTwK3aVV9TGLjWmL9-hJ_mZFciB16ZIVoxUooUbZKxOPn4Zf3WOb6ilX-kn-Vdb1gQRZfGOx_iHpAzw7CDeMBlfWb8rwU0XwivOzpQwzw0uFVoJIJctybDjrY7l4RYPu2BiKOXBizmrQZV84uSnffXqCfu-RPa7VeupQOeIxp3cxXmsUpW7XtWvR-rdZw-kGQfO-Zn9BhGp5onAwKsK40lids2EIhGRN3jPDjWRK7Ux2hGLMcLGH0-3gy_9aRwMh7uRfgqpLiGM0JasdMuS-xIx4a-aNUX-7Ia6w2Y8DP6Zvm3rYuMIbxHnDxK7oJBBwCyQ4x1YYRQHOu5MxcSET5z1qsvSVbiQFJwqIVVOPxu_I6Hl7HhpXkl8nHPMs62s9QtVh3O1y7-Fx4TDS1YT0sTQ8Z2uprOaA6Y9_rIU4NKgAP_9NdxQz5NUpf-8FNx01EaweNYAw8gDBVVEQSMabstZFyKAlMXEBwCjibpRjbVO5jFJPmgwJp8UG6S4stO0yxRXfemzG2D9d_KQq0fSfkTrAOTiA8jXbiqB5pEIi37ZNx4OL7jP78VpmQhIi8oF6MpUdxeIkuWdKr00nX1Mg8Dqa8h8pSt8xZnvzpeR9dA3pJn6zUlvmg-A6Ho-4FUbJhTtfj8ibCbD8LgK6EztwzPLYeoGKqzkDMNM14O9CI4vTGiAJtQ=w18-h20-no" alt=""/>
                <input type='password' required id='password' placeholder='Senha' onChange={(event) => setPassword(event.target.value)} value={password}/>
            </div>
            <PasswordLevel password={password}/>
            <Button className="formBtn">Fazer Cadastro</Button>
        </form>
    </>
    )
}

export default CreateUserForm;