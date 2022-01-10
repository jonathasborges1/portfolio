import {AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
const Sidebar = () => {
    return(
        <div>
            <img className='w-32 h-32 mx-auto rounded-full' src="https://i.imgur.com/ZJUixSM.jpg" alt="user avatar" />
            <h3 className='my-4 text-3xl font-medium font-kaushan'>
                Jonathas
                <span className='tracking-wider text-green'> Borges  </span>  
                
            </h3>
            <p className='bg-gray-200'>Web Developer</p>
            <a href="" 
            className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200'>
                <GiTie className='w-6 h-6'/> Download Resume
            </a>
            
            {/* Social Icon */}
            <div className='flex justify-around my-5 text-green-500'>
                <a className='text-green-900' href="#">
                    <AiFillYoutube className='w-8 h-8 text-red-500 cursor-pointer'/>
                </a>
                <a className='' href="#">
                    <AiFillLinkedin className='w-8 h-8 text-blue-500 cursor-pointer' />
                </a>
                <a className='' href="">
                    <FaGithubAlt className='w-8 h-8 text-purple-500 cursor-pointer'/>
                </a>
            </div>

            {/* Address */}
            <div className='py-4 my-5 bg-gray-200 '>
                
                <div className='flex justify-center space-x-2'>
                    <GoLocation />
                    <span>Brasil,Manaus</span>
                </div>

                <div className='flex justify-center space-x-2'>
                    <MdOutlineMarkEmailUnread />  
                    <span> borgesux@gmail.com </span>
                </div>
                
            
            </div>

            {/* Email Button */}
            <button 
            className='w-8/12 px-5 py-2 rounded-full bg-gradient-to-r from-green to-blue-400'
            onClick={() => window.open('mailto:borgesux@gmail.com')}
            > Enviar Email </button>

        </div>
    )
}

export default Sidebar