/* eslint-disable react/prop-types */
import Slider from 'react-slick'
// import ArrowTeam from './ArrowTeam'
import { useMediaQuery } from 'react-responsive'
import './Carousel.scss'

const CarouselTeam = ({ items }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: isMobile ? 1 : 4,
		slidesToScroll: 1,
		waitForAnimate: true
	}
	console.log(items)
	return (
		<div className='carouselTeam'>
			<Slider {...settings}>
				{items.map((item, index) => (
					<div
						key={index}
						className='carouselItemTeam'
						style={{ backgroundImage: `url(${item.backgroundUrl})` }}
					>
						<div className='carouselDescription'>
							<div className='item'>
								{item.post}
								<br />

								<span>{item.name}</span>
								<br />
								<span>{item.discription}</span>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default CarouselTeam
