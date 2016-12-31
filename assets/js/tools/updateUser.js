export default (field, data, _id) => {

  fetch('/update-user', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      field,
      data,
      _id
    })
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('Received answer', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })

}
