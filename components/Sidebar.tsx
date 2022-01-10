import {AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import { useTheme } from "next-themes";
const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    return(
        <div>
            <img 
                className='w-32 h-32 mx-auto rounded-full' 
                src="https://i.imgur.com/ZJUixSM.jpg" 
                alt="user avatar" 
            />

            <h3 className='my-4 text-3xl font-medium font-kaushan'>
                Jonathas
                <span className='tracking-wider text-green'> Borges  </span>  
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>Web Developer</p>
            {/* Resumo */}
            <a className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500' 
                href="">

                <GiTie className='w-6 h-6'/> Download Resume
            </a>
            
            {/* Social Icon */}
            <div className='flex justify-around my-5 text-green-500'>
                <a className='text-green-900' href="https://www.youtube.com/channel/UCog-arPBzlDRaQHedEpen6g">
                    <AiFillYoutube className='w-8 h-8 text-red-500 cursor-pointer'/>
                </a>
                <a className='' href="https://www.linkedin.com/in/jonathascavalcante/">
                    <AiFillLinkedin className='w-8 h-8 text-blue-500 cursor-pointer' />
                </a>
                <a className='' href="https://github.com/jonathasborges1">
                    <FaGithubAlt className='w-8 h-8 text-purple-500 cursor-pointer'/>
                </a>
            </div>

            {/* Contato */}
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'>
                
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
            <button
                onClick={changeTheme}
                className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
            >
                {/* //TODO remove bg black */}
                Toggle Theme
            </button>            

        </div>
    )
}

export default Sidebar