
function Footer() {
  return (
    <footer className="bg-space1 flex flex-col justify-center items-center pt-20">
      <div className="w-full flex flex-col lg:flex-row text-grey px-5 pb-10 md:px-20 lg:gap-16">
        <div className="basis-1 lg:basis-4/6">
          <div className="flex flex-row justify-items-center">
            <img src="/images/title-logo.svg" alt="logo tedi" className="mr-5 w-2/5" />
            <h2 className="text-lg text-white  lg:text-1xl text-justify">I'm willing to do anything good for people. Highly motivated to learn something new. I always keep telling myself to become the best version of myself anywhere and any time, to focus up, to push myself at the highest limit, and keep moving forward no matter what happens, because you only live once, YOLO!</h2>
          </div>
          {/* <div className="text-white flex flex-col lg:flex-row flex-wrap items-center gap-4 py-10">
            <h4>Didukung oleh</h4>
            <div className="flex flex-row gap-x-4 items-center">
              <img src="./images/logo-kemendikbud.png" alt="logo kemendikbud" className="h-full" />
              <img src="./images/logo-google.png" alt="logo kemendikbud" className="h-full" />
              <img src="./images/logo-bangkit.png" alt="logo kemendikbud" className="h-full" />
            </div>
          </div> */}
        </div>
        <div className="text-white basis-1 lg:basis-2/6">
          <h2 className="text-xl lg:text-2xl font-bold mb-5">Kontak</h2>
          <ul className="">
            <li className="mb-3 flex">
              <img src="./images/ic-loc.svg" alt="icon" className="w-5 mr-3"/><a href='https://goo.gl/maps/rH9AgsyDrsAfxEcW7'>Gg. Garboruci, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</a>
            </li>
            <li className="mb-3 flex">
              <img src="./images/ic-mail.svg" alt="icon" className="w-5 mr-3"/><a href="mailto:hazlanqodri2020work@gmail.com">hazlanqodri2020work@gmail.com</a>
            </li>
            <li className="mb-3 flex">
              <img src="./images/ic-ig.svg" alt="icon" className="w-5 mr-3"/><a href="https://instagram.com/hzln.qodrey">@hzln.qodrey</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-gradient-to-tr from-horizon-text1 to-horizon-text2 flex justify-center py-2">
        <p className="font-bold text-white">Copyright 2022, Hazlan Muhammad Qodri Made with ❤️</p>
      </div>
    </footer>
  )
}

export default Footer;