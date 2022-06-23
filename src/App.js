import {useState} from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import NoteContextProvider from './store/NoteContextProvider'
import NoteEditForm from './components/NoteEditForm'
function App() {
  const [showForm, setShowForm] = useState(false)
  const [id, setId] = useState(0)
  
  const toggleForm = () =>{
    setShowForm(!showForm)
  }
  const getId = (id)=>{
    setId(id)
  }
  return (
    <NoteContextProvider>
      <div className="App">
        <Sidebar onClick={toggleForm} getId={getId}/>
        <button onClick={toggleForm}>fdsfsdfsd</button>
        <Body />
        {
          showForm && ReactDOM.createPortal(<NoteEditForm id={id} onClick={toggleForm}/>, document.getElementById('overlay'))
        }
      </div>
    </NoteContextProvider>
  );
}

export default App;
