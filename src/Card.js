import React from 'react';


const Card =(props)=> {
	return(

			<div className='tc bg-light-green dib br3 pa3 ma2 grow	'>
				<img src={props.image} alt="player"/>
				<div>
					<h2>{props.name}</h2>
					<p> {props.postion}</p>
				</div>
			</div>
		);
}

export default Card;