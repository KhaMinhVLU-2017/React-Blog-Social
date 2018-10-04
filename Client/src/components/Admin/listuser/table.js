import React from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'
import config from '../../../config'

export default class TableListUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
  }
  componentDidMount() {
    let self = this
    axios.get(config.api.local +'/api/listuser')
    .then(response => {
        if (response.status === 200) {
          // console.log(response)
          self.setState({ list: response.data })
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
            <th>User</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {listMeo.map((item, index) => 
            <tr key ={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>X</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}