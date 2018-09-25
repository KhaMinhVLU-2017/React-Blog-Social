import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'

const SubArticle = (props) => {
  return (
    <Fragment>
      <article className='mt-90 SubArti' >
        <header className='text-center mb-40'>
          <h3>
            <a href='blog-single.html'>{props.title}</a>
          </h3>
          <div className='link-color-default fs-12'>
            <a href='note'>{props.author} </a>,&ensp; <time>{props.date}</time>
          </div>
        </header>
        <a href='blog-single.html'>
          <img className='rounded' src={config.api.local + props.image} alt={props.title} />
        </a>
        <div className='card-block'>
          <p className='text-justify'>{props.sapo}</p>
          <p className='text-center mt-40'>
            <Link className='btn btn-primary btn-round' to={'/article/' + props.idPost}>Read more</Link>
          </p>
        </div>
      </article>
      <hr />
    </Fragment>
  )
}
export default SubArticle
