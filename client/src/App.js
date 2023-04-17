import React , {useEffect , useState , createContext} from 'react';
import Home from './pages/home';
import SinglePost from './pages/singlePost';
import MyProfilePage from './pages/myprofilePage';
import Nav from './components/navbar';
import StartTop from './utils/autoStartTop';
import Error404 from './pages/404';
import EditPost from './pages/editPostPage'; 
import NewPost from './pages/newPost';
import UserProfilePage from './pages/userProfilePage';
import Login from './pages/login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const UserContext = createContext();

function App() {

    const [userData, setUserData] = useState(null);

  useEffect(() => {
   const getUser = async () => {
    fetch('http://localhost:3003/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': true}
      })
      .then
      (response => {
        if (response.status === 200) return response.json();
        throw new Error('failed to authenticate user');
      }
      ).then(responseJson => {
        setUserData(responseJson.user);
      }
      ).catch(error => {
        console.log(error);
      }
      );

    }
    getUser();
}, [])


useEffect(() => {
  console.log(userData);
}, [userData]);


  return (

<UserContext.Provider value={userData}>
  <Router>
    <StartTop/>
<div className="">
  <Nav/>
</div>
      <Routes>
        <Route 
          path="/" 
          element={<Home/>}
        />

        <Route path='/post/:id'
        element={<SinglePost/>}/>

        <Route path='/myprofile' element={<MyProfilePage/>}/>
      <Route path='/myprofile/edit/:id' element={<EditPost/>}/>

      <Route path='/profile/:id' element={<UserProfilePage/>}/>
      <Route path='/new' element={<NewPost/>}/>
      {/* <Route path='/welcome' element={<OnBoarding/>}/> */}
      <Route path='/login' element={<Login/>}/>
        <Route path='*' exact={true} element={<Error404/>} />
      </Routes>


 
</Router>
</UserContext.Provider>
  )
}

export default App
