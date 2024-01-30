import * as React from 'react';

// 2.0 The App component doesn’t have any parameters in its function signature
// 2.1 Props are how information are passed from one component to another component.
// 2.2 These props will be accessible via the function’s signature as parameters.

// 5.2 do not want to re-define a variable within a function every time this function runs, we could define this variable outside of the component
// 5.3 In this case, the title does not depend on any information that’s within the function component (e.g. parameters coming from the function’s signature), hence it’s okay to move it outside.
// 5.4 Therefore it will be defined only once and not every time the function is called:
const title = 'React';

// As a rule of thumb:
// If a variable does not need anything from within the function component’s body (e.g. parameters), then define it outside of the component which avoids re-defining it on every function call.

function App() {
	//1.0 A component has to start with a capital letter, otherwise it isn’t treated as component in React.
	//1.2 the App component is commonly called a function component.
	//1.3 Function components are the modern way of using components in React, however, be aware that there are other variations of React components like component types

	// 4.0 Like any other JavaScript function, a function component can have implementation details between the function signature and the return statement.
	//The implementation details:

	//::: you can do something in between here :::
	// 5.0 Variables defined in the function’s body will be re-defined each time this function runs
	// const title = 'React';

	return (
		//3.0 the App component returns code that resembles HTML. It allows you to combine JavaScript and HTML for displaying highly dynamic and interactive content in a browser.
		<div>
			{/* 5.1 The function of a component runs every time a component is displayed in the browser.
      This happens for the initial rendering (read: displaying) of the component,
      but also whenever the component updates because it has to display something different due to changes (re-rendering).  */}
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
