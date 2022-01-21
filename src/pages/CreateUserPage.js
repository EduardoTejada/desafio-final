import MainHeader from '../components/UI/MainHeader';
import Card from "../components/UI/Card";
import CardHeader from "../components/layout/CardHeader";
import CreateUserForm from "../components/layout/CreateUserForm";
import LoginMessage from "../components/layout/LoginMessage";

function CreateUserPage() {
    return (<>
    <MainHeader textBtn="Login"/>
    <Card>
        <CardHeader text="Cadastre-se"/>
        <CreateUserForm />
        <LoginMessage />
    </Card>
    </>)
}

export default CreateUserPage;
