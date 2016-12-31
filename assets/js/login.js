class App extends React.Component {

  constructor() {
    super();

    this.state = {
      email : "",
      password : ""
    } // state

  } // constructor

  render() {

    console.log(this.state);

    return <div className="login">

      <div className="login-container">

        <h1>Connexion</h1>

        <form action="/login" method="post">

          <label>Courriel</label>
          <input type="email" name="email" />

          <label>Mot de passe</label>
          <input type="password" name="password" />

          <div className="mot-de-passe-oublie">

          </div>

          <button type="submit">Envoyer</button>

        </form>

      </div>

    </div>;
  } // render

} // App


export default App
