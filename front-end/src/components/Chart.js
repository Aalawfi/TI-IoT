/* App.js */
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';



let timeline = [{name : 'T-4', value : 0},
{name : 'T-3', value : 0},
{name : 'T-2', value : 1},
{name : 'T-1', value : 0},
{name : 'T', value : 0}];


function Chart(props){
	/* most recent 5 hours*/
	/*var today = new Date(),
    time = today.getHours();

	console.log(time) */
	console.log(props)

/*	timeline[0] = timeline[1]
	timeline[1] = timeline[2] 
	timeline[2] = timeline[3] 
	timeline[3] = timeline[4] 
	timeline[4] = {name:props.time.substring(11, 19),
			   	   value : props.value}*/

	return(
		<div> 
		<LineChart width={550} height={320} data={props.timeline}>
		<Line type="step"
			  dataKey="value"
			  strokeWidth={3}
			  isAnimationActive={false} />
		<CartesianGrid stroke="#ccc" />
		<XAxis dataKey="name" >
			<Label value="Time" 
				   offset={-10}
				   position="insideBottom" />
		</XAxis>
		<YAxis 
				dataKey = "value"
			    tickCount = '1'
			    type="number"
			    domain={[0, 1]}>
			<Label value="Activity"
				   angle={-90}
				
				   position='insideLeft'/>

		</YAxis>
		</LineChart>
		</div>
	);
};

export default Chart;