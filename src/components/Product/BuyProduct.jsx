import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'

import { addProduct } from '../../redux/actions/shoppingCartActions.js'

import Button from '../Button/Button.jsx'
import Cart from '../Icons/Cart.jsx'

function BuyProduct () {
	const [count, setCount] = useState(0)
	const dispatch = useDispatch()

	const handlePlus = () => {
		setCount(count + 1)
	}

	const handleMinus = () => {
		if (count > 0) setCount(count - 1)
	}
	
	const buyProduct = () => {
		const product = {
			quantity: count,
			productName: 'Fall Limited Edition Sneakers',
			price: 125
		}
		
		dispatch(addProduct(product))
		setCount(0)
	}
	
	return (
		<div className={styles.buyProductContainer}>
			<div className={styles.productCount} >
				<button onClick={handleMinus} >
					<img src='images/icon-minus.svg' alt='-'/>
				</button>
				<span>{count}</span>
				<button onClick={handlePlus} >
					<img src='images/icon-plus.svg' alt='+'/>
				</button>
			</div>
			<Button onClick={buyProduct}>
				<Cart fill={'#fff'}/>
				<span> Add to cart</span>
			</Button>
		</div>
	)
}

export default BuyProduct
