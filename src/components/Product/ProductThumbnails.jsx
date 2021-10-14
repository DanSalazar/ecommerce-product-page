import styles from './styles.module.css'

const THUMBNAIL_LIST = [1, 2, 3, 4]

function ProductThumbnails ({ selected, setSelected }) {
  
  const handleSelected = (n) => {
    setSelected(n)
  }
  
  return (
    <div className={styles.productThumbnails}>
      {THUMBNAIL_LIST.map(n => (
        <button 
          className={`${styles.productThumbnail} ${selected === n && styles.selected}`} 
          onClick={() => handleSelected(n)}
          key={n}>
          <img src={`images/image-product-${n}-thumbnail.jpg`} alt='Image of shoes'/>
        </button>
      ))}
    </div>
  )
}

export default ProductThumbnails
