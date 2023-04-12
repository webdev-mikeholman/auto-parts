import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import './Slider.scss'
import { useState } from 'react'

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 3 : prev => prev - 1)
	}

	const nextSlide = () => {
		setCurrentSlide(currentSlide === 3 ? 0 : next => next + 1)
	}

	const data = ['/assets/images/parts/battery.jpg', '/assets/images/parts/brakes.jpg', '/assets/images/parts/oil.jpg', '/assets/images/parts/wipers.jpg']
	return (
		<div className="slider">
			<div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{'// @TODO: change to map '}
				<img src={data[0]} alt="part 1" />
				<img src={data[1]} alt="part 2" />
				<img src={data[2]} alt="part 3" />
				<img src={data[3]} alt="part 4" />
			</div>
			<div className="icons">
				<div className="icon" onClick={prevSlide}>
					<NavigateBeforeIcon />
				</div>
				<div className="icon" onClick={nextSlide}>
					<NavigateNextIcon />
				</div>
			</div>
		</div>
	)
}

export default Slider
