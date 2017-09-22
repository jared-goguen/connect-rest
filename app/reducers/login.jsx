const login = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
    console.log('LOGGING IN')
      return [
        ...state,
        {
          login: true
        }
      ]
    case 'LOGOUT':
    console.log('LOGGING OUT')
      return [
        ...state,
        {
          login: false
        }
      ]
    default:
      return state
  }
}

export default login