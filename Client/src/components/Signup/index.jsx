import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Badge } from 'reactstrap'
import loadedImg from '../../images/load3.gif'
import {Redirect} from 'react-router'
import config from '../../config'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null, leaded: false, reDirect: false }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange (e) {
    let name = e.target.name
    this.setState({ [name]: e.target.value })
  }
  onSubmit (e) {
    e.preventDefault()
    let self = this
    this.setState({leaded: true})
    let email = this.state.email
    let username = this.state.username
    let pass = this.state.pass
    let passconfirm = this.state.passcf
    let data = { email, pass, username, passconfirm }
    axios.post(config.api.local + '/api/signup'
      , data
    ).then((response) => {
      if (response.data.status === 404) {
        console.log(response.data.message)
        self.setState({ error: response.data.message, loaded: false })
      }
      if (response.data.status === 200) {
        self.setState({ loaded: false, reDirect: true })
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
  render () {
    if (this.state.reDirect) {
      return <Redirect to='/Login' />
    }
    return (
      <div className='mh-fullscreen bg-img center-vh p-20' style={{ backgroundImage: 'url(assets/img/bg-girl.jpg)' }}>
        {this.state.loaded ? <img className='creArti_img' src={loadedImg} alt='loaded' /> :
          <div className='card card-shadowed p-50 w-400 mb-0' style={{ maxWidth: '100%' }}>
            <h5 className='text-uppercase text-center'>Register</h5>
            <br />
            <br />
            <form onSubmit={this.onSubmit} className='form-type-material'>
              <div className='form-group'>
                <input onChange={this.onChange} name='username' type='text' className='form-control' placeholder='Username' required />
              </div>
              <div className='form-group'>
                <input onChange={this.onChange} name='email' type='text' className='form-control' placeholder='Email address' required />
              </div>
              <div className='form-group'>
                <input onChange={this.onChange} name='pass' type='password' className='form-control' placeholder='Password' required />
              </div>
              <div className='form-group'>
                <input onChange={this.onChange} name='passcf' type='password' className='form-control' placeholder='Password (confirm)' required />
              </div>
              <br />
              <h5 className='lg_error'><Badge pill color='danger'>{this.state.error}</Badge></h5>
              <br />
              <button className='btn btn-bold btn-block btn-primary' type='submit'>Register</button>
            </form>
            <hr className='w-30' />
            <p className='text-center text-muted fs-13 mt-20'>Already have an account?
          <Link to='/login'>Sign in</Link>
            </p>
          </div>
        }
      </div>
    )
  }
}
export default Signup
