import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormAdd from "../../components/FormAdd";
import UseGetRequest from "../../components/UseGetRequest";

export default function HomePage() {
    const navigate = useNavigate();
    useEffect(()=>{
        if (!sessionStorage.token) navigate ('/login',{ replace: true });
    },[])
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems : 'center',
                    justifyContent: 'space-between',
                    background: 'black',
                    height : 50,
                    padding: 10,

                }} >
                <h1 style={{color : 'white', }}>Admin Panel</h1>
                <div style={{color:'white'}}>USER: {sessionStorage.email}</div>
                    <button type='button'
                    style={{
                        display :'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onClick={
                        ()=>{
                        sessionStorage.token = '';
                        sessionStorage.email = '';
                        navigate('/login')
                        }
                    }>
                        <AccountCircle />
                         SIGN OUT
                    </button>
                
            </div>
        <FormAdd />
        <UseGetRequest/>
        </>
        
    )
}