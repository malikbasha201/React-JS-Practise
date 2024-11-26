import logo from './logo.svg';
import photo from './react-core-concepts.png';
import photo2 from "./jsx-ui.png";
import './App.css';
import Header from './components/header';
import CoreConcept from './components/coreconcepts';
import Tabbutton from './components/Tabbutton';



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
      <section id="examples">
        <h1>Examples: </h1>
        <menu>
          <Tabbutton>children</Tabbutton>
          <Tabbutton>children</Tabbutton>
          <Tabbutton>children</Tabbutton>
          <Tabbutton>children</Tabbutton>
        </menu>
      </section>
    </div>
  );
}

export default App;
