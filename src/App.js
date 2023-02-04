import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { HiPlayPause } from 'react-icons/hi2'
import { BiReset } from 'react-icons/bi'
import { useState } from 'react'
import moment from 'moment'

import './App.css'

function App() {
	const [breakLength, setBreakLength] = useState(5)
	const [sessionLength, setSessionLength] = useState(25)
	const [timeLeft, setTimeLeft] = useState(0)
	return (
		<div className='global_container'>
			<div>
				<h1>Clock Tool</h1>
				<div id='setting_clock'>
					<div className='setting_break_container'>
						<label id='break-label'>Break Length</label>
						<AiOutlineArrowDown id='break-decrement' />
						<div id='break-length'>{breakLength}</div>
						<AiOutlineArrowUp id='break-increment' />
					</div>
					<div className='setting_session_container'>
						<label id='session-label'>Session Length</label>
						<AiOutlineArrowDown id='session-decrement' />
						<div id='session-length'>{sessionLength}</div>
						<AiOutlineArrowUp id='session-increment' />
					</div>
					<div className='session_state_display_container'>
						<label id='timer-label'>Session</label>
						<div id='time-left'>{moment(timeLeft * 1000).format('mm:ss')}</div>
					</div>
					<div className='session_control_container'>
						<div id='start_stop'>
							<HiPlayPause />
						</div>
						<div id='reset'>
							<BiReset />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
