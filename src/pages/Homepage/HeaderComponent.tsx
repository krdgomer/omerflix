import 'assets/style/HeaderComponent.css'
import {Button, Input, Space} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { User } from 'App';
import DropdownMenu from 'components/DropdownMenu';

export default function HeaderComponent(props: {setCurrentPage: any,isLoggedIn: boolean, currentUser: User}){


    const checkLoggedIn = ()=> {
        if(props.isLoggedIn){
            return(
            <Space>
                <img src={props.currentUser.avatar} alt='' style={{width: 25, height: 25}}/>
                <DropdownMenu currentUser={props.currentUser}/>
            </Space>
            )
            

        }
        else{
            return(
            <>
            <Button type='text' style={{color: '#d9c4e2'}} onClick={()=> props.setCurrentPage("1")}>Giriş Yap</Button> 
            <Button type='text' style={{color: '#d9c4e2'}} onClick={()=> props.setCurrentPage("2")}>Üye Ol</Button>
            </>
            )
            
        }
    }


    return(
        <div className="headerDiv">
           
            <div style={{width: 256, height: '10vh'}}>
                <img src="./media/logo.png" alt="" /></div>
            
            <div className='buttons'>
                <Space>
                    <Input placeholder='Film Ara' prefix={<SearchOutlined />}/>
                    {checkLoggedIn()}
                </Space>
                    
            </div>  

        </div>
    )




}