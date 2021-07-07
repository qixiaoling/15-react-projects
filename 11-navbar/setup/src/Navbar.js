import React, {useState, useRef, useEffect} from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'
import {links, social} from './data'
import logo from './logo.svg'

const Navbar = () => {
    const [showLink, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null)


    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect();
        // console.log(linksHeight);
        if(showLink){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }else{
            linksContainerRef.current.style.height ='0px'
        }
    },[])
    //dont forget to write CSS file, line 207, let the height of the lins-container be auto when in bigger screen,
    //otherwise the height is already set to 0 in bigger screen as we just coded, as a result, you won't be able to see
    // any menu on the top of the page when bigger screen.
    //you also must have a parent container, otherwise the hight is 0.
    return <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt='logo'/>
                <button className='nav-toggle' onClick={() => setShowLinks(!showLink)}>
                    <FaBars/>
                </button>
            </div>

            <div className='links-container' ref={linksContainerRef}>
                {/*<div className={`${showLinks ?'links-container show container' : 'links-container'}`}>*/}//这样很平滑，
                //但不能根据菜单长短自己变更 所以总是height: 10rem 有可能最后一个项目就看不到。
                <ul className='links' ref={linksRef}>
                    {links.map((link) => {
                        const {id, url, text} = link;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <ul className='social-icons'>
                {social.map((socialIcon) => {
                    const {id, url, icon} = socialIcon;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
}

export default Navbar
