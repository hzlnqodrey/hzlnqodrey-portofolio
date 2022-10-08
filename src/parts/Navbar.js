import { useScrollPosition } from '../hooks/useScrollPosition';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  
  function changeSidebar(){
    const burger1 = document.querySelector('.burger1');
    const burger2 = document.querySelector('.burger2');
    const sidebar = document.querySelector('.sidebar');
    
    burger1.classList.toggle('change')
    burger2.classList.toggle('change')
    sidebar.classList.toggle('change')
  }

  function classNames(...classes){
    return classes.filter(Boolean).join(' ');
  }
  
  const scrollPosition = useScrollPosition();

  const location = useLocation();

  console.log(location.pathname);
  
  return (   
    <>
      <nav id="nav" className={classNames(
        scrollPosition < 100 && location.pathname === '/' ? 'text-white ' : 'bg-white text-black shadow',
        'w-full fixed top-0 z-30 transition'
      )}>
        <div className="flex flex-row justify-between px-10 lg:px-20 py-5">
          {/* logo */}
          <img src="./images/logo-tedi-white.svg" alt="logo tedi" className={classNames(
            scrollPosition < 100 && location.pathname === '/' ? '' : 'hidden'
          )} />
          <img src="./images/logo-tedi.svg" alt="logo tedi" className={classNames(
            scrollPosition >= 100 && location.pathname === '/' ? '' : 'hidden'
          )} />
          <img src="./images/logo-tedi.svg" alt="logo tedi" className={classNames(
             location.pathname !== '/' ? '' : 'hidden'
          )} />

          {/* burger btn */}
          <div onClick={changeSidebar} className={classNames(
            scrollPosition < 100 && location.pathname === '/' ? '' : 'hidden',
            'burger1 lg:hidden z-50'
          )}>
            <div className="bar1 bg-white"></div>
            <div className="bar2 bg-white"></div>
            <div className="bar3 bg-white"></div>
          </div>

          <div onClick={changeSidebar} className={classNames(
            scrollPosition >= 100 && location.pathname === '/' ? '' : 'hidden',
            'burger2 lg:hidden z-50'
          )}>
            <div className="bar1 bg-blue1"></div>
            <div className="bar2 bg-blue1"></div>
            <div className="bar3 bg-blue1"></div>
          </div>

          <div onClick={changeSidebar} className={classNames(
            location.pathname !== '/' ? '' : 'hidden',
            'burger2 lg:hidden z-50'
          )}>
            <div className="bar1 bg-blue1"></div>
            <div className="bar2 bg-blue1"></div>
            <div className="bar3 bg-blue1"></div>
          </div>
          
          {/* sidebar mobile */}
          <ul className="sidebar lg:hidden bg-white text-black shadow fixed flex flex-col justify-start items top-0 bottom-0 -right-80 w-80 z-30 px-5 font-bold hover:text-blue" id="navUl">
            <li className="py-4 mt-20"><NavLink to="" className="mr-5">Beranda</NavLink></li>
            <li className="py-4"><NavLink to="about" className="mr-5">Tentang Kami</NavLink></li>
            <li className="py-4"><NavLink to="feature" className="mr-5">Fitur</NavLink></li>
            <li className="py-4"><NavLink to="blog" className="mr-5">Blog</NavLink></li>
            <li className="py-4"><NavLink to="" className="bg-blue1 text-white rounded-full py-2 px-5">Unduh Versi Beta</NavLink></li>
          </ul>
          {/* responsive < laptop */}
          <ul className="hidden lg:flex items-center">
            <li><NavLink to="" className={classNames(
              scrollPosition >= 0 && scrollPosition < 700 ? 'font-bold' : 'font-normal',
              'mr-5'
            )}>Beranda</NavLink></li>
            <li><NavLink to="about" className={classNames(
              scrollPosition >= 700 && scrollPosition < 1400 ? 'font-bold' : 'font-normal',
              'mr-5'
            )}>Tentang Kami</NavLink></li>
            <li><NavLink to="feature" className={classNames(
              scrollPosition >= 1400 && scrollPosition < 3000 ? 'font-bold' : 'font-normal',
              'mr-5'
            )}>Fitur</NavLink></li>
            <li><NavLink to="blog" className={classNames(
              scrollPosition >= 3000 && scrollPosition < 3700 ? 'font-bold' : 'font-normal',
              'mr-5'
            )}>Blog</NavLink></li>
            {/* <li><a href="https://linktr.ee/tedi.temandisabilitas" className={classNames(
              scrollPosition < 100 ? 'bg-white text-blue1' : 'bg-blue1 text-white',
              'rounded p-2 transition'
            )}>Unduh Versi Beta</a></li> */}
            <li><a href="https://linktr.ee/tedi.temandisabilitas" className="rounded p-2 transition bg-blue3 text-blue1">
              Unduh Versi Beta
            </a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;