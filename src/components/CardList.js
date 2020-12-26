import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	// This will throw an error and indicate where the code went wrong. But this will only be visible for us
	// developers, because CRA uses development mode. In production, the users wouldn't see this error. They
	// would see the ErrorBoundary h1 thats says "something went wrong".
	// if(true){
	// 	throw new Error('Nope');
	// }
	return (
		<div>
			{
				robots.map((user,i) => {
					return (
						<Card 
							key={robots[i].id} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})	// el robots.map() no se cierra con ';'. Si se pone el ';', tira error.
			}
		</div>
	);
}

export default CardList;