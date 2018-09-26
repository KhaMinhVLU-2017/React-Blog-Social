import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import loadedImg from '../../images/load3.gif'
import createHistory from 'history/createBrowserHistory'
/**
 * React-Cookie
 */
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'

/**
 * Redux
 */
import * as todoAction from '../../actions/index'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import config from '../../config'
// jwt
var jwt = require('jsonwebtoken')

class Login extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  constructor (props) {
    super(props)
    const { cookies } = props // get cookie from props
    this.state = {pesiCookie: cookies.get('myCookie'), name: '', email: '', error: '', loaded: false, redirectTo: false}
    this.onHanderChange = this.onHanderChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }
  onHanderChange (e) {
    let value = e.target.value
    let name = e.target.name
    this.setState({ [name]: value })
    // console.log(name + ' ' + value)
  }
  formSubmit (e) {
    e.preventDefault()
    let history = createHistory()
    this.setState({loaded: true})
    let email = this.state.email
    let pass = this.state.pass
    let self = this
    axios.post(config.api.local + '/api/login', {
      email, pass
    }).then((reponse) => {
      if (reponse.data.token.status === 404) {
        let errorMessage = reponse.data.token.message
        self.setState({ error: errorMessage, loaded: false })
        console.log(reponse.data.token.status)
      }
      if (reponse.data.token.status === 200) {
        // Luu vao session
        const { cookies } = self.props
        jwt.verify(reponse.data.token.token, 'PesiSecretKey', function(err, decoded) {
          let email = decoded.email
          let username = decoded.username
          let id_user = decoded.id
          let token = reponse.data.token.token
          cookies.set('id_user', id_user)
          cookies.set('username', username)
          cookies.set('email', email)
          cookies.set('__Token', token)
          let location = history.location
          // console.log(location)
          self.props.actions.loginA(id_user,username,email,token)
          location.pathname.toLowerCase() === '/login' ? self.setState({redirectTo: true}): history.goBack()// Return Before Page
        });
       
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
  render () {
    if (this.state.redirectTo) {
      return <Redirect to='/' />
    }
    return (
      <div className='mh-fullscreen bg-img center-vh p-20' style={{ backgroundImage: 'url(assets/img/bg-girl.jpg)' }}>
        {this.state.loaded ? <img className='creArti_img' src={loadedImg} alt='loaded' /> : <div className='card card-shadowed p-50 w-400 mb-0' style={{ maxWidth: '100%' }}>
          <h5 className='text-uppercase text-center'>Login</h5>
          <br />
          <form onSubmit={this.formSubmit}>
            <div className='form-group'>
              <input onChange={this.onHanderChange} type='text' name='email' className='form-control' placeholder='Email' />
            </div>
            <div className='form-group'>
              <input onChange={this.onHanderChange} type='password' name='pass' className='form-control' placeholder='Password' />
            </div>
            <div className='form-group flexbox py-10'>
              <label className='custom-control custom-checkbox'>
                <h5 className='lg_error'><Badge pill color='danger'>{this.state.error}</Badge></h5>
              </label>
              <a className='text-muted hover-primary fs-13' href='note'>Forgot password?</a>
            </div>
            <div className='form-group'>
              <button className='btn btn-bold btn-block btn-primary' type='submit'>Login</button>
            </div>
          </form>
          <hr className='w-30' />
          <p className='text-center text-muted fs-13 mt-20'>Don't have an account? <a href='/Signup'>Sign up</a></p>
        </div>
        }
      </div>
    )
  }
}


function mapDispatchToProps (dispatch){
  return {
    actions: bindActionCreators(todoAction,dispatch)
  }
}
export default withCookies(connect(null,mapDispatchToProps)(Login))