/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ScrollToTop from '../../ui/linkScrollTo/ScrollToTop'
import CallRequestForm from '../../ui/popup/CallRequestForm'
import styles from './ServiceCard.module.scss'
import useModal from '../../ui/useModal/useModal'

// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ title, description, price, imageUrl, serviceUrl }) => {
	const scrollToTop = ScrollToTop()
	const { isModalOpen, openModal, closeModal } = useModal()

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
						<Link to={serviceUrl} onClick={scrollToTop}>
							{'ПОДРОБНЕЕ'}
						</Link>
					</div>
				</div>
				<div className={styles.hoverContent}>
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
			{isModalOpen && <CallRequestForm onClose={closeModal} />}
		</ServiceCardContainer>
	)
}

export default ServiceCard
