import logo from './logo.svg';
import photo from './react-core-concepts.png';
import photo2 from "./jsx-ui.png";
import './App.css';

const description = ["Fundamental","Crucial","Core"];

function CoreConcept(props){
  return (
    <div>
      <img src={props.image} alt={props.alternate} height="200px" width="200px" />
      <h1>{props.title}</h1>
      <h2>{props.data}</h2>
    </div>
  )
}
function getRandom(max){
  return Math.floor(Math.random()*(max+1));
}

function Header(){
  const res = description[getRandom(2)]
  return (
    <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <h1>React Essentials</h1>
        <p>{res} React concepts you will need for almost any app you are going to build!</p>
        <h1>Time to Get Started</h1>
    </header>
  )
}

function App() {
  return (
    <div className="App">
        <Header />
        <div class="outer">
          <div class="item it-1">
            <CoreConcept 
            title="Core Concepts"
            data="The Core UI building block"
            image={logo}/>
          </div>
          <div class="item it-2">
            <CoreConcept 
            title="Core Concepts 2 "
            data="The Core UI building block 2"
            image={photo}/>
          </div>
          <div class="item it-3">
            <CoreConcept 
            title="Core Concepts 3 "
            data="The Core UI building block 3"
            image={photo2}/>
          </div>
        </div>  
    </div>
  );
}

export default App;
