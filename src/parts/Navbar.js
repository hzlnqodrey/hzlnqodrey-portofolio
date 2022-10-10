import { useScrollPosition } from '../hooks/useScrollPosition';
import { useLocation } from 'react-router-dom';

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
          <a href='https://www.linkedin.com/in/hazlanmqodri/'>
            <img src="./images/title-logo.svg" alt="logo profile" className={classNames(
              scrollPosition < 100 && location.pathname === '/' ? '' : 'hidden'
            )} />
          </a>
          <a href='https://www.linkedin.com/in/hazlanmqodri/'>
            <img src="./images/title-logo.svg" alt="logo profile" className={classNames(
              scrollPosition >= 100 && location.pathname === '/' ? '' : 'hidden'
            )} />
          </a>
          <a href='https://www.linkedin.com/in/hazlanmqodri/'>
            <img src="./images/logo-profile.svg" alt="logo profile" className={classNames(
              location.pathname !== '/' ? '' : 'hidden'
            )} />
          </a>
          
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
            <li className="py-4 mt-20"><a href="#home" className="mr-5">Beranda</a></li>
            <li className="py-4"><a href="#experience" className="mr-5">Experience</a></li>
            <li className="py-4"><a href="#techstack" className="mr-5">Tech Stack</a></li>
            <li className="py-4"><a href="#tools" className="mr-5">Tools</a></li>
            <li className="py-4"><a href="#projects" className="mr-5">Projects</a></li>
            <li className="py-4"><a href="#photos" className="mr-5">Photos</a></li>
            <li className="py-4"><a href="https://linktr.ee/hzlnqodrey" className="bg-blue1 text-white rounded-full py-2 px-5">Other socials</a></li>
          </ul>
          {/* responsive < laptop */}
          <ul className="hidden lg:flex items-center">
            <li><a href="#home" className={classNames(
              scrollPosition >= 300 && scrollPosition < 700 ? 'font-bold text-horizon-text1' : 'font-normal',
              'mr-5'
            )}>Beranda</a></li>
            <li><a href="#experience" className={classNames(
              scrollPosition >= 700 && scrollPosition < 1400 ? 'font-bold text-horizon-text1' : 'font-normal',
              'mr-5'
            )}>Experience</a></li>
            <li><a href="#techstack" className={classNames(
              scrollPosition >= 1400 && scrollPosition < 2100 ? 'font-bold text-horizon-text1' : 'font-normal',
              'mr-5'
            )}>Tech Stack</a></li>
            <li><a href="#tools" className={classNames(
              scrollPosition >= 2100 && scrollPosition < 3000 ? 'font-bold text-horizon-text1' : 'font-normal',
              'mr-5'
            )}>Tools</a></li>
            <li><a href="#projects" className={classNames(
              scrollPosition >= 3000 && scrollPosition < 3600 ? 'font-bold text-horizon-text1' : 'font-normal',
              'mr-5'
            )}>Projects</a> </li>
            <li><a href="#photos" className={classNames(
              scrollPosition >= 3600 && scrollPosition < 4500 ? 'font-bold text-horizon-text1' : 'font-normal',
              'mr-5'
            )}>Photos</a> </li>
            <li><a href="https://linktr.ee/hzlnqodrey" className={classNames(
              scrollPosition < 100 ? 'bg-white text-blue1' : 'bg-blue1 text-white',
              'rounded p-2 transition'
            )}>Other socials</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;