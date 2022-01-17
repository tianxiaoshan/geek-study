import ReactDOM from 'react-dom'
import App from './App'
import store from '@/store'
import { Provider } from 'react-redux'

// 导入通用样式
import '@scss/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
