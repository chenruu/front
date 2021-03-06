export const login = (state, data) => {
  state.token = data.token
  state.role = data.role
  state.email = data.email
  state.cart = data.cart
  state._id = data._id
}

export const logout = (state, data) => {
  state.token = ''
  state.role = 0
  state.email = ''
  state.cart = 0
}

export const getInfo = (state, data) => {
  // state.token = data.token
  state.role = data.role
  state.email = data.email
  state.cart = data.cart
  state.likes = data.likes
}

export const extend = (state, data) => {
  state.token = data
}

export const updateCart = (state, data) => {
  state.cart = data
}
