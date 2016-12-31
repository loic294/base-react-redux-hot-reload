class Dashboard extends React.Component {

  constructor() {
    super()

  }

  render() {

    return (
      <div className="dashboard-container">

       <div className="inner-content">
         Bonjour {this.props.user.nom}
       </div>

      </div>
    )

  }

}

export default Dashboard
