/* eslint-disable react/prop-types */
const ArrowTeam = props => {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	)
}

export default ArrowTeam
