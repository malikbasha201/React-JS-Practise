export default function CoreConcept(props){
    return (
      <div>
        <img src={props.image} alt={props.alternate} height="200px" width="200px" />
        <h1>{props.title}</h1>
        <h2>{props.data}</h2>
      </div>
    )
  }
  