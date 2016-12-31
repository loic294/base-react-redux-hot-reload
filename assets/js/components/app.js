var Link = Router.Link;

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user : USER
    }

  }

  render() {

    return (
      <div className="app">
       <nav className="navbar">
         <Link to="dashboard">
            <div className="nav-items">Dashboard</div>
          </Link>
         <Link to="clients">
            <div className="nav-items">Clients</div>
         </Link>
       </nav>

       <div className="content">
         {this.props.children}
       </div>

      </div>
    )

  }

}

export default App
