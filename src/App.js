import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
// import Counter from './components/Counter';




// Create a State
class App extends React.Component {

  constructor (props) {
    super (props)

    this.state = {
      // isOn: false,
      input: '',
      items: [],
      hw_assignments: [],
      honeyDo_list: []
    };
  }


  // Methods, methods because thety are functions inside of a functions.
  inputUpdatItems = (event) => {
    this.setState({input: event.target.value})
  }
  inputUpdateAssignments = (event) => {
    this.setState({input: event.target.value})
  }
  inputUpdateHoneyDo = (event) => {
    this.setState({input: event.target.value})
  }

  formSubmitItems = (event) => {
    // Use event.prevent the browser from refreshing the entire page and clearing of state 
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }

  formSubmitAssignments = (event) => {
    event.preventDefault()
    this.setState({
      hw_assignments : [...this.state.hw_assignments, this.state.input],
      input: ''
    })
  }

  formSubmitHoneyDo = (event) => { 
    event.preventDefault()
    this.setState({
      honeyDo_list : [...this.state.honeyDo_list, this.state.input],
      input: ''
    })
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  // End on Methods





  
  // Display on the DOM

  render() {
    // console.log("this is state...", this.state.isOn);
    return (
      // JSX React HTML 
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Justin's First React App</p>

        <div class="three-lists">
          <div class="sub-list">
            <form onSubmit={this.formSubmitItems}>
              <input value={this.state.input} onChange={this.inputUpdatItems}/>
              <button>Submit</button>
            </form>
            {/* We use the Map function so that we can itemize the index of eact item and store a reference */}
            {/* <ul>{this.state.items.map((item, index) => {
              return <li key={index}>{this.state.items[index]}</li>
            })}</ul> */}
            <FirstComponent items={this.state.items}/>
          </div>

          <div class="sub-list">
            <form onSubmit={this.formSubmitAssignments}>
              <input value={this.state.input} onChange={this.inputUpdateAssignments}/>
              <button>Submit</button>
            </form>
            {/* We use the Map function so that we can itemize the index of eact item and store a reference */}
            {/* <ul>{this.state.items.map((item, index) => {
              return <li key={index}>{this.state.items[index]}</li>
            })}</ul> */}
            <FirstComponent items={this.state.hw_assignments}/>
          </div>

          <div class="sub-list">
            <form onSubmit={this.formSubmitHoneyDo}>
              <input value={this.state.input} onChange={this.inputUpdateHoneyDo}/>
              <button>Submit</button>
            </form>
            {/* We use the Map function so that we can itemize the index of eact item and store a reference */}
            {/* <ul>{this.state.items.map((item, index) => {
              return <li key={index}>{this.state.items[index]}</li>
            })}</ul> */}
            <FirstComponent items={this.state.honeyDo_list}/>
          </div>

        </div>

          {/* <Counter />  */}
        </header>
        
        
      </div>
    );
  } 


  /* <FirstComponent /> */
  /* Terninary Operator  */
  /* <button onClick={this.toggle}>{this.state.isOn ? 'On' : 'Off'}</button> */

}





export default App;
