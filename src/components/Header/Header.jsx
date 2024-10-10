import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='max-w-[1150px] mx-auto py-3 flex justify-between items-center border-b-2'>
        
        <h1 className='font-extrabold text-3xl' >Knowledge Cafe</h1>
        <img src={profile} alt="" />

        </div>
    )
}

export default Header
