import MainHeader from '../components/UI/MainHeader';
import Card from "../components/UI/Card";
import CardHeader from "../components/layout/CardHeader";
import LoginForm from "../components/layout/LoginForm";

function LoginPage() {
    return (<>
    <MainHeader textBtn="Cadastrar-se"/>
    <h2 className='loginMessage'>Faça login em sua conta</h2>
    <Card>
        <CardHeader text="Login"/>
        <LoginForm />
    </Card>
    </>)
}

export default LoginPage;