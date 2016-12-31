import { connect } from 'react-redux'
import ClientDummy from '../components/client'
import { reduxForm } from 'redux-form';

import updateUser from "../tools/updateUser"

const mapStateToProps = (state) => {
  return {
    user : state.user,
    initialValues : state.user
  }
}

const mapDisatchToProps = (dispatch) => {
  return {

    changed : (field, value, id) => {

      const user = {
        field,
        data : value
      }

      updateUser(field, value, id);

      dispatch({
        type : "UPDATE_USER",
        payload : user
      })
    }

  }
}

let Client = reduxForm({
  form: 'user'
})(ClientDummy);

Client = connect(
  mapStateToProps,
  mapDisatchToProps
)(Client)


export default Client
