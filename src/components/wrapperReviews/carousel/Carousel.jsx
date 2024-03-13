/* eslint-disable react/prop-types */
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import './Carousel.scss'

const Carousel = ({ items }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: isMobile ? 1 : 3,
		slidesToScroll: 1,
		waitForAnimate: true
	}

	return (
		<div className='carouselReviews'>
			<Slider {...settings}>
				{items.map((item, index) => (
					<div key={index} className='carouselItemReviews'>
						<div className='carouselTitle'>такой-то такой</div>
						<div className='carouselDescriptionReviews'>{item}</div>
						<div className='carouselblock'></div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Carousel
