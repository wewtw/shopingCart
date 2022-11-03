// Ex 3 - write out all items with their stock number
// provide a button and use onClick to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// list out the Cart items in another column

//pass in the object as paramiter menuitems 
function NavBar({ menuitems }) {
  const { Card, Button } = ReactBootstrap;
  const [stock, setStock] = React.useState(menuitems);
  //those are classes in react using hooks like React.UseSate. and the classes in react are like this const [stock, cart]
  const [cart, setCart] = React.useState([]);
  //more can be passed thro the moveToCart like id and cost in the paramiters ect to do this use an anon onclick function.
  //important NOTE when what useState is used the shadow DOM is rerandered again/realoaded.
  
  const moveToCart = (e) => {

    //innerHTML grabs the data insde the html div like appleL:2
    let [name, num] = e.target.innerHTML.split(":");
    if (num <= 0) return; // zero items in stock
    // get item with name from stock and update stock
    let item = stock.filter((item) => item.name == name);
    // check if its in stock ie item.instock > 0
    let newStock = stock.map((item) => {
      if (item.name == name) {
        item.instock--;//if pressed decrese the stock by one
      }
      return item;
    });
    // now filter out stock items == 0;

    setStock([...newStock]);//sets to new stock that tracks how many left
    //here the spread operator is used to add two arrays into one.
    setCart([...cart, ...item]); //makes the clicked object move into the cart
    // for now don't worry about repeat items in Cart
    console.log(`Cart: ${JSON.stringify(cart)}`);
  };
  const updatedList = menuitems.map((item, index) => {
    return (
      //here where the list updates the get the hedle on the onClick and make it an anon function  
      //to shot id and cost in console inside moveToCart (item.id), (item.cost),
      <Button key={index} onClick={moveToCart}>
        {item.name}:{item.instock}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return (
    <>
      <ul key="stock" style={{ listStyleType: "none" }}>
        {updatedList}
      </ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );
}
function Cart({ cartitems }) {
  //here bootstrap buttons are being imported and used.
  const { Card, Button } = ReactBootstrap;
  console.log("rendering Cart");
  const updatedList = cartitems.map((item, index) => {
    return <Button key={index}>{item.name}</Button>;
  });//this Cart is the one that takes in items than renderes them back 
  return (
    <ul style={{ listStyleType: "none" }} key="cart">
      {updatedList}
    </ul>
  );
}
//object
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];

//navbar get rendered with menuitems={menuItems} also new var can be sued like , minstock={3}

ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);


/* 

Exercise1:

Enter the correct ReactDOM method to render the React element to the DOM.

//render
ReactDOM.render(myElement, document.getElementById('root')); 
=====================================================
Exercise2:

Complete this arrow function:

//()=>
hello = ()=> "Hello World!";
==========================================
Exercise3:

Create a variable that cannot be changed.

//const
const x = 5.6;
==========================================
Exercise4:

Complete the array method that will allow you to run a function on each item in the array and return a new array.

//map
const myList = myArray.map((item) => <p>{item}</p>)
===========================================================
Exercise5:

Use destructuring to extract only the third item from the array, into a variable named suv.


const vehicles = ['mustang', 'f-150', 'expedition'];

const [,, suv] = vehicles;
//,, suv

=====================================
Exercise6:

Use destructuring to extract only the person's state.


const person = {
  name: 'Jesse',
  age: 30, 
  address: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

displayMessage(person)
//{address: { state } }
function displayMessage({address: { state } }) {
  const message = 'I live in ' + state + '.';
}
=============================================================
Exercise7:

Use the spread operator to combine the following arrays.
//...arrayOne', '...arrayTwo

const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];
const arraysCombined = ['...arrayOne', '...arrayTwo'];
======================================================

Exercise8:

Complete this ternary operator statement.

// '?' and ':'
blue '?' renderBlue() ':' renderRed();
================================================

Exercise9:

Render a <p> element without using JSX.

//the 'p'
const paragraph = React.createElement('p' , {}, 'This is a paragraph without using JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(paragraph);
==================================

Exercise10:

Render a <p> element using JSX.

//<p> </p>
const paragraph = <p> This is a paragraph using JSX!</p>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(paragraph);
=========================================

Exercise11:

Complete this statement that renders a JavaScript expression inside JSX.
//{}

const myelement = <h1>React is {10 * 10} times better with JSX!</h1>;
========================================================================

Exercise12:

Complete this expression to include a class attribute the way JSX supports.

//className
const title = <h1 className="primary">Hello World!</h1>;
===========================================

Exercise13:

Name the following React component "person".

// Person with capitol P
function Person (props) {
  return <h2>Hi, I'm {props.name}</h2>;
}
=============================
Exercise14:

Complete this component which uses properties.

//props is standard but could be items
function Person(props) {
  return <h1>Hi, I'm {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Person name="Jesse"/>);
=======================================================

Exercise15:

Create a variable named name and pass it to the Message component.

//{name}
function Person(props) {
  return <h2>I'm { props.name }!</h2>;
}

function Greeting() {
  const name = "Jesse"
  return (
    <>
      <h1>Hello!</h1>
      <Person name= {name}/>//pass here
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
=========================================
Exercise16:

Complete this statement to include a click event handler.
//onClick

<button onClick={clicked()}>Click Me!</button>
==================================================

Exercise17:

Use the correct logical operator to complete the following component.
//use &&

function App({isLoggedIn}) {
  return (
    <>
      <h1>My Application</h1>
      {isLoggedIn && <Profile /> }//here
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
======================================

Exercise18:

Add the attribute that allows React to keep track of elements in lists.
// the "key"

function GroceryList() {
  const items = [
    {id: 1, name: 'bread'},
    {id: 2, name: 'milk'},
    {id: 3, name: 'eggs'}
  ];

  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li key={item.id}>{item.name}</li>)} //here
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GroceryList />);
====================================

Exercise19:

Complete this statement to keep track of a "count" variable using the useState Hook.

//count and setCount//here count is our container and setCount allows change
import { useState } from "react";

function KeepCount() {
  const [count, setCount] = useState(0);//here
}

==========================================================

Exercise20:

What do you need to add to the second argument of a useEffect Hook to limit it to running only on the first render?
// an epmy array brackets like this []

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
  },[] );//here

  return <DisplayData data={data} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
=========================================================================
Exercise21:

Add the following CSS styles inline to the <h1> element

color = "purple"
//{{color: "purple"}}

const Header = () => {
  return (
    <>
      <h1 style= {{color: "purple"}}>Hello Style!</h1>//here
      <p>Add a little style!</p>
    </>
  );
}
========================================

Exercise22:

Add the following CSS styles inline to the <h1> element

background-color = "yellow"
//{{backgroundColor: "yellow"}}

const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "yellow"}}>Hello Style!</h1>//goes here
      <p>Add a little style!</p>
    </>
  );
}
=================

Exercise23:

Import the App.css file in order to include its 
styles in the current component assuming the current 
component and the style sheet are in the same directory.
//   './App.css' this way

import './App.css' ;
=========================
Exercise24:

Name this CSS file so that it can be imported as a Module.
//module

header.module.css://here


*/
