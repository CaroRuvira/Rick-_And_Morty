import './styles/App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'; 
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';
import { useState, useEffect } from 'react';   
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function App () {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate()

  const [acces, setAcces] = useState(false);

  const username = 'caro@gmail.com' ;

  const password = 'soyhenry';

  const login = (inputs) => {
    if(inputs.user === username && inputs.password === password){
      setAcces(true);
      navigate('/home')
    }
  }

  useEffect(() => {
    !acces && navigate('/');
 }, [acces]);


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID')
      }
    })
}

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
   
    <div className='App' style={{ padding: '25px' ,}}>
        <Nav onSearch ={onSearch} />
        <Routes>
          <Route path='/' element={<Login/>} />  
          <Route path='/home' element={<Cards onClose ={onClose} characters={characters} />}/>
          <Route path ='/about' element={<About />}/>
          <Route path='/detail/:detailId' element={<Detail />}/> 
          
        </Routes>
    </div>
 )
}

export default App;