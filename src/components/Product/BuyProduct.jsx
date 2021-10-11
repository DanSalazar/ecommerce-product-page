import { useState } from 'react'
import styles from './styles.module.css'

import Button from '../Button/Button.jsx'
import Cart from '../Icons/Cart.jsx'

function BuyProduct () {
	const [count, setCount] = useState(0)

	const handlePlus = () => {
		setCount(count + 1)
	}

	const handleMinus = () => {
		setCount(count - 1)
	}
	
	return (
		<div>
			<div className={styles.productCount} >
				<button onClick={handleMinus} >
					<img src="assets/icon-minus.svg" alt=""/>
				</button>
				<span>{count}</span>
				<button onClick={handlePlus} >
					<img src="assets/icon-plus.svg" alt=""/>
				</button>
			</div>
			<Button>
				<Cart fill={'#fff'}/>
				<span> Add to cart</span>
			</Button>
		</div>
	)
}

export default BuyProduct
