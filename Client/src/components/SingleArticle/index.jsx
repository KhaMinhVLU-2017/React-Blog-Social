import React, { Fragment } from 'react'

import axios from 'axios'
import config from '../../config'

class SingleArticle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      idPost: null,
      detailContent: {}
    }
  }
  componentWillMount () {
    this.setState({ idPost: this.props.match.params.idPost })
  }
  componentDidMount () {
    // console.log(this.state.idPost)
    let self = this
    axios.get(config.api.local + '/api/Article/' + this.state.idPost)
      .then(function (response) {
        if (response.data.status === 200) {
          let content = response.data.detailArt
          self.setState({ detailContent: content })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    return (
      <Fragment>
        <header className='header header-inverse h-fullscreen pb-80' style={{ backgroundImage: `url(${config.api.local}${this.state.detailContent.image})` }} data-overlay={8}>
          <div className='container text-center'>
            <div className='row h-full'>
              <div className='col-12 col-lg-8 offset-lg-2 align-self-center'>
                <p className='opacity-70'>News</p>
                <br />
                <h1 className='display-4 hidden-sm-down'>{this.state.detailContent.title}</h1>
                <h1 className='hidden-md-up'>{this.state.detailContent.title}</h1>
                <br />
                <br />
                <p>
                  <span className='opacity-70 mr-8'>By</span>
                  <a className='text-white' href='note'>{this.state.detailContent.author}</a>
                </p>
                <p>
                  <img className='rounded-circle w-40' src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt='...' />
                </p>
              </div>
              <div className='col-12 align-self-end text-center'>
                <a className='scroll-down-1 scroll-down-inverse' href='note' data-scrollto='section-content'>
                  <span />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className='main-content'>

          <div className='section' id='section-content'>
              <Content content={this.state.detailContent.content} />
          </div>

          <div className='section bt-1 bg-grey'>
            <div className='container'>
              <div className='row text-center'>
                <div className='text-center p-5'>
                  COMMENTS HERE.
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

const Content = (props) => <div className='container' dangerouslySetInnerHTML={{__html: props.content}} />

export default SingleArticle
