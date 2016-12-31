class App extends React.Component {

  constructor() {
    super();

    this.state = {
      nom : "",
      email : "",
      password : "",
      error : []
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

    this.setState({ error : [] });

    fetch('/signup', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(function(response) {
      return response.json()
    }).then(function(json) {

      if(json.status === "ok") {
        window.location = window.location.protocol + "//" +  location.host + "/dashboard";
      } else {
        this.state.error.push(json.message);
        this.setState({ error : this.state.error });
      }

      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {

    console.log(this.state);

    return <div>

      {this.state.error.length > 0 && <div>
        {this.state.error.map((elem, i)=>{
          return <div className="error">{elem}</div>
        })}
      </div>}

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
