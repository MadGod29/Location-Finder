import Sidebar from './Components/Sidebar/sidebar';
import './App.css';

function App() {
  return (<div className='app' style={{display:'flex',backgroundImage:'url(https://miro.medium.com/v2/resize:fit:1230/format:webp/1*49bmkdaUj5pWVn59_lKSUQ.png)',height:'100vh',width:'auto',backgroundPosition:'center'}}>
  <Sidebar></Sidebar>
  </div>
  );
}

export default App;
