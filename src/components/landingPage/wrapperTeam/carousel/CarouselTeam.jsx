/* eslint-disable react/prop-types */
import Slider from 'react-slick'
import ArrowTeam from './ArrowTeam'
import './Carousel.scss'

const CarouselTeam = ({ items }) => {
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		waitForAnimate: true,
		nextArrow: <ArrowTeam className={'leftButton'} />,
		prevArrow: <ArrowTeam className={'rightButton'} />
	}

	return (
		<div className='carouselTeam'>
			<Slider {...settings}>
				{items.map((item, index) => (
					<div key={index} className='carouselItemTeam '>
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
