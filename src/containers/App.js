import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component{
	constructor(){
		// We HAVE TO call the super() function which calls the constructor of React.Component. Otherwise it doesn't
		// work! ! !
		super()
		// This state is what describes our App, and usually lives in the parent component.
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		// fetch() is used to make requests to servers.
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>{
				return response.json();
			})
			.then(users => {
				this.setState({robots: users})
			})
	}

	onSearchChange = (event) => {
		// every time the input changes, we get an event.
		this.setState({searchfield: event.target.value})
		console.log(event.target.value);
	}

	render(){
		// we apply destructuring to get rid of so many	"this.state"
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return robots.length === 0 ? 
			<h1 className = 'tc'>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className = "f2">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		
	}
}

export default App;