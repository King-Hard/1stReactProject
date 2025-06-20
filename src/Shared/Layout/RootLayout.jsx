import {Outlet} from 'react-router-dom'
import Header from '../Partial/Header'

const RootLayout = () => {
  return (
    <>
      <Header />
        <Outlet />
    
    </>
  )
}

export default RootLayout