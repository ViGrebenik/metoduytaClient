/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from '../../../assets/services/ModalContext'
import styles from './Button.module.scss'

const Button = ({
	title,
	fontSize,
	bgC,
	redirectTo = '/',
	type = 'redirect',
	arrow = false,
	pd,
	active
}) => {
	const CustomButton = styled.div`
		font-size: ${props => props.fontSize || 'clamp(10px, 2vw, 14px)'};
		background-color: ${props => props.bgC || '#ffd622'};
		padding: ${props => props.pd || '10px 20px'};
		${props => props.className && ` ${props.className}`};
	`

	const { openModal } = useModal()
	const typeActive = active ? active : openModal

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
						onClick={() => typeActive()}
					>
						{arrow && (
							<img src='/static/arrow.svg' alt='arrow' className='arrow' />
						)}
						{title}
					</CustomButton>
				</div>
			)}
		</>
	)
}

export default Button
