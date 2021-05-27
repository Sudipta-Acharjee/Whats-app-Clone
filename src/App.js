import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <h1>Let's build Whatsapp Clone.</h1>
      <div className="app__body">
        <Sidebar></Sidebar>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
