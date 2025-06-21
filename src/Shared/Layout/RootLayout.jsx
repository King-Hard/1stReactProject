import {Outlet} from 'react-router-dom'
import Header from '../Partial/Header'

const RootLayout = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootLayout