import React from 'react';

class ErrorBoundary extends React.Component{
	constructor(props){
		// we need this to have access to the props.
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasError:true})
	}

	render(){
		if(this.state.hasError){
			<h1>Ooops. Something went wrong</h1>
		}
		// because children will be anything that's inside ErrorBoundary (in our case: CardList)
		return this.props.children
	}
}

export default ErrorBoundary;