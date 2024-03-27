/* eslint-disable react/prop-types */
import { useCallback } from 'react'
import { useModal } from '../../../assets/services/ModalContext'
import { mockData } from '../../wraperPortfolio/mocData'
import Button from '../button/Button'
import SliderObject from '../popup/viewObject/sliderObject/SliderObject'
import styles from './PortfolioCart.module.scss'

const PortfolioCart = ({ onClosePopUP, check = false, objectID }) => {
	const { type, description, listWorks } = mockData.find(
		item => item.id === +objectID
	)
	const { openModal } = useModal()
	const typeModal = 'calculator'

	const active = useCallback(() => {
		openModal(typeModal)
	}, [openModal])

	return (
		<div className={`${styles.modalContent} ${check ? styles.check : ''}`}>
			{onClosePopUP && (
				<span className={styles.close} onClick={onClosePopUP}>
					&times;
				</span>
			)}
			<div className={styles.containerObject}>
				<SliderObject objectID={objectID} />
				<div className={styles.objectDescription}>
					<div className={styles.descriptionItem}>
						<div className={styles.descriptionTitle}>
							<p>{type}</p>
						</div>
						<div className={styles.descriptionInfoObject}>Тип квартиры</div>
						<br />
						<div className={styles.descriptionInfoObject}>{description}</div>
						<div className={styles.descriptionWorkBeenDone}>
							<br />
							<ul>
								{listWorks.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>
					<div className={styles.descriptionContainerButton}>
						<Button
							title={'РАССЧИТАТЬ СВОЮ СМЕТУ'}
							type='popUp'
							active={active}
						/>
						<Button title={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'} type='popUp' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCart
