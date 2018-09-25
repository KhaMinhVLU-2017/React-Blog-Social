import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import CreateArticle from './components/CreateAriticle'
import Login from './components/Login'
import SingleArticle from './components/SingleArticle'
import Signup from './components/Signup'
import createHistory from 'history/createBrowserHistory'
import ErrorMeo from './components/Error'
import { CookiesProvider, withCookies } from 'react-cookie'
// Rich Editor wyswyg
import 'froala-editor/js/froala_editor.pkgd.min.js'
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
// Require Font Awesome.
import 'font-awesome/css/font-awesome.css'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
/**
 * Font-awesome
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)

/**
 * pass Param in Home
 */

let initialState = {}
let store

class RouteApp extends Component {
  componentWillMount () {
    let { cookies } = this.props
    // console.log(cookies.get('__Token'))
    if (cookies) {
      let username = cookies.get('username')
      let id = cookies.get('id_user')
      let email = cookies.get('email')
      let __Token = cookies.get('__Token')
      initialState = {
        id_user: id,
        username,
        email,
        __Token
      }
      store = createStore(reducer, initialState)
    }
  }
  render () {
    return (
      <CookiesProvider >
        <BrowserRouter >
          <Provider store={store}>
            <Fragment>
              <Navbar />
              <Switch >
                <Route path='/' exact render={() => {
                  // let history = createHistory()
                  // history.push('/')
                  return <Welcome />
                }} />
                <Route path='/Login' render={() => {
                  // let history = createHistory()
                  // history.push('/login')
                  return <Login />
                }} />
                <Route path='/Logout' render={() => {
                  return <Redirect to='/' />
                }} />
                <Route path='/Signup' render={() => {
                  // let history = createHistory()
                  // history.push('/Login')
                  return <Signup />
                }} />
                <Route path='/article/:idPost' component={SingleArticle} />
                <Route path='/articles/create' render={() => {
                  let { cookies } = this.props
                  let history = createHistory()
                  history.push('/articles/create', { some: 'state' })
                  return cookies.get('id_user') ? <CreateArticle /> : <Login />
                }} />
                <Route component={ErrorMeo} />
              </Switch>
              <Footer />
            </Fragment>
          </Provider>
        </BrowserRouter>
      </CookiesProvider>
    )
  }
}

let RouteAppCookie = withCookies(RouteApp)
ReactDOM.render(<RouteAppCookie />, document.getElementById('root'))
registerServiceWorker()
