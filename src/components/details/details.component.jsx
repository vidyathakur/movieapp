import React from 'react';
import './details.styles.css';
import axios from 'axios';

class Details extends React.Component {
	state = {};
	async componentDidMount() {

		console.log("hi");
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US`
			)
			.then(res => {
				this.setState({movies:res.data});
			});
	}
  


	render() {
		const { movies } = {...this.state};
		const {backdrop_path} = {movies};
	  console.log(backdrop_path);
		console.log(this.movies);
		return <div className="container mt-5" style={{ 'background-color': '#f5f5f5' }}>
				<div className="row">
					<div className="col-md-3">
						<div className="card-deck" style={{ width: '85%', 'margin-bottom': '50px' }}>
							<div className="card">
								<img className="card-img-top" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2
									${this.state.movies && this.state.movies.backdrop_path})`, 'background-repeat': 'no-repeat' }} />
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="card-body">
							<h3 className="card-title" style={{ 'text-align': 'left' }}>
								{this.state.movies && this.state.movies.original_title}
							</h3>
							<h5 className="card-title" style={{ 'font-size': '14px', 'text-align': 'left' }}>
								({this.state.movies && this.state.movies.tagline})
							</h5>
							<h5 className="card-title" style={{ 'font-size': '14px', 'text-align': 'left'}}>
								<i class="fa fa-heart" style={{ 'font-size': '25px', 'padding-right': '10px', color: 'red' }} />
								{this.state.movies && this.state.movies.vote_average} | {this.state.movies && this.state.movies.vote_count}
							</h5>
							<h5 className="card-title" style={{ 'font-size': '14px', 'text-align': 'left', color: 'red' }}>
								{this.state.movies && this.state.movies.status}
							</h5>
							<h5 className="card-title" style={{ 'font-size': '14px', 'text-align': 'left' }}>
								Date: {this.state.movies && this.state.movies.release_date}
							</h5>
							{this.props.movies && this.props.movies.map(movie => (
									<h5 className="card-title" style={{ 'font-size': '14px' }}>
										{movie.spoken_languages}
									</h5>
								))}
							<p style={{ 'text-align': 'justify' }}>
								{this.state.movies && this.state.movies.overview}
							</p>
						</div>
					</div>
				</div>
			</div>;
	}
}

export default Details;
