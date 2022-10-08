
function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center pt-20">
      <div className="w-full flex flex-col lg:flex-row text-grey px-5 pb-10 md:px-20 lg:gap-16">
        <div className="basis-1 lg:basis-4/6">
          <div className="flex flex-row justify-items-center">
            <img src="/images/logo-tedi.svg" alt="logo tedi" className="mr-5 w-2/5" />
            <h2 className="text-lg lg:text-2xl text-justify">TeDi (Teman Disabilitas) adalah startup sosial yang bergerak dibidang penyediaan aplikasi aksesibilitas dengan teknologi <span className="italic">machine learning.</span></h2>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap items-center gap-4 py-10">
            <h4>Didukung oleh</h4>
            <div className="flex flex-row gap-x-4 items-center">
              <img src="./images/logo-kemendikbud.png" alt="logo kemendikbud" className="h-full" />
              <img src="./images/logo-google.png" alt="logo kemendikbud" className="h-full" />
              <img src="./images/logo-bangkit.png" alt="logo kemendikbud" className="h-full" />
            </div>
          </div>
        </div>
        <div className="basis-1 lg:basis-2/6">
          <h2 className="text-xl lg:text-2xl font-bold mb-5">Kontak</h2>
          <ul className="">
            <li className="mb-3 flex">
              <img src="./images/ic-loc.svg" alt="icon" className="w-5 mr-3"/><a href='https://goo.gl/maps/yaGzumzDsrcUjJAX6'>Fakultas Matematika dan Ilmu Pengetahuan Alam, Program Studi Sarjana Statistika, Universitas Padjadjaran.</a>
            </li>
            <li className="mb-3 flex">
              <img src="./images/ic-mail.svg" alt="icon" className="w-5 mr-3"/><a href="mailto:info@temandisabilitas.com">info@temandisabilitas.com</a>
            </li>
            <li className="mb-3 flex">
              <img src="./images/ic-ig.svg" alt="icon" className="w-5 mr-3"/><a href="https://instagram.com/tedi.temandisabilitas">@tedi.temandisabilitas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-light-grey flex justify-center py-2">
        <p className="font-bold text-grey">Copyright 2022, TeDi (Teman Disabilitas)</p>
      </div>
    </footer>
  )
}

export default Footer;