import React, {useState} from 'react'
import { useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

export default function LoginPage(props) {

    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);//입력한 값을 화면에 표시해주기 위함.
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();//이것을 하지 않으면 새로고침이 되어 입력한 이메일과 비밀번호가 사라진다.
        console.log('Email: ', Email);
        console.log('Password: ', Password);

        let body = {
            email: Email,
            password: Password,
        }


        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess){
                    props.history('/')//페이지 이동
                }else{
                    alert('Error');
                }
            })

    }


    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems:'center', width:'100%', height:'100vh'}}>
            
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>

                <br/>
                <button type="submit">
                    Login
                </button>
            </form>

        </div>
    )
}
