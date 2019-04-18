import React from 'react'

const SeaechBox =({searchField, searchText }) =>{

	return (
			<div className ='pa2'>

				<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type="search" 
				placeholder="search players" 
				onChange= {searchText}
				/>

			</div>
		)
}


export default SeaechBox;