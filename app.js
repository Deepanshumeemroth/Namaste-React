import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {}, "Heading by react element.")

// React element via Single Line and Multi Line JSX Code
const heading2 = <h1>Heading by JSX.</h1>
const heading3 = (<h1>Heading by 
    JSX2.</h1>)

//React component & component composition (component in component)

const HeadingComponent = () => (
    <h1>Heading by react component.</h1>
)
const TitleElement = () => (
    <div id="container">
    <HeadingComponent></HeadingComponent> 
    </div>
)

//react element in component

const heading4 = <h1>Heading by react element.</h1>

const TitlleElement = () => (
    <div id="container">
    {heading4}
    React component.
    </div>
)

//react component in element

const TitllleElement = () => (
    <div id="container">
    React component.
    </div>
)

const heading5 = (<h1>
    <TitllleElement></TitllleElement>
    Heading by react element.</h1>)


// react element in element

const heading6 = <h1>Heading from child.</h1>

const heading7 = <h1>Heading from Parent.{heading6}</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading7);
