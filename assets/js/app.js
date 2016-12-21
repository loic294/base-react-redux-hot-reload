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

  render() {
    return <div>
      <label>Courriel</label>
      <input type="email" name="email" value={this.state.email} onChange={this.changeEmail} />
      <br/>
      <label>Mot de passe</label>
      <input type="password" name="password" value={this.state.password} onChange={this.changePassword} />
      <br/>
      <button>Envoyer</button>
    </div>;
  } // render

} // App


export default App
