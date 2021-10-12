import Nav from './components/Nav/Nav.jsx'
import Product from './components/Product/Product.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'

function App () {

  return (
    <Provider store={store}>
      <div className="App">
        <Nav/>
        <Product/>
      </div>
    </Provider>
  )
}

export default App

