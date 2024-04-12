import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../../ui/breadCrumbs/BreadCrumbs'
import styles from './Policy.module.scss'
import { policyText } from './dataText.policy'
const Policy = () => {
	const location = useLocation()
	const currentPath = location.pathname
	return (
		<section>
			<div className={styles.sectionPolicy}>
				<div className={styles.container}>
					<div className={styles.containerPolicy}>
						<div className={styles.containerBreadCrumbs}>
							<Breadcrumbs
								breadcrumbs={[
									{ name: 'Главная', url: '/' },
									{ name: 'Политика конфиденциальности', url: currentPath }
								]}
							/>
						</div>
						<div className={styles.policyTitle}>
							ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
						</div>
						<div className={styles.policyText}>
							<p>1. {policyText[1].title}</p>
							<ul>
								<li>1.1 {policyText[1].points[1.1]}</li>
								<li>1.2 {policyText[1].points[1.2]}</li>
							</ul>
						</div>
						<div className={styles.policyText}>
							<p>2. {policyText[2].title}</p>
							<ul>
								<li>2.1 {policyText[2].points['2.1']}</li>
								<li>2.2 {policyText[2].points['2.2']}</li>
								<li>2.3 {policyText[2].points['2.3']}</li>
								<li>2.4 {policyText[2].points['2.4']}</li>
								<li>2.5 {policyText[2].points['2.5']}</li>
								<li>2.6 {policyText[2].points['2.6']}</li>
								<li>2.7 {policyText[2].points['2.7']}</li>
								<li>2.8 {policyText[2].points['2.8']}</li>
								<li>2.9 {policyText[2].points['2.9']}</li>
								<li>2.10 {policyText[2].points['2.11']}</li>
								<li>2.11 {policyText[2].points['2.12']}</li>
								<li>2.12 {policyText[2].points['2.13']}</li>
								<li>2.13 {policyText[2].points['2.14']}</li>
							</ul>
						</div>
						<div className={styles.policyText}>
							<p>3. {policyText[3].title}</p>
							<ul>
								<li>3.1 {policyText[3].points['3.1']}</li>
								<li>3.2 {policyText[3].points['3.2']}</li>
								<li>3.3 {policyText[3].points['3.3']}</li>
								<li>3.4 {policyText[3].points['3.4']}</li>
								<li>3.5 {policyText[3].points['3.5']}</li>
							</ul>
						</div>
						<div className={styles.policyText}>
							<p>4. {policyText[4].title}</p>
							<ul>
								<li>4.1 {policyText[4].points['4.1']}</li>
								<li>4.2 {policyText[4].points['4.2']}</li>
								<li>4.3 {policyText[4].points['4.3']}</li>
							</ul>
						</div>
						<div className={styles.policyText}>
							<p>5. {policyText[5].title}</p>
							<ul>
								<li>5.1 {policyText[5].points['5.1']}</li>
								<li>5.2 {policyText[5].points['5.2']}</li>
							</ul>
						</div>
						<div className={styles.policyText}>
							<p>6. {policyText[6].title}</p>
							<ul>
								<li>6.1 {policyText[6].points['6.1']}</li>
								<li>6.2 {policyText[6].points['6.2']}</li>
								<li>6.3 {policyText[6].points['6.3']}</li>
								<li>6.4 {policyText[6].points['6.4']}</li>
								<li>6.5 {policyText[6].points['6.5']}</li>
							</ul>
						</div>
						<div className={styles.policyText}>
							<p>7. {policyText[7].title}</p>
							<ul>
								<li>7.1 {policyText[7].points['7.1']}</li>
								<li>7.2 {policyText[7].points['7.2']}</li>
							</ul>
						</div>
						<div className={styles.policyText}>
							<p>8. {policyText[8].title}</p>
							<ul>
								<li>8.1 {policyText[8].points['8.1']}</li>
								<li>8.2 {policyText[8].points['8.2']}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Policy
