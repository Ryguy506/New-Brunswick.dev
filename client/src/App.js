import React from 'react';
import Home from './pages/home';
import SinglePost from './pages/singlePost';
import ProfilePage from './pages/profilePage';
import Nav from './components/navbar';
import StartTop from './utils/autoStartTop';
import Error404 from './pages/404';
import EditPost from './pages/editPostPage'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (


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

        <Route path='/myprofile' element={<ProfilePage/>}/>
        {/* <Route path='/profile/:id' element={<ProfilePage/>}/> */}
      <Route path='/myprofile/edit/:id' element={<EditPost/>}/>


        <Route path='*' exact={true} element={<Error404/>} />
      </Routes>


 
</Router>
  )
}

export default App
