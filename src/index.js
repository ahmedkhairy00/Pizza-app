import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>
    </header>
  );
}

// React Fragments => allow us to return two element without any trace in Dom Tree
// React Fragments => shortcut for React Fragments is instead of <React.Fragments> </React.Fragments> we write <> </>
/* 
if React.Fragment render list and we want add key it will be => <React.Fragments key={index}>  </React.Fragments>
*/

// Setting classes and Text Conditionally .

function Menu() {
  // Conditional  Rendering with multiple returns
  /*   if (pizzaData.length === 0) return <MakeMenu />;

   */
  const numPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2> Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, index) => (
              <Pizza pizzaObj={pizza} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p> We're still working on our menu. please come back later :) </p>
      )}
    </main>
  );
}

/* function MakeMenu() {
  return <h3> Menu In Processing</h3>;
} */
function Pizza({ pizzaObj }) {
  return (
    /* conditional className */
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {console.log(pizzaObj.soldOut)}
        {/* conditional text */}
        <span>{!pizzaObj.soldOut ? `${pizzaObj.price}$` : "SOLD OUT"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  /*   return React.createElement("footer", null, "We're Currently Open!");
   */
}

// Destructing Props => Better then write props in order Component =>> we can make Destructing like this
/*  
function Order({closeHour , openHour})
and when we use it in jsx we will write {closeHour} instead of {props.closeHour}
*/

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open From {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
// to work strict mode we must use React.StrictMode to warp <App /> component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App /> , document.getElementByID('root'));
