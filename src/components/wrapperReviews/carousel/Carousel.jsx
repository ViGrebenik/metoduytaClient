/* eslint-disable react/prop-types */
import Slider from 'react-slick'
import Arrow from './Arrow'
import './Carousel.scss'

const Carousel = ({ items }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		waitForAnimate: true,
		nextArrow: <Arrow className={'leftButton'} />,
		prevArrow: <Arrow className={'rightButton'} />
	}

	return (
		<div className='carousel'>
			<Slider {...settings}>
				{items.map((item, index) => (
					<div key={index} className='carousel-item'>
						<div className='carouselTitle'>ОТЗЫВЫ</div>
						<div className='carouselDescription'>{item}</div>
						<div className='carouselblock'></div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Carousel
