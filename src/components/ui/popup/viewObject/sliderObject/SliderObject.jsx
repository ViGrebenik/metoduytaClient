/* eslint-disable react/prop-types */
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import Slider from 'react-slick'
import { mockData } from '../../../../wraperPortfolio/mocData'
import './SliderObject.scss'

const SliderObject = ({ objectID }) => {
	const { photos, id } = mockData.find(item => item.id === +objectID)
	const baseUrl = `/static/archive/MocPortfolio/object_0${id}`
	const settings = {
		customPaging: function (i) {
			return (
				<a>
					<img src={`${baseUrl}/item_0${i + 1}.jpeg`} />
				</a>
			)
		},
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{photos.map((item, index) => (
					<div key={index}>
						<img src={item} alt={`Image ${index}`} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SliderObject
