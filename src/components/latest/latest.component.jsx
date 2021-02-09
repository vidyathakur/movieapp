import React from 'react';
import './latest.styles.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Latest extends React.Component {
	state = {
		movies: []
	};
	async componentDidMount() {
		axios
			.get(
				` https://api.themoviedb.org/3/movie/latest?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1`
			)
			.then(res => {
				const movies = res.data;
				console.log(movies);
				this.setState({ movies: movies });
			});
	}

	render() {
		return <div className="container mt-5" style={{ 'background-color': '#f5f5f5' }}>
				<div className="row">
					{this.state.movies.map(movie => <div className="col-md-3" key={movie.id}>
							<div className="card-deck" style={{ width: '85%', 'margin-bottom': '50px' }}>
								<div className="card">
									<img className="card-img-top" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.backdrop_path}')`, 'background-repeat': 'no-repeat' }} />
									<div className="card-body">
										<h5 className="card-title" style={{ 'font-size': '14px' }}>
											{movie.original_title}
										</h5>
										<Link to={`/movie/details/${movie.id}`}>More Details</Link>
									</div>
								</div>
							</div>
						</div>)}
				</div>
			</div>;
	}
}

export default Latest;
