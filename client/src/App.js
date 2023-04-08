import React , {useEffect} from 'react';
import Home from './pages/home';
import SinglePost from './pages/singlePost';
import Nav from './components/navbar';
import StartTop from './utils/autoStartTop';
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

      </Routes>


 
</Router>
  )
}

export default App
