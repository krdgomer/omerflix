import 'assets/style/LoginSignup.css'
import { Form,Button,Input,message } from 'antd';
import {useState} from "react"
import userData from 'data/users.json'
import { User } from 'App';



const Login = (props: {setIsLoggedIn: any, setCurrentUser: any, setCurrentPage: any}) =>{

    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Kullanıcı adı veya şifre yanlış!',
        });
      };

      const success = (name: string) => {
        messageApi.open({
          type: 'success',
          content: 'Hoşgeldin, '+name,
        });
      };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ()=>{
        let user: User = {
            username: username,
            password: password
        }
        
        if(userData.some(x => x.username === user.username) && userData.some(x => x.password === user.password)){
            success(user.username)
            props.setCurrentUser(userData[userData.findIndex( (u) => u.username===user.username ) ])
            props.setIsLoggedIn(true)
            props.setCurrentPage("0")
        }
            
        
        else
            error()
            
        setUsername("")
        setPassword("")
    }


    return(
        <div className="LoginSignup">
            {contextHolder}
            <Form>

                <Form.Item label={<label style={{color: "white"}}>Kullanıcı Adı</label>} rules={[{required: true}]}>
                    <Input value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item label={<label style={{color: "white"}}>Şifre</label>} rules={[{required: true}]}>
                    <Input.Password value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" onClick={handleLogin}>Giriş Yap</Button>
                </Form.Item>

            </Form>
        </div>
    )



}

export default Login;