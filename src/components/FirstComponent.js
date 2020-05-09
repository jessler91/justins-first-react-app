import React from 'react';

// dont need state on the first component


// All component functions should be capilitized
function FirstComponent(props) {
    console.log("this is first component props", props.items);


    toggle = (event) => {
        event.preventDefault()
        this.setState({isClicked: !props.isClicked})
      }


    return (
        <div>
            <h2>Sumbitted Lists</h2>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>
                        {props.items[index]} 
                        <button 
                        onClick={this.state.toggle()}>
                        {props.isClicked}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}


export default FirstComponent;