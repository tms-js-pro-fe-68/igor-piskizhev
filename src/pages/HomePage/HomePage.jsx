import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormAdd from "../../components/FormAdd";
import GetQueryRequest from "../../components/GetQueryRequest";
import StyledList from "../../components/StyledList";
import Page from "../../components/Page";
import { bgcolor } from "@mui/system";

export default function HomePage() {
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if (!sessionStorage.token) navigate ('/login',{ replace: true });
    // },[])

   
    return (
        <Page>
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
                        justifyContent: 'center',
                        backgroundColor:'white',
                        color: "black"

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
        <GetQueryRequest/>
        <StyledList/>
        </Page>
        
    )
}