import React from 'react'
import Card from './Card'

const PlayerList= ({players}) =>{

	const pList = players.map((user,i)=>{
		return <Card key={i} id ={players[i].id} name= {players[i].name} postion ={players[i].postion} image ={players[i].image}/>;
		})
	return(
		<div>
			{pList};
		</div>

		);
}

export default PlayerList;