import styles from './styles.module.css'

import { deleteAllProducts } from '../../redux/actions/shoppingCartActions.js'
import { useDispatch } from 'react-redux'

import Button from '../Button/Button.jsx'
import DeleteIcon from '../Icons/DeleteIcon.jsx'

function ProductInCart ({ product }) {
  const dispatch = useDispatch()

  const deleteProducts = () => {
    dispatch(deleteAllProducts())
  }

  return (
    <div className={styles.productInCart}>
      <div className={styles.productInCartInfo}>
        <div className={styles.productInCartThumbnail}>
          <img src='assets/image-product-1.jpg' alt='Image of product'/>
        </div>
        <div className={styles.productInCartPrice}>
          <h4>{product.productName}</h4>
          <span>${product.price}.00 x {product.quantity}</span>
          <p>${product.price * product.quantity}.00</p>
        </div>
        <button className={styles.buttonDelete} onClick={deleteProducts}>
          <DeleteIcon/>
        </button>
      </div>
      <Button>Checkout</Button>
    </div>
  )
}

export default ProductInCart
