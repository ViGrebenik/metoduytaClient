/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from './Button.module.scss'
import { useModal } from '../../../assets/services/ModalContext'

const Button = ({
	title,
	fontSize,
	bgC,
	redirectTo = '/',
	type = 'redirect',
	arrow = false,
	pd
}) => {
	const CustomButton = styled.div`
		font-size: ${props => props.fontSize || 'clamp(12px, 15px, 25px)'};
		background-color: ${props => props.bgC || '#ffd622'};
		padding: ${props => props.pd || '10px 20px'};
		${props => props.className && ` ${props.className}`};
	`

	const { openModal } = useModal()

	return (
		<>
			{type === 'redirect' ? (
				<div className={styles.containerButtonPortfolio}>
					<CustomButton
						fontSize={fontSize}
						bgC={bgC}
						pd={pd}
						className={styles.button}
					>
						<Link to={redirectTo}>
							<span>{title}</span>
						</Link>
					</CustomButton>
				</div>
			) : (
				<div className={styles.containerButtonPortfolio}>
					<CustomButton
						fontSize={fontSize}
						bgC={bgC}
						pd={pd}
						className={styles.button}
						onClick={() => openModal()}
					>
						{arrow && <img src='/static/arrow.svg' alt='arrow' />}
						<span>{title}</span>
					</CustomButton>
				</div>
			)}
		</>
	)
}

export default Button
