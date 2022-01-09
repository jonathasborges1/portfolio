import {FunctionComponent,useEffect,useState} from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem: FunctionComponent <{
    activeItem: string
    setActiveItem: Function
    name: string
    route: string
}> = ({activeItem, name, route, setActiveItem}) => {
    return activeItem !== name ? (
        <Link href={route}>
            <a>
                <span className='hover:text-green' onClick={() => setActiveItem(name)}>{name}</span>
            </a>
        </Link>
    ) : null
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    const {pathname} = useRouter()

    useEffect( () => {
        if(pathname === '/') setActiveItem('about')
        if(pathname === '/projects') setActiveItem('Projects')
        if(pathname === '/resume') setActiveItem('Resume')

    }, [] )

    return(
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl' > {activeItem} </span>
            <div className='flex space-x-5 text-lg text-red-400'>
                <NavItem 
                    activeItem={activeItem} 
                    setActiveItem={setActiveItem} 
                    name={'Sobre'} 
                    route={'/'}
                />

                <NavItem 
                    activeItem={activeItem} 
                    setActiveItem={setActiveItem} 
                    name={'Projetos'} 
                    route={'/projects'}
                />
                
                <NavItem 
                    activeItem={activeItem} 
                    setActiveItem={setActiveItem} 
                    name={'Resumo'} 
                    route={'/resume'}
                />
            </div>
        </div>
    )
}

export default Navbar