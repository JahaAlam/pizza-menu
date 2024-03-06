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
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  console.log(numPizzas);
  //console.log(pizzas);
  return (
 <div>
  <h2>Our Menu</h2>
   <main className='menu'>
    {numPizzas > 0 ? (
       <ul className='pizzas'>
       {pizzas.map((pizza)=> (
         <Pizza pizzaObj={pizza} key ={pizza.name} />
       ))}
       </ul>

    ) : (<p>We're still working on it . Please come later.</p>)}
   
    
   {/* { <Pizza
     name='Pizza Spinaci' 
     ingredients='Tomato, mozarella, spinach, and ricotta cheese'
     photoName='pizzas/spinaci.jpg'
     price={10}
     /> }
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
     /> */}
  </main>
 </div>
  );
}

function Pizza({pizzaObj}){
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{ pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price } </span>
      </div>
      
    </li>
  );
}

function Footer(){
const hour = new Date().getHours();
const openHour = 10;
const clossHour = 23;
const isOpen = hour >= openHour && hour <=clossHour;
console.log(isOpen);


//if(hour >= openHour && hour <= clossHour) alert ("We're currently Open");
//else alert(" Sorry We're Currently Clossed")

  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
        <p>We're open until {clossHour}:00. Come visit us or order online
        .</p>
        <button className='btn'>Order</button>
        </div>
      )}
    </footer>
  );
 

  //return React.createElement("footer", null, "We're Currently Open")
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App />
</React.StrictMode>
);

