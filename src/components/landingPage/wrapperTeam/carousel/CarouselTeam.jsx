/* eslint-disable react/prop-types */
import Slider from 'react-slick'
import ArrowTeam from './ArrowTeam'
import './Carousel.scss'

const CarouselTeam = ({ items }) => {
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		waitForAnimate: true,
		nextArrow: <ArrowTeam className={'leftButton'} />,
		prevArrow: <ArrowTeam className={'rightButton'} />
	}

	return (
		<div className='carousel'>
			<Slider {...settings}>
				{items.map((item, index) => (
					<div key={index} className='carousel-itemTeam'>
						<div className='carouselTitle'>ОТЗЫВЫ</div>
						<div className='carouselDescription'>{item}</div>
						<div
							className={`carouselblock ${index === 1 ? 'middle-card' : ''}`}
						></div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default CarouselTeam
