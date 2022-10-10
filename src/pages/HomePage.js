
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Chrono } from "react-chrono";

function HomePage() {
  const items = [
    {
      title: "October 2022 - Present",
      cardTitle: "Core Team Web and Cloud Curricula Division",
      url: "http://google.com",
      cardSubtitle:
        "Google Developer Student Clubs Universitas Pembagunan Nasional 'Veteran' Yogyakarta",
      cardDetailedText: `Managing events, study jams, conference, webinars, etc.`
    },
    {
      title: "July 2022 - Present",
      cardTitle: "Software Engineer - Backend Developer",
      url: "https://www.linkedin.com/company/temandisabilitas/",
      cardSubtitle: `TeDi (Teman Disabilitas) · Part-time`,
      cardDetailedText: `We used MERN Stack (MySQL, ExpressJS, ReactJS, NodeJS) as a core development for building out our Web Application and API.`
    },
    {
      title: "May 2021 - Present",
      cardTitle: "Web Developer",
      url: "papsprjct.com",
      cardSubtitle: `papsprjct.com · Full-time`,
      cardDetailedText: `Design the base ground of the static website. Its UI/UX, network, domain, and hosting on AWS (Using S3 bucket and Route 53), Supervise the development of web application, Manage multiple resources from multiple teams to coordinate according to the goals, and Increase product sales on Shopee with product showcasing and backlinks`
    },
    {
      title: "April 2022 - July 2022",
      cardTitle: "Cloud Engineer at Thisable Capstone Project Team",
      url: "https://github.com/Thisable-Dev",
      cardSubtitle: `Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka · Internship`,
      cardDetailedText: `Thisable is the first all-in-one accessibility app in Indonesia for translating sign language with the help of BISINDO translator library, detecting objects, text, and currency. • Chosen as the Top 15 Best Product Capstone Team Finalist out of 437 Teams.
        • Responsible for developing the application backend (NodeJS).
        • Responsible for managing the google cloud service infrastructure.
        • Responsible for deploying the API and server with App Engine and VM Instance.
        • Collaborated with the android developer team for connecting the API.
        • Volunteered in taking sign language, currency detection, and object detection datasets.`
    },
    {
      title: "February 2022 - July 2022",
      cardTitle: "Google Bangkit 2022 Participant - Cloud Computing Learning Path",
      url: "https://www.linkedin.com/company/bangkit-academy/",
      cardSubtitle: `Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka · Apprenticeship`,
      cardDetailedText: `• Graduate with Distinction at Bangkit Academy 2022.
      • Selected as one of the Cloud Computing Cohort from 3000 Bangkit Academy Cohorts out of 61.000 Applicants across Indonesia.
      • Selected as one of the active team members of the top 15 Best Product Based Capstone Project teams in Bangkit Academy 2022.
      • Top 1,000 performing students in English courses & tests
      • 200 Most Active Students in the ILT session (Tech, Softskills, and English)
      • Active Student during Weekly Consultation
      
      • Learn the fundamentals of the Cloud Computing learning path to deploy applications, monitor operations, and manage enterprise solutions with these specializations:
        - Web (HTML5, JavaScript (ES6), Back-end Basic (ExpressJS and HapiJS), RESTful API, and Postman automation testing
        - Google Cloud Computing Foundations
        - Google Cloud Skills Boost (17 Badges | Badges certification on the Licenses & certifications section below)
        - Architecting with Google Compute Engine
        - Also on the GCSB (Google Cloud Skills Boost) Platform, I learned GCP (both Console UI and SDK), PaaS, IaaS, and SaaS (GCE, GKE, Cloud Function, Cloud Run, and App Engine), Basic Python Backend, Basic GO, Terraform, Kubernetes, Docker, CI/CD Framework: Jenkins, Helmet, and Spinnaker. AI Platform & Vertex AI, Dataflow, Dataproc, Dataprep, Google Cloud Storage, Cloud SQL, BigQuery, BigTable, Firestore, Firebase, VPC and the networking peripherals, Linux SSL Command• Graduate with Distinction at Bangkit Academy 2022. • Selected as one of the Cloud Computing Cohort from 3000 Bangkit Academy Cohorts out of 61.000 Applicants across Indonesia. • Selected as one of the active team members of the top 15 Best Product Based Capstone Project teams in Bangkit Academy 2022. • Top 1,000 performing students in English courses & tests • 200 Most Active Students in the ILT session (Tech, Softskills, and English) • Active Student during Weekly Consultation • Learn the fundamentals of the Cloud Computing learning path to deploy applications, monitor operations, and manage enterprise solutions with these specializations: - Web (HTML5, JavaScript (ES6), Back-end Basic (ExpressJS and HapiJS), RESTful API, and Postman automation testing - Google Cloud Computing Foundations - Google Cloud Skills Boost (17 Badges | Badges certification on the Licenses & certifications section below) - Architecting with Google Compute Engine - Also on the GCSB (Google Cloud Skills Boost) Platform, I learned GCP (both Console UI and SDK), PaaS, IaaS, and SaaS (GCE, GKE, Cloud Function, Cloud Run, and App Engine), Basic Python Backend, Basic GO, Terraform, Kubernetes, Docker, CI/CD Framework: Jenkins, Helmet, and Spinnaker. AI Platform & Vertex AI, Dataflow, Dataproc, Dataprep, Google Cloud Storage, Cloud SQL, BigQuery, BigTable, Firestore, Firebase, VPC and the networking peripherals, Linux SSL Command
      Skills: Soft Skills · Cloud Computing · Google Cloud Platform (GCP) · Continuous Integration and Continuous Delivery (CI/CD) · Software Deployment · Teamwork · DevOps · English · Back-End Web Development`
    },
    {
      title: "June 2021 - September 2021",
      cardTitle: "Staff of Web Development",
      url: "https://google.com",
      cardSubtitle: `Information Technology Club UPN Veteran Yogyakarta · Apprenticeship`,
      cardDetailedText: `Skills: React.js · Front-End Development`
    },
  ];
  

  return (
    <div id="home">
      {/* section jumbotron */}
      <div id="jumbotron" className="bg-space1 relative min-h-[700px] flex items-center pb-20 pt-10">
        <div className="absolute bottom-0 left-0 ">
          {/* <img src="./images/shape1.svg" alt="shape" className="w-screen shape" /> */}
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 bg-white w-full h-px"></div> */}
        <img src='./images/shape-light.svg' alt='light' className='hidden lg:block lg:absolute mix-blend-screen right-0 bottom-0'/>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center container mx-auto px-4 lg:px-10 xl:px-14 2xl:20">
          {/* <img src="./images/mobile-app.png" alt="mobile app" className="max-w-sm mt-20 z-10 hidden lg:inline absolute right-40"/> */}
          <img src="./images/Profile_remove_bg.png" alt="Profile" className="lg:absolute lg:right-60 lg:bottom-0 max-w-sm z-10 px-5 max-w-sm mt-20"/>
          <div className="text-white mx-5 pb-8 z-10 lg:order-first my-auto">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-6 mt-12">Hi there <span className="text-white">👋</span>, It's me</h1>
            <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-6">Hazlan Muhammad Qodri</h1>
            <h2 className="font-regular text-1xl mb-6">I'm <span className="font-regular text-transparent text-md bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-6">@hzlnqodrey</span><br/>Final Year CompSci Student at Universitas Pembangunan Nasional Veteran Yogyakarta<br/>Google Bangkit Academy 2022 Distinction Graduate<br/>Software Engineer - Backend and Cloud Infrastructure at TeDi (Teman Disabilitas)</h2>
            {/* <a className="bg-yellow1 hover:bg-yellow2 text-black font-bold px-5 py-2 rounded-md" href="#problem">Pelajari Selengkapnya</a> */}
            <div className="text-white basis-3 lg:basis-2/6 mt-50">
            <ul className="flex flex-row justify-self-start content-between">
              <li className="flex">
              <a href='https://www.linkedin.com/in/hazlanmqodri/'><img src="./images/linkedin-logo.svg" alt="icon" className="w-5 mr-3 bg-spa"/></a>
              </li>
              <li className="ml-10 flex">
              <a href="https://instagram.com/tedi.temandisabilitas"><img src="./images/instagram-logo.svg" alt="icon" className="w-5 mr-3"/></a>
              </li>
              <li className="ml-10 flex">
              <a href="https://github.com/hzlnqodrey"><img src="./images/github-logo.svg" alt="icon" className="w-5 mr-3"/></a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      {/* section experience */}
      <div id="experience" className="bg-space1 relative min-h-[700px] flex items-center pb-20 pt-10">
        <div className="absolute bottom-0 left-0 top-5">
          <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-10">Experience</h1>
          <Chrono 
              items={items}
              mode="VERTICAL_ALTERNATING"
              twoColums
              scrollable={{ scrollbar: false }}
              theme={{
                primary: 'orange', // Short Description
                secondary: 'orange', // Year Highlighter
                cardBgColor: '#FFFFF0', // Card Background
                cardForeColor: '#182747', // Title and long paragraphs
                titleColor: 'white', // Year Title
                titleColorActive: 'white', // Year Title Active
              }}>
                <div className="chrono-icons">
                  <img
                    src="./images/clock-logo.svg"
                    alt="clock"
                  />
                  <img
                    src="./images/clock-logo.svg"
                    alt="clock"
                  />
                  <img
                    src="./images/clock-logo.svg"
                    alt="clock"
                  />
                  <img
                    src="./images/clock-logo.svg"
                    alt="clock"
                  />
                  <img
                    src="./images/clock-logo.svg"
                    alt="clock"
                  />
                  <img
                    src="./images/clock-logo.svg"
                    alt="clock"
                  />
                  <img
                    src="./images/clock-logo.svg"
                    alt="clock"
                  />
              </div> 
            </Chrono>
        </div>
      </div>

      {/* section problem */}
      <div id="problem" className="text-white bg-space1 py-20 flex flex-col min-h-[700px] lg:h-screen lg:items-center lg:justify-center relative">
        <div className='hidden md:block'>
          <img src='./images/shape-eclipse-blue.svg' alt='eclipse' className='absolute top-8 xl:top-28 left-20 z-20' />
          <img src='./images/shape-eclipse-yellow.svg' alt='eclipse' className='absolute bottom-8 xl:bottom-28 right-20 z-20' />
        </div>
        <h1 className="text-2xl lg:text-4xl text-center font-bold mb-20">Tedi hadir untuk menjawab<br/>permasalahan disabilitas di Indonesia</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center container mx-auto lg:px-10 xl:px-14 2xl:20">
          <div className="flex flex-col justify-center mb-10 md:mb-0">
            <img src="./images/ic-person1.svg" alt="icon persons" className="max-h-40 mb-5" />
            <h2 className="text-xl lg:text-2xl text-center"><span className="font-bold">1 dari 10 orang di Indonesia</span><br/>adalah penyandang<br/>disabilitas*</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img src="./images/ic-person2.svg" alt="icon persons" className="max-h-40 mb-5" />
            <h2 className="text-xl lg:text-2xl text-center"><span className="font-bold">1 dari 2 difabel di Indonesia</span><br/>adalah penyandang<br/>disabilitas ganda**</h2>
          </div>
        </div>
        <h3 className="text-base lg:text-lg text-center mt-28 mx-10">* Riset World Health Organization pada tahun 2019. **Pusat Data dan Informasi Kementrian Kesehatan RI, 2019.</h3>
      </div>

      {/* section feature */}
      <div id="feature" className="bg-space1 py-20">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 mx-auto px-10 md:px-32 xl:px-56">
          <div className="lg:pr-20 relative">
            <img src='./images/shape-eclipse-yellow.svg' alt='eclipse' className='absolute -top-16 left-0 md:left-10 lg:-top-10 lg:-left-16 -z-20' />
            <p className="text-6xl lg:text-9xl text-blue1 font-bold mb-10 text-center lg:text-start">Fitur TeDi</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            <div className="relative flex items-center">
              <img src="./images/img-fitur1.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-3 left-3 xl:bottom-5 xl:left-5 flex flex-row items-center">
                <div className="bg-white w-10 h-10 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded flex justify-center mr-3">
                  <img src="./images/ic-fitur1.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-base md:text-xl lg:text-lg xl:text-xl text-white"><span className="font-bold">BISINDO</span><br/>Translator</h2>
              </div>
            </div>
            <div className="relative flex items-center">
              <img src="./images/img-fitur2.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-3 left-3 xl:bottom-5 xl:left-5 flex flex-row items-center">
                <div className="bg-white w-10 h-10 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded flex justify-center mr-3">
                  <img src="./images/ic-fitur2.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-base md:text-xl lg:text-lg xl:text-xl text-white"><span className="font-bold">Object</span><br/>Detection</h2>
              </div>
            </div>
            <div className="relative flex items-center">
              <img src="./images/img-fitur3.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-3 left-3 xl:bottom-5 xl:left-5 flex flex-row items-center">
                <div className="bg-white w-10 h-10 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded flex justify-center mr-3">
                  <img src="./images/ic-fitur3.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-base md:text-xl lg:text-lg xl:text-xl text-white"><span className="font-bold">Currency</span><br/>Detection</h2>
              </div>
            </div>
            <div className="relative flex items-center">
              <img src="./images/img-fitur4.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-3 left-3 xl:bottom-5 xl:left-5 flex flex-row items-center">
                <div className="bg-white w-10 h-10 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded flex justify-center mr-3">
                  <img src="./images/ic-fitur4.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-base md:text-xl lg:text-lg xl:text-xl text-white"><span className="font-bold">Text</span><br/>Detection</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section projects */}
      <div id="tedinians" className="bg-space1 text-white py-20">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-5">Kami, TeDi Rangers</h1>
          <h2 className="text-xl lg:text-2xl mb-10">Membangun aplikasi TeDi untuk kamu, Tedinians</h2>
        </div>
        
        <div className="flex flex-row flex-wrap justify-center items-end container mx-auto px-5 lg:px-16 xl:px-20 2xl:px-40">
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-gilang.png" alt="gilang" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Gilang Martadinata</h3>
              <h3 className="text-sm lg:text-lg">Product Manager</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-julio.png" alt="julio" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Julio Fachrel</h3>
              <h3 className="text-sm lg:text-lg">Founder &<br/>ML Engineer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-najma.png" alt="najma" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Najma</h3>
              <h3 className="text-sm lg:text-lg">Team Lead &<br/>ML Engineer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-hazlan.png" alt="hazlan" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Hazlan M. Qodri</h3>
              <h3 className="text-sm lg:text-lg">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-pram.png" alt="pram" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Pratama Azmi</h3>
              <h3 className="text-sm lg:text-lg">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-bintang.png" alt="bintang" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Bintang Putera</h3>
              <h3 className="text-sm lg:text-lg">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="/images/img-sabik.png" alt="sabik" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Adri Sabik Muhana</h3>
              <h3 className="text-sm lg:text-lg">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="/images/img-eko.png" alt="eko" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Eko Prasetyo</h3>
              <h3 className="text-sm lg:text-lg">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="/images/img-betty.png" alt="betty" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold">Syarifah Lail Baity</h3>
              <h3 className="text-sm lg:text-lg">Content Writer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-pak-rivani.png" alt="rivani" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold max-w-56">Rivani, S.IP., MM., DBA.</h3>
              <h3 className="text-sm lg:text-lg">Incubation Lecturer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-bu-anin.png" alt="anin" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold max-w-56">Dr. Anindya Apriliyanti Pravitasari, M.Si.</h3>
              <h3 className="text-sm lg:text-lg">Incubation Lecturer</h3>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 xl:basis-1/6 mb-10 flex flex-col items-center">
            <img src="./images/img-pak-yusep.png" alt="yusep" />
            <div className="text-center mt-2 mr-5 h-20">
              <h3 className="text-sm lg:text-lg font-bold max-w-56">Dr. Yusep Suparman, S.Si., M.Sc.</h3>
              <h3 className="text-sm lg:text-lg">Incubation Lecturer</h3>
            </div>
          </div>
        </div>
      </div>

      {/* section blog */}
      <div id="projects" className="bg-space1 relative py-20">
        <div className="absolute bottom-0 left-0">
          {/* <img src="./images/shape2.svg" alt="shape" className="w-screen" /> */}
        </div>
        <div className="container mx-auto flex flex-col text-white px-6 lg:px-20">
          <div className="mb-16">
            <h1 className="text-2xl lg:text-3xl font-bold md:mb-0">
              Harapan untuk TeDi
            </h1>
          </div>
          <Splide hasTrack={ false } aria-label="My Favorite Images">
            <div className="custom-wrapper">
              <div className="splide__arrows absolute right-0 -top-24">
                <button className="splide__arrow splide__arrow--prev mr-5"><img src="./images/ic-prev.svg" alt="prev"/></button>
                <button className="splide__arrow splide__arrow--next"><img src="./images/ic-next.svg" alt="next"/></button>
              </div>
              <SplideTrack>
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img src="./images/blog1.png" alt="blog" className="object-cover mb-5 rounded-lg px-20 md:px-0" />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote"/>
                      <h1 className="text-xl lg:text-3xl text-justify">"Semoga inovasi yang dibangun oleh TeDi bisa menjadi contoh bagi anak-anak muda untuk terus bermanfaat bagi sesama."</h1>
                      <h2 className="text-xl lg:text-2xl font-bold mt-12">Mochamad Ridwan Kamil</h2>
                      <h2 className="text-xl lg:text-2xl ">Gubernur Jawa Barat</h2>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex flex-col md:flex-row">
                    <img src="./images/blog2.png" alt="blog" className="object-cover mb-5 rounded-lg px-20 md:px-0" />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">"Semoga pembuat software semakin memahami bahwa disabilitas netra sangat terbantu dengan kemajuan teknologi sekarang."</h1>
                      <h2 className="text-xl lg:text-2xl font-bold mt-12">Akbar Pamungkas</h2>
                      <h2 className="text-xl lg:text-2xl ">Siswa SLB A Kota Sukabumi</h2>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex flex-col md:flex-row">
                    <img src="./images/blog3.png" alt="blog" className="object-cover mb-5 rounded-lg px-20 md:px-0" />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">"Setelah launching nanti, aplikasi TeDI sangat bermanfaat bagi anak-anak kami untuk bisa lebih mengakses banyak hal melalui aplikasi ini."</h1>
                      <h2 className="text-xl lg:text-2xl font-bold mt-12">Ibu Tanti</h2>
                      <h2 className="text-xl lg:text-2xl ">Kepala Sekolah SLB A Kota Sukabumi</h2>
                    </div>
                  </div>
                </SplideSlide>
              </SplideTrack>
            </div>  
          </Splide>
        </div>

        
      </div>

    </div>
  )
};

export default HomePage;