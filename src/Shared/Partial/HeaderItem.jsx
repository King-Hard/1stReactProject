const HeaderItem = ({name, Icon}) => {
  return (
    <div className='flex gap-1 items-center cursor-pointer hover:scale-105 transition-all duration-300'>
        <Icon/>
        <h1>{name}</h1>
    </div>
  )
}

export default HeaderItem