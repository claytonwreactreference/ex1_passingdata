import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <ul>
      {this.props.profiles.map((profile) =>{
      	const userName = this.props.users[profile.userID].name; 
    	const movieName = this.props.movies[profile.favoriteMovieID].name;
      
      	return(
          <li key={profile.id}>
            {`${userName} favorite movie is ${movieName}`}
		  </li>)
		})}
      </ul>
	)
  }
}
export default List