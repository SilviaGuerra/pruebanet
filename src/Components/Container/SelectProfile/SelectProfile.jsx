import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../../redux/actions/general';
import Home from "../Home";
import Profile from '../Profile';

import selectProfileStyles from './SelectProfileStyles';

const usersNetflix = {
    id: '1',
    name: 'Silvia',
    photo__user: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/220px-Emoji_u263a.svg.png',
    movies: {
		p_1: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg',
		p_2: 'https://imgc.allpostersimages.com/img/print/posters/toy-story-woody-buzz_a-G-13390942-0.jpg',
		p_3: 'https://m.media-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg',
        p_4: 'https://images-na.ssl-images-amazon.com/images/I/51sRANqn-RL.jpg',
        p_5: 'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg',
    }
}

// Object.keys(usersNetflix.movies).map((moviesUser, index) => {
	// if(movies > 0) {
	//     console.log(movies);
	// }
	// return (
	//     <img src={moviesUser} alt="film - `${index}`"/>
	// )
	// console.log(moviesUser, `${index + 1}`);
	// return usersNetflix.movies;
// });

class SelectProfile extends Component {
	constructor(props) {
		super(props);
		this.handleClickUser = this.handleClickUser.bind(this);
		this.state = {
			loginUser: {}
		};
	}

	handleClickUser() {
		this.setState({
			loginUser: this.props.userAction(usersNetflix)
		});
	}

	render() {
		if(!this.state.loginUser) {
			return(
				<div {...selectProfileStyles()}>
					<Home
						film={usersNetflix.movies}
						// film={moviesUser}
					/>
				</div>
			);
		}

		return (
			<div {...selectProfileStyles()}>
				<div className="header">
					<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png" alt="netflix"/>
				</div>
				<h1>¿Quién está viendo ahora?</h1>
				<Profile
					user={usersNetflix.name}
					photo_user={usersNetflix.photo__user}
					onClick={this.handleClickUser}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	userAction: (type, payload) => {
		dispatch(setUser(type, payload));
	}
});

export default connect(() => ({}), mapDispatchToProps)(SelectProfile);
