class App extends React.Component {

  constructor() {
    super();

    this.state = {
      nom : "",
      email : "",
      password : ""
    } // state

  } // constructor

  changeNom(e) {
    this.setState({ nom : e.target.value  })
  }

  changeEmail(e) {
    this.setState({ email : e.target.value  })
  }

  changePassword(e) {
    this.setState({ password : e.target.value })
  }

  login() {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {

    console.log(this.state);

    return <div>
      <label>Nom</label>
      <input type="text" name="nom" value={this.state.nom} onChange={this.changeNom.bind(this)} />
      <br/>
      <label>Courriel</label>
      <input type="email" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />
      <br/>
      <label>Mot de passe</label>
      <input type="password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} />
      <br/>
      <button onClick={ ()=> this.login() }>{"S'incrire"}</button>
    </div>;
  } // render

} // App


export default App
