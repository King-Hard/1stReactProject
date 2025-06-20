import {Link} from 'react-router-dom'
import HeaderItem from './HeaderItem'
import MainLogo from '../../assets/Images/MainLogo.png'
import ironman from '../../assets/Images/ironman.jpg'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from 'react-icons/hi2'
import {HiPlus, HiDotsVertical} from 'react-icons/hi'

const Header = () => {
  const menu = [
    {name: "Home", icon: HiHome},
    {name: "Search", icon: HiMagnifyingGlass},
    {name: "Watch List", icon: HiPlus},
    {name: "Originals", icon: HiStar},
    {name: "Movies", icon: HiPlayCircle},
    {name: "Series", icon: HiTv}
  ]

  return (
    <div className='flex border justify-between rounded rounded-b-lg p-5 text-lg text-center'>
      <div>
        <img src={MainLogo} className='w-[80px] md:w-[115px] object-cover'/>
      </div>
      <div className='flex gap-7'>
        {menu.map((item, index) =>(
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
      </div >
      <div>
        <img src={ironman} className='object-cover w-[40px] rounded-full'/>
      </div>
    </div>
  )
}

export default Header