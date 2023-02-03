import './styles/App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'; 
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect  } from 'react';   
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';




function App () {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [acces, setAcces] = useState(false);

  const username ='caroruvira@gmail.com';
  const password = 'soyhenry12';

  const login = (userData) => {
   if (userData.username === username && userData.password === password){
    setAcces(true)
    navigate("/home");
   }
  }

  useEffect(() => {
    !acces && navigate ('/')
  }, [acces])

 
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.id) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID')
      }
    })
    .catch(err => console.log(err))
}

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
   
    <div className='App' style={{ padding: '25px' ,}}>

        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch ={onSearch} />} 
        
        <Routes> 
          <Route path='/home' element={<Cards onClose ={onClose} characters={characters} />}/>
          <Route path ='/about' element={<About />}/>
          <Route path='/detail/:detailId' element={<Detail />}/> 
          <Route path='/fav' element={<Favorites/>} />
          
        </Routes>
    </div>
 )
}

export default App;