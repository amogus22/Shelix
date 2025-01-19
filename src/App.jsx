import { useState } from 'react'
import Title from './components/Title'
import Icon from './components/Icon'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SetContent from './components/setContent'
import './App.css'


function App() {

  const [users, setUsers] = useState(['Alex','John', 'will']);
  const [process, setProcess] = useState ([]);
  console.log(process);


  const renderUsers = users.map(function  (item ){
    return <li>{item}</li>
  })


  return (
    <>
    <Icon path={reactLogo} render={(src) => <img src={src}/>}/>
    <Icon path={viteLogo} render={(src) => <img src={src}/>}/>
    <Title render ={(viteLogo)  => <h1>Заголовок 1 уровня</h1>}></Title>
    <Title render ={()  => <h2>Заголовок 2 уровня</h2>}></Title>
    <SetContent process = {process} ={'>'} <ul> {renderUsers} </ul>{'}'}
     /{'>'}
     
    <ul> {renderUsers} </ul>
    <button onClick={() => setProcess('waiting')}>waiting</button>
    <button onClick={() => setProcess('loading')}>loading</button>
    <button onClick={() => setProcess('complete')}>complete</button>
    <button onClick={() => setProcess('error')}>error</button>
    </>
  )
}

export default App
