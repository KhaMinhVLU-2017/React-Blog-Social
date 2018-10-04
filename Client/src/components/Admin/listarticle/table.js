import React from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'
import config from '../../../config'

export default class TableListArt extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
  }
  componentDidMount() {
    let self = this
    axios.get(config.api.local + '/api/Articles')
    .then(response => {
        if (response.status === 200) {
          // console.log(response)
          self.setState({ list: response.data.listArti })
        }
      })
    .catch(err => err)
  }
  render() {
    let listMeo = this.state.list
    // console.log(listMeo)
    return (
     
     <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Author</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {listMeo.map((item, index) => 
            <tr key ={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              
              <td>{item.date}</td>
              <td>{item.author}</td>
              <td>X</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}