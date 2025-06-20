import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className='space-y-2'>
            <div>
                <p className='text-center text-7xl font-semibold'>404</p>
            </div>
            <div className='text-3xl'>
                <span>File not found! Back to </span>
                <Link className='text-blue-700 hover:underline' to='/'>Home Page</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound