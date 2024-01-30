import * as React from 'react';
// 2.0 Any time one of our files saves, the development server notices it and reloads all affected files for the browser.

// 2.1 The bridge between React and the development server which makes this behavior possible is called React Fast Refresh
// 2.2 prior to that it was React Hot Loader on React’s side and Hot Module Replacement on the development server’s side.

const title = 'World';

function App() {
	return (
		// 1.0 Everything returned from a React component will be displayed in the browser
		<div>
			<h1>Hello {title}</h1>
			{/* For our input field and label combination,
      we specified three HTML attributes: htmlFor, id, and type.
      The type attribute is kinda mandatory and has nothing to do with focusing the input field when clicking the label.  */}
			{/* The htmlFor reflects the for attribute in vanilla HTML.
      JSX replaces a handful of internal HTML attributes caused by internal implementation details of React itself.
      */}
			{/* JSX is closer to JavaScript than to HTML, React uses the camelCase33 naming convention. */}
			{/* Expect to come across more JSX-specific attributes like className and onClick instead of class and onclick */}

			{/* When using HTML in JSX, React internally translates all HTML attributes to JavaScript where certain words such as class or for are reserved during the rendering process. Therefore React came up with replacements such as className and htmlFor for them.
      However, once the actual HTML is rendered for the browser, the attributes get translated back to their native variant. */}
			<label htmlFor='search'>Search: </label>
			<input
				id='search'
				type='text'
			/>
		</div>
		// this output is called JSX (JavaScript XML)
	);
}
export default App;
