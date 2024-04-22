/* eslint-disable react/prop-types */
import Slider from 'react-slick'
// import ArrowTeam from './ArrowTeam'
import { useMediaQuery } from 'react-responsive'
import './Carousel.scss'

const CarouselTeam = ({ items }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const reorderedItems = isMobile
		? [items[1], items[0], ...items.slice(2)]
		: items
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: isMobile ? 1 : 4,
		slidesToScroll: 1,
		waitForAnimate: true
	}
	return (
		<div className='carouselTeam'>
			<Slider {...settings}>
				{reorderedItems.map((item, index) => (
					<div key={index} className='carouselItemTeam'>
						<div className='carouselDescription'>
							<img src={item.backgroundUrl} alt='' />
							<div className='item'>
								{item.name}
								<br />

								<span>{item.post}</span>
								<br />
								<span className='t2'>{item.discription}</span>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default CarouselTeam
