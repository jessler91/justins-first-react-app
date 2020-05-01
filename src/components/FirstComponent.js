import React from 'react';

// dont need state on the first component


// All component functions should be capilitized
function FirstComponent(props) {
    console.log("this is first component props", props.items);
    return (
        <div>
            <h1>This is our listing component</h1>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>{props.items[index]}</li>
                })}
            </ul>
        </div>
    )
}


export default FirstComponent;