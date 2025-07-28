import pizzaData from "./data";

function Header() {
  return <h1>Fast React Pizza Company</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {isOpen ? <p>We are currently open!</p> : <p>Sorry, we are closed!</p>}
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      {pizzaData.map((pizza, index) => {
        return (
          <div key={index}>
            <img src={pizza.photoName} alt="pizza photo" />
            <p>{pizza.name}</p>
            <p>{pizza.ingredients}</p>
            <p>{pizza.price}</p>
            {pizza.soldOut ? <p>SOLD OUT</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
