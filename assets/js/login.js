class App extends React.Component {

  constructor() {
    super();

    this.state = {
      email : "",
      password : ""
    } // state

  } // constructor

  changeEmail(e) {
    this.setState({ email : e.target.value  })
  }

  changePassword(e) {
    this.setState({ password : e.target.value })
  }

  login() {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Indique l'information qu'on envoie
      },
      body: JSON.stringify(this.state) // Converti un objet en string
    })
  }

  render() {

    console.log(this.state);

    return <div className="login">

      <div className="login-container">

        <h1>Connexion</h1>

        <label>Courriel</label>
        <input type="email" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />

        <label>Mot de passe</label>
        <input type="password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} />

        <div className="mot-de-passe-oublie">

        </div>

        <button onClick={ ()=> this.login() }>Envoyer</button>

      </div>

    </div>;
  } // render

} // App


export default App
