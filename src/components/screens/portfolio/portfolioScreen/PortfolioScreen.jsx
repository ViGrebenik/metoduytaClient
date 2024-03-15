import CoverServices from '../../services/coverServices/CoverServices'

const PortfolioScreen = () => {
	return (
		<>
			<CoverServices
				title={'ПОРТФОЛИО'}
				// subtitle={'БОЛЬШАЯ ЧАСТЬ РАБОТ ЗА ПОСЛЕДНЕЕ ВРЕМЯ'}
				portfolioPage={true}
			/>
		</>
	)
}

export default PortfolioScreen
