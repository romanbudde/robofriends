import React from 'react';
// We could also change (props) to ({name, email, id}) and use that instead of the destructuring done in the first
// line of the function.
const Card = (props) => {
	// we can use destructuring, shown in the line below, that saves us the work of writing props.name, props.email
	// props.id each time we use it. We assing the values of name, email and id from the object to name, email and id 
	// in our function.
	const {name, email, id} = props;
	return(
		// bg = backgounrd	div = ?		br3 = border 	pa = padding	ma = margin		grow = the animation.
		// When writing props.something we need the {} because it is a JavaScript expression. It needs to be wrapped.
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;