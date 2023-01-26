
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
<Navbar title="TextUtils" AboutText="About"/> 
<div className='container my-3'>
<TextForm heading="Enter The The Text to Analyze"/>
</div>

    </>
     
  );
}

export default App;
