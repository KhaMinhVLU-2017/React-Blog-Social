export function loginA (iduser, username, email, __Token) {
  return {
    type: 'LOGGIN',
    id_user: iduser,
    username,
    email,
    __Token
  }
}
export function logoutA () {
  return {type: 'LOGOUT'}
}
