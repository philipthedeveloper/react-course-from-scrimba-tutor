import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './styles.css';
import './form.css'
import './meme.css'
import { useState, useEffect, createContext, useContext} from 'react';

const UserContext = createContext();

function LearnHooks(props) {

  const [headerText, setHeaderText] = useState("Hello World");
  const [userName, setUserName] = useState("Profowolaps")

  function changeText() {
    setHeaderText("How are you doing")
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderText("I am saying Hello World")
    }, 3000)

    return () => clearTimeout(timer);
  }, [])

  return(
    <UserContext.Provider value = {userName}>
      <h1>{headerText}</h1>
      <button onClick = {changeText}>Change Text</button>
      <ComponentTwo />
    </UserContext.Provider>
  );
}

class ComponentTwo extends React.Component {
  render() { 
    return (
      <div>
        <h2>This is the second Component</h2>
        <ComponentThree />
      </div>
    );
  }
}

const ComponentThree = (props) => {
  const userName = useContext(UserContext)

  return ( 
    <React.Fragment>
      <h2>The is the component Three</h2>
      <p>I am getting {userName}</p>
    </React.Fragment>
   );
}
 
// export default ComponentThree;
 
// export default ComponentTwo;

ReactDOM.render(<App />, document.querySelector('#root'));