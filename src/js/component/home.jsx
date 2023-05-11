import React , { useState } from "react";


//create your first component
const Home = () => {
	const [selected, setSelected] = useState ("red");
	return (
		<>
			<div className="stick"> </div>
			<div className="box">
				<div onClick={() => setSelected("red")} 
					className={"light red" + (selected === "red" ?" glow" : "")}> 
				</div>
				<div onClick={() => setSelected("yellow")} 
					className={"light yellow" + (selected === "yellow" ?" glow": "")}> 
				</div>
				<div onClick={() => setSelected("green")} 
					className={"light green" + (selected === "green" ?" glow" : "")}> 
				</div>
			</div>
		</>
	);
};

export default Home;
