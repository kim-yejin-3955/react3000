import React from "react";
import ReactDOM from "react-dom";

// const name = "webstoryboy";
// const element = <h1>hello,{name}</h1>;

// ................1

// function formatName(user){
//     return user.firstName + user.lastName;
// }

// const user = {
//     firstName: "kim",
//     lastName: "yejin",
// };

// const element = <h1>hello,{formatName(user)}</h1>;
// ................2

// const element = <h1 className="hello">hello, kim</h1>;

// ................3

// const element = React.createElement(
//     "h1",
//     {className}
// )
// ................4

// function clock(){
//     const element = (
//         <div>
//             <h1>hello, yejin</h1>
//             <h2>It is{new Date().toLocaleDateString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root') );    
// }
// setInterval(clock,1000);
// ................5
function Welcome(props){
    return <h1>hello, {props.name}</h1>;
}
function App(){
    return(
        <div>
            <Welcome name="kim"/>
            <Welcome name="ye"/>
            <Welcome name="jin"/>
        </div>    
    )
}

ReactDOM.render(<App />, document.getElementById('root') );

