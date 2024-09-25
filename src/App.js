import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote';


function App() {
  return (
    <>
    <div className='main'>
    <div className='heading' style={{fontFamily:"Gowun Batang"}}><h1>Quotes for the day</h1></div>

    <Quote/>
    </div>
    </>
  );
}

export default App;
