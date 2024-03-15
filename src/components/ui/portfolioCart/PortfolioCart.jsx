import Button from '../button/Button'
import SliderObject from '../popup/viewObject/sliderObject/SliderObject'
import styles from './PortfolioCart.module.scss'

// eslint-disable-next-line react/prop-types
const PortfolioCart = ({ onClosePopUP = null, check = false }) => {
	return (
		<div className={`${styles.modalContent} ${check ? styles.check : ''}`}>
			{onClosePopUP && (
				<span className={styles.close} onClick={onClosePopUP}>
					&times;
				</span>
			)}
			<div className={styles.containerObject}>
				<SliderObject />
				<div className={styles.objectDescription}>
					<div className={styles.descriptionItem}>
						<div className={styles.descriptionTitle}>
							<p>Тут какой ремонт</p>
						</div>
						<div className={styles.descriptionInfoObject}>
							Тут данные о обьекте
						</div>
						<div className={styles.descriptionWorkBeenDone}>
							Тут какие работы были сделаны списком
							<br />
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
							magnam recusandae doloremque! Minima odio numquam quae, autem
							iste, omnis vitae dolorem perspiciatis officiis iusto est,
							repudiandae reiciendis debitis corrupti distinctio!
						</div>
					</div>
					<div className={styles.descriptionContainerButton}>
						<Button
							title={'РАССЧИТАТЬ СВОЮ СМЕТУ'}
							redirectTo={'/calculator'}
						/>
						<Button title={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'} type='popUp' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCart
