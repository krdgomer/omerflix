import 'assets/style/LoginSignup.css'
import { Form,Button,Input,message } from 'antd';
import {useState} from "react"
import userData from 'data/users.json'

interface User {

    username: string
    password: string

}

const Signup = () =>{

    const [messageApi, contextHolder] = message.useMessage();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ()=>{
        let user: User = {
            username: username,
            password: password
        }
        
        if(userData.some(x => x.username === user.username))
            messageApi.info('Böyle bir kullanıcı zaten var');
       
        setUsername("")
        setPassword("")
    }

    return(

        <>
        <div className="LoginSignup">
        <Form>
                {contextHolder}
                <Form.Item label={<label style={{color: "white"}}>Kullanıcı Adı</label>} rules={[{required: true}]}>
                    <Input value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item label={<label style={{color: "white"}}>Şifre</label>} rules={[{required: true}]}>
                    <Input.Password value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item label={<label style={{color: "white"}}>Şifre Tekrar</label>} rules={[{required: true}]}>
                    <Input.Password/>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" onClick={handleLogin}>Giriş Yap</Button>
                </Form.Item>

            </Form>
        </div>
        </>


    )



}

export default Signup;