import { useEffect, useState, useRef } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { HiPlayPause } from 'react-icons/hi2'
import { BiReset } from 'react-icons/bi'
import Countdown from 'react-countdown'

import './App.css'

function App() {
	const [breakLength, setBreakLength] = useState(5)
	const [sessionLength, setSessionLength] = useState(25)
	const [timeLeft, setTimeLeft] = useState(25000)
	const [startPause, setStartPause] = useState(false)

	const clockRef = useRef()

	const increaseBreakLength = () => {
		if (breakLength < 59) setBreakLength((breakLength) => breakLength + 1)
	}
	const decreaseBreakLength = () => {
		if (breakLength > 0) setBreakLength((breakLength) => breakLength - 1)
	}

	const increaseSessionLength = () => {
		if (sessionLength < 59)
			setSessionLength((sessionLength) => sessionLength + 1)
	}
	const decreaseSessioniLength = () => {
		if (sessionLength > 0)
			setSessionLength((sessionLength) => sessionLength - 1)
	}
	const handleReset = () => {
		setStartPause(!startPause)
		setBreakLength(5)
		setSessionLength(25)
		if (startPause) {
			clockRef.current.start()
		} else {
			setTimeLeft(timeLeft)
			clockRef.current.pause()
		}
	}

	useEffect(() => {
		setTimeLeft(sessionLength * 1000)
	}, [sessionLength])

	useEffect(() => {
		if (startPause) {
			clockRef.current.start()
		} else {
			clockRef.current.pause()
		}
	}, [startPause])

	return (
		<div className='global_container'>
			<div>
				<h1>Clock Tool</h1>
				<div id='setting_clock'>
					<div className='setting_break_container'>
						<label id='break-label'>Break Length</label>
						<AiOutlineArrowDown
							id='break-decrement'
							className='button_action'
							onClick={decreaseBreakLength}
						/>
						<div id='break-length'>{breakLength}</div>
						<AiOutlineArrowUp
							id='break-increment'
							className='button_action'
							onClick={increaseBreakLength}
						/>
					</div>
					<div className='setting_session_container'>
						<label id='session-label'>Session Length</label>
						<AiOutlineArrowDown
							id='session-decrement'
							className='button_action'
							onClick={decreaseSessioniLength}
						/>
						<div id='session-length'>{sessionLength}</div>
						<AiOutlineArrowUp
							id='session-increment'
							className='button_action'
							onClick={increaseSessionLength}
						/>
					</div>
					<div className='session_state_display_container'>
						<label id='timer-label'>Session</label>
						<div id='time-left'>
							<Countdown
								ref={clockRef}
								date={Date.now() + timeLeft * 60}
							></Countdown>
						</div>
					</div>
					<div className='session_control_container'>
						<div id='reset'>
							<BiReset className='button_action' onClick={handleReset} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
