import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu, closeMenu } from '../../redux/actions/menuActions.js'

const navLinks = ['Collection', 'Men', 'Women', 'About', 'Contact']

function Nav () {
	const menuState = useSelector(store => store.showMenu)
	const dispatch = useDispatch()
	
	const handleShowMenu = () => {
		if (menuState) dispatch(closeMenu())
		else dispatch(showMenu())
	}
	
	return (
		<nav className={styles.navbar}>

			<div className={styles.navigationContainer} >
				<div>
					<button className={styles.navButton} onClick={handleShowMenu}>
						<img src="assets/icon-menu.svg" alt="Menu"/>
					</button>
	
					<a href='#' className={styles.navLogo}>
						<img src='assets/logo.svg' alt="Company logo"/>
					</a>
				</div>
	
				<div className={`${menuState && styles.navigationOverlay}`}>
					<div className={`${styles.navigation} ${menuState && styles.showMenu}`}>
						{menuState && <button className={styles.navButton} onClick={handleShowMenu}>
							<img src="assets/icon-close.svg" alt="Close Menu"/>
						</button>}
						
						{navLinks.map(link => (
							<a href="#" key={link} className={styles.navLink}>{link}</a>
						))}
					</div>
				</div>
			</div>

			<div className={styles.navUserStatus} >
			  <button className={styles.cart}>
					<img src="assets/icon-cart.svg" alt="Icon of shopping cart"/>
				</button>
				<img src="assets/image-avatar.png" className={styles.avatar} alt="User"/>
			</div>

		</nav>
	)
}

export default Nav
