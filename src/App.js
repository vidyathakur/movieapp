import Header from './components/header/header.component.jsx'
import Home from './components/home/home.component.jsx'
import Latest from './components/latest/latest.component.jsx'
import Upcoming from './components/upcoming/upcoming.component.jsx'
import Nowplaying from './components/nowplaying/nowplaying.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx';
import Details from'./components/details/details.component.jsx';
import React from 'react'
import axios from 'axios'
import './App.css';
import { Route,Switch } from 'react-router-dom';



class App extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: [],
			searchField: '',
			value: ''
		};
	}

	async componentDidMount() {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&query=Avengers&page=1&include_adult=false`
			)
			.then(res => {
				const movies = res.data;
				console.log(movies);
				this.setState({ movies: res.data.results });
			});
			
	}
	

	search = async value => {
		this.setState({ loading: true });
		const res = await axios(
			`https://api.themoviedb.org/3/search/movie?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&query=${value}&page=1&include_adult=false`
		);
		const movies = await res.data.results;
		console.log(movies);
		this.setState({ ...this.state, movies, loading: false });
	};

	handleChange = e => {
		this.search(e.target.value);
		this.setState({ value: e.target.value });
		console.log(e);
	};

	render() {
		return <div className="App">
				<Header />
				<SearchBox placeholder="Search Movie" value={this.state.value} handleChange={this.handleChange} />
				<Switch>
					<Route exact path="/" render={props => <Home movies={this.state.movies} {...props} />} />
					<Route exact path="/latest" movies={this.state.movies} component={Latest} />
					<Route exact path="/upcoming" movies={this.state.movies} component={Upcoming} />
					<Route exact path="/nowplaying" component={Nowplaying} />
					<Route exact path="/movie/details/:id" component={Details} />
				</Switch>
			</div>;
	}
}

export default App;
