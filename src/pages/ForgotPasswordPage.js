import MainHeader from '../components/UI/MainHeader';
import Card from "../components/UI/Card";
import CardHeader from "../components/layout/CardHeader";
import ForgotPasswordForm from "../components/layout/ForgotPasswordForm";


function ForgotPasswordPage() {
    return (<>
    <MainHeader textBtn="Cadastrar-se"/>
    <Card>
        <CardHeader text="Esqueci a senha"/>
        <ForgotPasswordForm />
    </Card>
    </>)

}

export default ForgotPasswordPage;
