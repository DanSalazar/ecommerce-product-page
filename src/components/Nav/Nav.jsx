import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu, closeMenu } from '../../redux/actions/menuActions.js'

import UserNav from './UserNav.jsx'
import CloseIcon from '../Icons/CloseIcon'

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

			<div className={styles.navigationContainer}>
			
				<div>
					<button className={styles.navButton} onClick={handleShowMenu}>
						<img src='images/icon-menu.svg' alt='Menu'/>
					</button>
	
					<a href='#' className={styles.navLogo}>
						<img src='images/logo.svg' alt='Company logo'/>
					</a>
				</div>
	
				<div className={`${menuState && styles.navigationOverlay}`}/>
				<div className={`${styles.navigation} ${menuState && styles.showMenu}`}>
					{menuState && 
            <button className={styles.navButton} onClick={handleShowMenu}>
              <CloseIcon/>
            </button>}
						
					{navLinks.map(link => (
						<div className={styles.navLinkContainer} key={link}>
							<a href='#' className={styles.navLink}>{link}</a>
						</div>
					))}
				</div>
			</div>
			
			<UserNav/>

		</nav>
	)
}

export default Nav
