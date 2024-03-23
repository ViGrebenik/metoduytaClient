/* eslint-disable react/prop-types */
import { mockData } from '../../wraperPortfolio/mocData'
import Button from '../button/Button'
import SliderObject from '../popup/viewObject/sliderObject/SliderObject'
import styles from './PortfolioCart.module.scss'

const PortfolioCart = ({ onClosePopUP, check = false, objectID }) => {
	const { type, description, listWorks } = mockData.find(
		item => item.id === +objectID
	)
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
						<div className={styles.descriptionInfoObject}>{description}</div>
						<div className={styles.descriptionWorkBeenDone}>
							Тут какие работы были сделаны списком
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
							redirectTo={'/calculator'}
						/>
						<Button
							onClick={() => onClosePopUP()}
							title={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'}
							type='popUp'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCart
