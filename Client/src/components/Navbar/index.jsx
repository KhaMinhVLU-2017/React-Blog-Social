import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { withCookies } from 'react-cookie'
/**
 * Redux
 */
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as todoAction from '../../actions/index'

class Navbar extends Component {
  reloadPage () {
    window.location.reload()
  }
  render () {
    // console.log(this.props.username)
    return (
      <nav className='topbar topbar-inverse topbar-expand-md topbar-sticky'>
        <div className='container'>
          <div className='topbar-left'>
            <button className='topbar-toggler'>☰</button>
            <Link className='topbar-brand' to='/'>
              <img className='logo-default' src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt='logo' />
              <img className='logo-inverse' src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt='logo' />
            </Link>
          </div>
          <div className='topbar-right'>
            <ul className='topbar-nav nav'>
              <li onClick={this.reloadPage.bind(this)} className='nav-item '>
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li onClick={this.reloadPage.bind(this)} className='nav-item'>
                <Link className='nav-link' to='/articles/create'>Write new article</Link>
              </li>
              <li onClick={this.reloadPage.bind(this)} className='nav-item'>
                <a className='nav-link' href='note'>Hey Garry!
                <i className='fa fa-caret-down' />
                </a>
                <div className='nav-submenu'>
                  <Link className='nav-link' to='/'>My articles</Link>
                </div>
              </li>
              {this.props.username ?
                <li className='nav-item'>
                  <Link className='nav-link' to='/Login'>{this.props.username}
                    <i className='fa fa-caret-down' />
                  </Link>
                  <div className='nav-submenu'>
                    <Link onClick={() => {
                      this.props.actions.logoutA()
                      let { cookies } = this.props
                      // console.log(cookies)
                      // store.dispatch(todoAction.logoutA())
                      cookies.remove('username')
                      cookies.remove('id_user')
                      cookies.remove('email')
                      cookies.remove('__Token')
                      this.reloadPage()
                    }
                    } className='nav-link' to='/Logout'>Logout</Link>
                  </div>
                </li> :
                <Fragment>
                  <li onClick={this.reloadPage.bind(this)} className='nav-item'>
                    <Link className='nav-link' to='/Login'>Login</Link>
                  </li>
                  <li onClick={this.reloadPage.bind(this)} className='nav-item'>
                    <Link className='nav-link' to='/Signup'>Signup</Link>
                  </li>
                </Fragment>
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStatetoProps (state) {
  return {
    username: state.username
  }
}
function mapDispatch (dispatch) {
  return {
    actions: bindActionCreators(todoAction, dispatch)
  }
}
export default withCookies(connect(mapStatetoProps, mapDispatch)(Navbar))
