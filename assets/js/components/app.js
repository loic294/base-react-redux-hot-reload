class App extends React.Component {

  render() {

    return (
      <div className="app">
       <nav className="navbar">
         Navbar
       </nav>

       <div>
         {this.props.children}
       </div>

      </div>
    )

  }

}

export default App
