import * as React from 'react';

// 2.0 The App component doesn’t have any parameters in its function signature
// 2.1 Props are how information are passed from one component to another component.
// 2.2 These props will be accessible via the function’s signature as parameters.
function App() {
	//1.0 A component has to start with a capital letter, otherwise it isn’t treated as component in React.
	//1.2 the App component is commonly called a function component.
	//1.3 Function components are the modern way of using components in React, however, be aware that there are other variations of React components like component types

	return (
		//3.0 the App component returns code that resembles HTML. It allows you to combine JavaScript and HTML for displaying highly dynamic and interactive content in a browser.
		<div>
			<h1>Hello React</h1>
		</div>
	);
}
// 4.0 Like any other JavaScript function, a function component can have implementation details between the function signature and the return statement.
export default App;
