import './App.css'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import NoteContextProvider from './store/NoteContextProvider'
function App() {
  return (
    <NoteContextProvider>
      <div className="App">
        <Sidebar/>
        <Body />
      </div>
    </NoteContextProvider>
  );
}

export default App;
