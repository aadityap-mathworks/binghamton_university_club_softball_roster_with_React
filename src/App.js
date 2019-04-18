import React, {Component} from 'react'
import PlayerList from './PlayerList'
import {players} from './players';
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'

class App extends Component{

	constructor(){
		super();
		this.state={
			players: players,
			searchField : ''
		} 

	}


	onSearchText = (event) =>{
		
		this.setState({
			searchField: event.target.value
		});
	}

	render()
	{
		const filteredPlayer = this.state.players.filter(player=>{

			return player.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})

		return (
			<div className='tc'>
				<h1 className="f2"> BINGHAMTON UNIVERSITY CLUB SOFTBALL </h1>
				<SearchBox searchText= {this.onSearchText}/>
				<Scroll>
					<PlayerList players ={filteredPlayer}/>
				</Scroll>	
			</div>
		);
	}
}


export default App;