// import {Link} from "react-dom"

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 py-4 bg-gray-800'>
            
            <div className="text-4xl font-bold text-white logo">Hii📧</div>
            
            <ul className='flex justify-center gap-12 pt-3 pr-20 text-base font-bold text-gray-400 '>
                <a className="hover:text-lime-400 " href='/'><li>Blog</li></a>
                <a className="hover:text-lime-400 " href='/'><li>Courses</li></a>
                <a className="hover:text-lime-400 " href='/'><li>Discord</li></a>
                <a className="hover:text-lime-400 " href='/'><li>Chats</li></a>
                <a className="hover:text-lime-400 " href='/'><li>Calls</li></a>
                <a className="hover:text-lime-400 " href='/'><li>Workshops</li></a>
                <a className="hover:text-lime-400 " href='/'><li>About</li></a>
            </ul>
            
        </nav>
    )
}

export default Navbar