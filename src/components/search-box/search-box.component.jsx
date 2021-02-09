import React from 'react'
import './search-box.styles.css'


 const SearchBox = ({placeholder, handleChange, value}) => (
	<div className="list-contacts">
		<div className="list-contacts-top">
			<input
				className="search-contacts"
				type="search"
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	</div>
);

export default SearchBox;

