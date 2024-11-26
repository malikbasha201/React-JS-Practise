import photo from '../logo.svg'
const description = ["Fundamental","Crucial","Core"];

function Random(max){
    return Math.floor(Math.random()*(max+1))
}


export default function Header(){  
    const res = description[Random(2)]
    return (
      <header className="App-header">
          <img src={photo} className="App-logo" alt="logo" />
          <h1>React Essentials</h1>
          <p>{res} React concepts you will need for almost any app you are going to build!</p>
          <h1>Time to Get Started</h1>
      </header>
    )
  }

