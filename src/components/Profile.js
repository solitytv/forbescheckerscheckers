import { fetchForbes } from "../actions/actions_profile"
import Select from 'react-select'
import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
 class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: ''
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchForbes());
    console.log(this.props.forbes)
  }
  handleChange = (selectedOption) =>  {
    this.setState({selectedOption : selectedOption ? selectedOption : ''})
  }
  render() {
    const option = this.props.forbes.map((items) => {return {value: items.uri,label: items.uri}})
    
     return (
<div className="container">
   <div className="row">
     <div className='col-xs-12 col-sm-12  col-xs-12 col-lg-12 '>
       <Select value={this.state.selectedOption.value}
    onChange={this.handleChange.bind(this)}
    options={option}
    />
    {''}<div></div>
    <Table striped bordered hover variant="dark" responsive size="sm" style={{marginTop: '100px'}}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Rank</th>
      <th>Company</th>
      <th>Bio</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    
    {this.props.forbes.map((items,index) => {
      if(this.state.selectedOption === ''||items.uri === this.state.selectedOption.value) {
        return( 
      <tr key={index}>
        <td>{items.uri}</td>
        <td>{items.rank}</td>
        <td>{items.source}</td>
        <td>{items.bios}</td>
        <td><img className="img-fluid" src={items.squareImage} alt='failed to load'/>
        </td>
      </tr>)
      }
    })
    }
    </tbody>
</Table>
  </div>
  </div>
  </div>)
   }
 }


export default Profile;
