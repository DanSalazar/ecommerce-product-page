import { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'

import Cart from '../Icons/Cart.jsx'
import ShopCart from './ShopCart.jsx'

function UserNav () {
  const [showCart, setShowCart] = useState(false)
  const cart = useSelector(store => store.cart)

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className={styles.navUserStatus} >
      <button className={styles.cart} onClick={handleShowCart}>
        {cart.quantity > 0 && <div className={styles.cartNotification}>
          <span>{cart.quantity}</span>
        </div>}
  
        <Cart fill={'#1d2025'}/>
      </button>
      
      <img src='assets/image-avatar.png' className={styles.avatar} alt='User'/>
    
      {showCart && <ShopCart product={cart}/>}
    </div>
  )
}

export default UserNav
