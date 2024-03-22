/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from './ServiceCard.module.scss'
import { useModal } from '../../../assets/services/ModalContext'

// eslint-disable-next-line no-unused-vars
const ServiceCard = ({
	title,
	description,
	price,
	imageUrl,
	serviceUrl,
	specialСondition
}) => {
	const { openModal } = useModal()

	const ServiceCardContainer = styled.div`
		background-image: url(${props => props.imageUrl});
	`
	return (
		<ServiceCardContainer
			loading='lazy'
			imageUrl={imageUrl}
			className={styles.serviceCard}
		>
			<div className={styles.staticContentBlur}>
				<div className={styles.staticContent}>
					<div className={styles.serviceCardTitle}>{title}</div>
					<div className={styles.serviceCardButton}>
						<Link to={serviceUrl}>{'ПОДРОБНЕЕ'}</Link>
					</div>
				</div>
				<div data-count={specialСondition} className={styles.hoverContent}>
					<div className={styles.hoverText}>
						<p className={styles.serviceCardDescription}>{description}</p>
						<p className={styles.serviceCardPrice}>{price}</p>
						<div
							className={styles.serviceCardButtonHover}
							onClick={() => openModal()}
						>
							<span>{'ОСТАВИТЬ ЗАЯВКУ'}</span>
						</div>
					</div>
				</div>
			</div>
		</ServiceCardContainer>
	)
}

export default ServiceCard
