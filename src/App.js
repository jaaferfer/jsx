import './style.css'
import "./App.css";
import Gmc1 from './gmc1.jpg' 

function App() {
  return (
    <div>

      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Jaafer Feriani</h1>
        </div>
        <br />
        <div className='im'>
        <img src="/gmc.png" alt='' className="im1" />
        <br />
        <img src={Gmc1} alt='my pic'/>
        </div>
        <div className='vdo'>
      <iframe
        width="320"
        height="240"
        src="https://www.youtube.com/embed/olJOZp57FWM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
    </div>
  );
}

export default App;
