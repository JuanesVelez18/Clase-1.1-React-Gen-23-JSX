import "./App.css";

function App() {
  const myInformation = {
    name: "Juan Esteban Velez",
    age: 22,
    favoriteMovie: "Shrek",
    favoriteMusic: "Rock alternativo",
  };

  const idContainer = "id-super-special";
  const classContainer = "App app2";
  const style = {
    color: "blue",
    borderColor: "red",
    borderWidth: 3,
    borderStyle: "solid",
    padding: 20,
  };

  return (
    <div className={classContainer} id={idContainer} style={style}>
      <div className="Card-info card-info--personal">
        <h2>Personal</h2>
        <ul className="prefered-list">
          <li>{myInformation.name}</li>
          <li>{myInformation.age} años</li>
          <li>{myInformation.favoriteMovie}</li>
          <li>{myInformation.favoriteMusic}</li>
        </ul>
      </div>

      <div className="Card-info card-info--hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Caminatas</li>
          <li>Videojuegos</li>
          <li>Baloncesto</li>
          <li>Cine</li>
        </ul>
      </div>

      <div className="Card-info card-info--food">
        <h2>Comida Favorita</h2>
        <ul>
          <li>Bandeja Paisa</li>
          <li>Pastas</li>
          <li>Ajiaco</li>
          <li>Salchipapas</li>
        </ul>
      </div>

      <div className="Card-info card-info--stack">
        <h2>My Stack Tech</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
