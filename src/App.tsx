import 'assets/style/App.css';
import { Layout } from 'antd';
import Slider from 'pages/Homepage/Slider';
import HeaderComponent from 'pages/Homepage/HeaderComponent';
import Content from 'pages/Homepage/Content';
import { useState } from 'react';
import Login from 'pages/Login/Login';
import Signup from 'pages/Login/Signup';
import Movie from 'pages/Movie/Movie'

export type User = {

  username: string
  password: string
  email?: string
  avatar?: string

}


function App() {

  const [currGenre,setCurrGenre] = useState<string>("a0");
  const [currentPage,setCurrentPage] = useState<string>("0");
  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
  const [currentUser,setCurrentUser]= useState<User>({

    username: "",
    password: "",
    email: "",
    avatar: ""
  
  });

  const pageToRender = ()=>{
    
    switch(currentPage){
      case "0":
        return(<Content currGenre={currGenre}/>)
      case "1":
        return(<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} setCurrentPage={setCurrentPage}/>)
      case "2":
        return(<Signup />)
      case "3":
        return(<Movie />)
    }

  }
  
  return (
    <div className="App">
      <Layout>
        <HeaderComponent setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} currentUser={currentUser}/>
        <div className='wrapper'>
          <Slider setCurrGenre={setCurrGenre} setCurrentPage={setCurrentPage}/>
          {pageToRender()}
        </div>
      </Layout>
    </div>
  );
}

export default App;
