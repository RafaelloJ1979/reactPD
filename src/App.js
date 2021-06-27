import MyName from './component/MyName';
import './App.css';
import MyButton from './component/MyButton';
import { useState,useEffect } from 'react';

function App() {
  const [title,setTitle]=useState('Witam na mojej pierwszej stronie')

  function changeTitle(){
    setTitle("WELCOME")
  }
  useEffect(()=>{
    alert('Teraz był efekt!!')
  },[title])
  return (
    <div className="App">
      <h1 id="title">{title}</h1> 
      {/* {title} */}
      <MyButton tekst="zmieniam tytuł strony" changeTitle={changeTitle}/>
      <MyName name = "Rafał" />
      <MyName surname = "Jaśkowski" />
      <MyButton tekst="Cześć!"/>
      <MyButton tekst="Do widzenie!"/>

      {/* <h1> {surname}</h1> */}
      
          </div>
  );
}

export default App;
