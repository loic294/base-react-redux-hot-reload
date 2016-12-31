class Dashboard extends React.Component {

  constructor() {
    super()

    this.state = {
      user : USER
    }

    console.log(this.state)

  }

  render() {

    return (
      <div className="dashboard">

       <div>
         Bonjour {this.state.user.nom}
       </div>

      </div>
    )

  }

}

export default Dashboard
