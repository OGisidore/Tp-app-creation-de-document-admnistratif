import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <div className=" w-full flex flex-col items-center">
      <div className="gradient"/>
      <div className=" w-full xl:w-[65%] content flex justify-center">
         <App/>
      </div>
     
    </div>
    
  </Provider>
)
