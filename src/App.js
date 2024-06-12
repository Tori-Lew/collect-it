import './App.css';
import {useState, useEffect /*useReducer useRef*/} from "react";

/*function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initialValue)
  ];
}*/
function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  )
}

function App({library}) {
  //const [emotion, setEmotion] = useState("happy");
  //const [secondary, setSecondary] = useState("tired");
  //const [checked, setChecked] = useReducer((checked) => !checked, false);
  //const txtTitle = useRef();
  //const hexColor = useRef();
  //const [title, setTitle] = useState("");
  //const [color, setColor] = useState("#000000");
  /*const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    //const title = txtTitle.current.value;
    //const color = hexColor.current.value;
    //alert(`${title}, ${color}`)
    //txtTitle.current.value = "";
    //hexColor.current.value = "";
    //setTitle("");
    //setColor("#000000");
    alert(`${titleProps.value}, ${colorProps.value}`)
    resetTitle();
    resetColor();
  }*/
  /*return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
    
      <input 
        type="checkbox" 
        value={checked} 
        onChange={ setChecked }
      />
      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
    <form onSubmit={submit}>
      <input 
        //ref={txtTitle}
        //value={title}
        //onChange={event => setTitle(event.target.value)}
        {...titleProps}
        type="text"
        placeholder="color title ..."
      />
      <input 
        //ref={hexColor} 
        //value={color}
        //onChange={event => setColor(event.target.value)}
        {...colorProps}
        type="color" 
      />
      <button>ADD</button>
    
    </form>

  );*/
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/tori-lew`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;
    return(
      <GithubUser 
        name={data.name} 
        location={data.location} 
        avatar={data.avatar_url}/>
    );
}

export default App;
