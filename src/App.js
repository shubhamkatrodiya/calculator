import { useState } from 'react';
import './App.css';

function App() {

	let [val, setval] = useState("");
	let [ans, setans] = useState("");
	let [cal, setcal] = useState("");

	const all = (e) => {
		setval(val + e.target.value);
	}
	const clear = () => {
		setval('');
	}
	const call = (e) => {
		setans(val);
		setcal(e.target.value);
		setval('');
	}
	const clearone = () => {
		setval(val.substring(0, val.length - 1));
	}
	const eq = () => {
		let te = 0;
		if (cal === '+') {
			te = (parseInt(ans) + parseInt(val));
		}
		else if (cal === '-') {
			te = (parseInt(ans) - parseInt(val));
		}
		else if (cal === '*') {
			te = (parseInt(ans) * parseInt(val));
		}
		else if (cal === '/') {
			te = (parseInt(ans) / parseInt(val));
		}
		else if (cal === '%') {
			te = (parseInt(ans) % parseInt(val));
		}

		if(te == Infinity){
			setval('enter valid data')
		}
		else if(te == NaN){
			setval('enter valid data')
		}
		else{
			setval(te)
		}
	}
	return (
		<>
			<div class="container">
				<div class="box">
					<div class="disp flex">
						<input type="text" readonly name="" id="disp" placeholder='0' value={val}></input>
					</div>
					<div class="keybord">
						<div class="keybox">
							<input type='button' class="key" onClick={clearone} value='C'></input>
							<input type='button' class="key" onClick={clear} value='AC'></input>
							<input type='button' class="key" value='%' onClick={call}></input>
							<input type='button' class="key" onClick={call} value='+'></input>
						</div>
						<div class="keybox">
							<input type='button' class="key" onClick={all} value='7'></input>
							<input type='button' class="key" onClick={all} value='8'></input>
							<input type='button' class="key" onClick={all} value='9'></input>
							<input type='button' class="key" onClick={call} value='-'></input>
						</div>
						<div class="keybox">
							<input class="key" type='button' onClick={all} value='4'></input>
							<input class="key" type='button' onClick={all} value='5'></input>
							<input class="key" type='button' onClick={all} value='6'></input>
							<input class="key" type='button' onClick={call} value='*'></input>
						</div>
						<div class="keybox">
							<input class="key" type='button' onClick={all} value='1'></input>
							<input class="key" type='button' onClick={all} value='2'></input>
							<input class="key" type='button' onClick={all} value='3'></input>
							<input class="key" type='button' onClick={call} value='/'></input>
						</div>
						<div class="keybox">
							<input type='button' onClick={all} class="key" value={'0'} style={{ width: '159px' }}></input>
							<input type='button' onClick={all} class="key" value={'.'}></input>
							<input type='button' onClick={eq} class="key red" value={'='}></input>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
