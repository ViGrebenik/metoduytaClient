// import React, { Component } from 'react'
import Slider from 'react-slick'
import './SliderObject.scss'

const SliderObject = () => {
	const baseUrl = '/static/archive'
	const settings = {
		customPaging: function (i) {
			return (
				<a>
					<img src={`${baseUrl}/item0${i + 1}.jpg`} />
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
				<div>
					<img src={baseUrl + '/item01.jpg'} />
				</div>
				<div>
					<img src={baseUrl + '/item02.jpg'} />
				</div>
				<div>
					<img src={baseUrl + '/item03.jpg'} />
				</div>
				<div>
					<img src={baseUrl + '/item04.jpg'} />
				</div>
			</Slider>
		</div>
	)
}

export default SliderObject
