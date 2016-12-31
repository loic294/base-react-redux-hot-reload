import { Field } from 'redux-form';

class Clients extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="dashboard-container">

       <div className="inner-content">

        <label>Nom</label>
        <Field name="nom" component={props => {
          return <input type="text" {...props.input} onBlur={(e) => this.props.changed("nom", e.target.value, this.props.user._id)} />
        }} />

        <label>Email</label>
        <Field name="email" component={props => {
          return <input type="email" {...props.input} onBlur={(e) => this.props.changed("email", e.target.value, this.props.user._id)} />
        }} />


       </div>

      </div>
    )

  }

}

export default Clients
