import React from 'react'
import TodoItems from './todo-item'
// import Joke from './jokes'
import { useState } from 'react'
// import '../ben.jpg';
import Form from './form ';
import MemeGenerator from './memeGenerator';


// const Main = () => {
//   // const styles = {
//   //   color: 'gray',
//   //   padding: '1rem',
//   //   margin: '2rem',
//   //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
//   //   textAlign: 'center'
//   // }

//   // const h3Styles = {
//   //   color: 'darkgray',
//   //   textAlign: 'center',
//   //   fontWeight: 'bolder'
//   // }

//   // const JokesData = [
//   //   { 
//   //     id: 1,
//   //     question: 'What goes up and never comes down?',
//   //     punchline: 'Your fucking age!😂🤣🤣'
//   //   },

//   //   {
//   //     id: 2,
//   //     question: 'What do you call a villian that throws fist',
//   //     punchline: 'A Philanthropist😅😅🤣🤣😂😂'
//   //   },

//   //   {
//   //     id: 3,
//   //     question: 'What country is next to USA?', 
//   //     punchline: 'USB😁😁😁'
//   //   }
//   // ]

//   // <Joke question = {jokes.question} punchline = {jokes.punchline}/>
//   // const mappedJoke = JokesData.map( (jokes) => ( (jokes.question.length > 25) ? <Joke key = {jokes.id} question = {jokes.question} punchline = {jokes.punchline} /> : '' )
//   const mappedJoke = JokesData.filter( jokes => {
//     if (jokes.question) {
//       return jokes
//     }
//   }
//   )

//   const list = mappedJoke.map(jokes => <Joke question = {jokes.question} punchline = {jokes.punchline} />)

//   console.log(mappedJoke)
//   return (
//     <React.Fragment>
//       {/* <h1 className = "main">This is the main Section</h1>
//       <h3 style = {h3Styles} >This is a sub-section in the main section</h3>
//       <p style = {styles} >This is where you get all the infomation about the platform. Let me start by welcoming you all because I know that you been here means you have passed through different phases, facing different challenges and conquering them</p> */}
//       <main className = 'main'>
//         {/* <TodoItems value = 'HTML 5' id = 'HTML5' labelText = 'Understands HTML5' />
//         <TodoItems value = 'CSS 3' id = 'CSS3'  labelText = 'Good At CSS 3' />
//         <TodoItems value = 'BJS' id = 'BASIS-JS' labelText = 'Fundamentals of Javascript'/>
//         <TodoItems value = 'AJS' id = 'ADVANCE-JS' labelText = 'Advanced JS'/> */}
//         {list}
//       </main>
//     </React.Fragment>
//   )
// }

// class Main extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count : 0
//     }
//     this.increaseCount = this.increaseCount.bind(this)
//     this.decreaseCount = this.decreaseCount.bind(this)
//     this.resetCount = this.resetCount.bind(this)
//   }

//   increaseCount() {
//     this.setState( (prevState) => {

//       return { 
//         count: prevState.count + 1
//       };

//     })
//   }

//   decreaseCount() {
//     this.setState( (prevState) => {

//       return { 
//         count: prevState.count - 1
//       };

//     })
//   }
//   resetCount() {
//     this.setState( { count: 0 } )
//   }

//   render() {
//     return (
//       <main className = 'main' >
//         <h1>{this.state.count}</h1>
//         <button onClick = { this.increaseCount }>Increase</button>
//         <button onClick = { this.decreaseCount }>Decrease</button>
//         <button onClick = { this.resetCount }>Reset</button>
//       </main>
//     );
//   }
// }
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todoContent: [
        {
          value: 'HTML 5', 
          id: 'HTML5', 
          labelText: 'Understands HTML5',
          isCompleted: false
        },
        {
          value: 'CSS 3', 
          id: 'CSS3',  
          labelText: 'Good At CSS 3',
          isCompleted: true
        },
        {
          value: 'BJS', 
          id: 'BASIS-JS', 
          labelText: 'Fundamentals of Javascript',
          isComplete: false
        },
        {
          value: 'AJS', 
          id: 'ADVANCE-JS', 
          labelText: 'Advanced JS',
          isCompleted: true
        },
      ]
    }
    this.handleCompleted = this.handleCompleted.bind(this)
  }

  handleCompleted(id) { 
    this.setState( (prevState) => {
        const updatedTodoContent = prevState.todoContent.map((todocontent) => {
          if (todocontent.id === id) {
            return {...todocontent, isCompleted: !todocontent.isCompleted}
          }
          return todocontent;
        })
      return {
        todoContent: updatedTodoContent
      }
    })
  }

  render() { 
    const todoitems = this.state.todoContent.map( todocontent => <TodoItems key = {todocontent.id} id = {todocontent.id} value = {todocontent.value} labelText = {todocontent.labelText} isCompleted = {todocontent.isCompleted} handleCompleted = {this.handleCompleted} /> )

    return (
      <main className = 'main'>
        {/* {todoitems} */}
        {/* <Form />
         */}
        <MemeGenerator />
      </main>
    );
  }
}
 
export default Main;


// export default Main;