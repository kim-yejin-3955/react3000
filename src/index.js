import React from "react";
import ReactDOM from "react-dom";

ㅡㅡㅡ;
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

