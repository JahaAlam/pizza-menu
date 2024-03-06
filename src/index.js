import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App(){
  return  (
  <div className='container'>
    <Header />
    <Menu />
    <Footer />
  </div>
  );
}

function Header (){
  const style = {};
  return (
    <header className='header'>
    <h1 style={style} >First React Pizza Co.</h1>
  </header>
  );
 
  
}

function Menu (){
  return (
 <div>
  <h2>Our Menu</h2>
   <main className='menu'>
    
    <Pizza
     name='Pizza Spinaci' 
     ingredients='Tomato, mozarella, spinach, and ricotta cheese'
     photoName='pizzas/spinaci.jpg'
     price={10}
     /> 
     <Pizza 
     name='Pizza Funghi'
     ingredients='tomato, Musroom'
     price={12}
     photoName='pizzas/funghi.jpg'
     />  
     <Pizza 
     name= "Focaccia"
     ingredients= "Bread with italian olive oil and rosemary"
     price= {6}
     photoName= "pizzas/focaccia.jpg"
     soldOut= "false"
     /> 
     <Pizza 
     name= "Pizza Margherita"
     ingredients= "Tomato and mozarella"
     price= {10}
     photoName= "pizzas/margherita.jpg"
     soldOut= {false}
     />
     <Pizza 
     name='Pizza Funghi'
     ingredients='tomato, Musroom'
     price={12}
     photoName='pizzas/funghi.jpg'
     /> 
     <Pizza 
     name= "Pizza Margherita"
     ingredients= "Tomato and mozarella"
     price= {10}
     photoName= "pizzas/margherita.jpg"
     soldOut= {false}
     />
  </main>
 </div>
  );
}

function Pizza(props){
  console.log(props);
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price+3}</span>
      </div>
      
    </div>
  );
}

function Footer(){
const hour = new Date().getHours();
const openHour = 10;
const clossHour = 20;


//if(hour >= openHour && hour <= clossHour) alert ("We're currently Open");
//else alert(" Sorry We're Currently Clossed")

  return <footer className='footer'> {new Date().toLocaleDateString()}  We're Currently Open</footer>
  //return React.createElement("footer", null, "We're Currently Open")
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App />
</React.StrictMode>
);

