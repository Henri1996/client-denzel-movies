import React, { Component } from 'react';

import { Table } from 'reactstrap';



class fetchApi extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          item : [],
          isLoaded: false,
        }
      }
  componentDidMount(){

    fetch('https://denzel-movies-back.netlify.com/.netlify/functions/server/movies/populate')
    .then(res => res.json())
    .then(json =>{
        this.setState({
          isLoaded : true,
          item : json,
        })
    }
      
    )

}
  render() {
    var { isLoaded , item} = this.state

    if(!isLoaded){
      return <div>Loading....</div>
    }
    else{
    return (
      <div>
        
        <ul>
          {item.map(it=>(<li>
            Title : {it.title}
          </li>))}    
        </ul>
        </div>
    );
  }
  }
}
export default fetchApi;