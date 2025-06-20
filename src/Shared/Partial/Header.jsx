import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div className='flex justify-between border rounded rounded-b-lg p-5'>
      <div>
        <h1>Header</h1>
      </div>
      <div className='flex gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header