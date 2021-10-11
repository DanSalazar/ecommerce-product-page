import styles from './styles.module.css'

function Button ({ children, onClick }) {
	return (
		<button className={styles.button} >
			{ children }
		</button>
	)
}

export default Button
