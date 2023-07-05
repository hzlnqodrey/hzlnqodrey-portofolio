
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Chrono } from "react-chrono";
import ProfileCV from '../assets/Hazlan Muhammad Qodri_CV.pdf'

function HomePage() {
  const items = [
    {
      title: "February 2023 - June 2023",
      cardTitle: "Software Quality Assurance",
      url: "https://www.linkedin.com/company/pt--bank-cimb-niaga-tbk/",
      cardSubtitle:
        "CIMB Niaga · Internship",
      cardDetailedText: `Carry out tests and perform appropriate analysis, including defect management also identifying system requirements from multiple System Design documentaries.`
    },
    {
      title: "October 2022 - May 2023",
      cardTitle: "Core Team Web and Cloud Curricula Division",
      url: "https://gdsc.community.dev/universitas-pembangunan-nasional-veteran-yogyakarta/",
      cardSubtitle:
        "Google Developer Student Clubs Universitas Pembagunan Nasional 'Veteran' Yogyakarta",
      cardDetailedText: `Managing events, study jams, conference, webinars, etc.`
    },
    {
      title: "July 2022 - January 2023",
      cardTitle: "Software Engineer - Backend Developer",
      url: "https://www.linkedin.com/company/temandisabilitas/",
      cardSubtitle: `TeDi (Teman Disabilitas) · Internship`,
      cardDetailedText: `We used MERN Stack (MySQL, ExpressJS, ReactJS, NodeJS) as a core development for building out our Web Application and API.`
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
      title: "May 2021 - May 2022",
      cardTitle: "Web Developer",
      url: "https://papsprjct.com",
      cardSubtitle: `papsprjct.com · Full-time`,
      cardDetailedText: `Design the base ground of the static website. Its UI/UX, network, domain, and hosting on AWS (Using S3 bucket and Route 53), Supervise the development of web application, Manage multiple resources from multiple teams to coordinate according to the goals, and Increase product sales on Shopee with product showcasing and backlinks`
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
      <div id="jumbotron" className="bg-space1 relative min-h-[960px] flex items-center pb-20 pt-10">
        <div className="absolute bottom-0 left-0 ">
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center container mx-auto px-4 lg:px-10 xl:px-14 2xl:20">
          <img src="./images/profile-1-rmv-bg.png" alt="Profile" className="lg:absolute lg:right-60 lg:bottom-0 max-w-sm z-10 px-400 max-w-sm mt-20 top-40 bottom-50"/>
          <div className='hidden md:block'>
            <img src='./images/ellipse-11-gr.svg' alt='eclipse' className="lg:absolute lg:right-60 lg:bottom-80 md:right-30 md:top-35 max-w-sm z-1 px-400 max-w-sm mt-0 top-35 bottom-50 z-10"/>
          </div>
          <div className="text-white mx-5 pb-8 z-10 lg:order-first my-auto">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-horizon-text1 to-horizon-text2 mb-6 mt-12">Hi there <span className="text-white">👋</span>!, It's me</h1>
            <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-horizon-text1 to-horizon-text2 mb-6">Hazlan Muhammad Qodri</h1>
            <h2 className="font-regular text-1xl mb-6">I'm <span className="font-regular text-transparent text-md bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-6"><a href="https://github.com/hzlnqodrey">@hzln.qodrey</a></span><br/>Final Year CompSci Student at Universitas Pembangunan Nasional Veteran Yogyakarta<br/>Google Bangkit Academy 2022 Distinction Graduate<br/>Software Engineer - Backend and Cloud Infrastructure at TeDi (Teman Disabilitas)</h2>
            <div className="text-white basis-3 lg:basis-2/6 mt-50">
              <ul className="flex flex-row justify-self-start content-between">
                <li className="flex">
                <a href='https://www.linkedin.com/in/hazlanmqodri/'><img src="./images/linkedin-logo.svg" alt="icon" className="w-5 mr-3 bg-spa"/></a>
                </li>
                <li className="ml-10 flex">
                <a href="https://instagram.com/hzln.qodrey"><img src="./images/instagram-logo.svg" alt="icon" className="w-5 mr-3"/></a>
                </li>
                <li className="ml-10 flex">
                <a href="https://github.com/hzlnqodrey"><img src="./images/github-logo.svg" alt="icon" className="w-5 mr-3"/></a>
                </li>
              </ul>
            </div>
            <a href={ProfileCV} download="Hazlan Muhammad Qodri CV">
              <button className="hover:bg-yellow2 bg-gradient-to-r from-horizon-text1 to-horizon-text2 font-bold px-5 py-2 rounded-md mt-8" href="">Download my CV!</button>
            </a>
          </div>
        </div>
      </div>

      {/* section experience */}
      <div id="experience" className="bg-space1 relative min-h-[900px] flex items-center pb-20 pt-10">
        <div className="absolute bottom-0 left-0 right-0 top-5">
          <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-10">Experience <span className="text-white">🏋️</span></h1>
          <Chrono 
              items={items}
              mode="VERTICAL_ALTERNATING"
              twoColums
              enableOutline

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

      {/* section techstack */}
      <div id="techstack" className="text-white bg-space1 py-20 flex flex-col min-h-[700px] lg:h-screen lg:items-center lg:justify-center relative">
        <div className='hidden md:block'>
          <img src='./images/shape-eclipse-blue.svg' alt='eclipse' className='absolute top-8 xl:top-28 left-20 z-20' />
          <img src='./images/shape-eclipse-yellow.svg' alt='eclipse' className='absolute bottom-8 xl:bottom-28 right-20 z-20' />
        </div>
        <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-20">Tech Stack <span className="text-white">👨‍💻</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center container mx-auto lg:px-10 xl:px-14 2xl:20">
          <div className="flex flex-col justify-center mb-10 md:mb-0">
            <img src="./images/tf-logo.svg" alt="icon persons" className="max-h-40 mb-5" />
            <h2 className="text-xl lg:text-2xl text-center"><span className="font-bold">Tensorflow Developer</span><br/>currently studying hard<br/>Noob Level*</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img src="./images/gcp-logo.svg" alt="icon persons" className="max-h-40 mb-5" />
            <h2 className="text-xl lg:text-2xl text-center"><span className="font-bold">Cloud and Backend Engineer</span><br/>works on many projects<br/>Junior Level*</h2>
          </div>
        </div>
        <h3 className="text-base lg:text-lg text-center mt-28 mx-10">*will be updated regularly.</h3>
      </div>

      {/* section feature */}
      <div id="tools" className="bg-space1 py-20">
        <div className='hidden md:block'>
          <img src='./images/shape-eclipse-blue.svg' alt='eclipse' className='absolute top-20 xl:top-28 left-20 z-1' />
          <img src='./images/shape-eclipse-yellow.svg' alt='eclipse' className='absolute bottom-20 xl:bottom-28 right-20 z-1' />
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 mx-auto px-10 md:px-32 xl:px-56">
          <div className="lg:pr-20 relative">
            <img src='./images/shape-eclipse-yellow.svg' alt='eclipse' className='absolute -top-16 left-0 md:left-10 lg:-top-10 lg:-left-16 -z-20' />
            <p className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-10 text-center lg:text-start">Programming Languages <span className="text-white">⚙️</span> <br/> and Tools <span className="text-white">🧰</span></p>
          </div>
          <div className="grid grid-cols-7 gap-8 md:gap-12 lg:gap-5 xl:gap-6">
            <div className="relative flex items-center">
                <img src="./images/tools/design/figma-logo.svg" alt="figma logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/frontend/javascript-logo.svg" alt="javascript logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/frontend/tailwind-logo.svg" alt="tailwind logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/frontend/react-logo.svg" alt="react logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/cpp-logo.svg" alt="cplusplus logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/golang-logo.svg" alt="golang logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/nodejs-logo.svg" alt="nodejs logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/php-logo.svg" alt="php logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/mysql-logo.svg" alt="mysql logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/mongodb-logo.svg" alt="mongodb translator" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/postman-logo.svg" alt="postman translator" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/docker-logo.svg" alt="docker logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/kubernetes-logo.svg" alt="kubernetes translator" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/linux-logo.svg" alt="linux logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/firebase-logo.svg" alt="firebase logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/google-cloud-logo.svg" alt="gcp logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/aws-logo.svg" alt="aws logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/jenkins-logo.svg" alt="jenkins logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/csharp-logo.svg" alt="csharp translator" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/backend/python-logo.svg" alt="python logo" className="w-20" />
            </div>
            <div className="relative flex items-center">
              <img src="./images/tools/machine-learning/tensorflow-logo.svg" alt="tensorflow logo" className="w-20" />
            </div>
          </div>
        </div>
      </div>


      {/* section blog */}
      <div id="projects" className="bg-space1 relative py-20">
        <div className="absolute bottom-0 left-0">
        </div>
        <div className='hidden md:block'>
          <img src='./images/shape-eclipse-blue.svg' alt='eclipse' className='absolute top-8 xl:top-28 left-20 z-1' />
          <img src='./images/shape-eclipse-yellow.svg' alt='eclipse' className='absolute bottom-8 xl:bottom-28 right-20 z-1' />
        </div>
        <div className="container mx-auto flex flex-col text-white px-6 lg:px-20">
          <div className="mb-16">
            <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 md:mb-0">
              Projects <span className="text-white">🚀</span>
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
                    <img src="./images/project-1.svg" alt="blog" className="object-cover mb-5 rounded-lg px-20 md:px-0" />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote"/>
                      <h1 className="text-xl lg:text-3xl text-justify">"The first all-in-one accessibility app in Indonesia for all types of disability. Providing an app for disabilities to make it easier for them to communicate and live their daily life. Thisable provide 4 features: BISINDO Translator, Object Detection, Text Detection, and Currency Detection. It unlocks new ways to use your phone that make your life easier!"</h1>
                      <a href='https://github.com/Thisable-Dev'>
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">Thisable</h2>
                        <h2 className="text-xl lg:text-2xl ">Thisable - Bangkit Academy 2022 Capstone Project</h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img src="./images/project-2.svg" alt="blog" className="object-cover mb-5 rounded-lg px-20 md:px-0" />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote"/>
                      <h1 className="text-xl lg:text-3xl text-justify">"Tujuan situs web ini adalah untuk menyediakan katalog online untuk perpustakaan lokal kecil, di mana pengguna dapat menelusuri buku yang tersedia dan mengelola akun mereka."</h1>
                      <a href='https://github.com/hzlnqodrey/local-library'>
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">Local Library</h2>
                        <h2 className="text-xl lg:text-2xl ">Freelance Work</h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img src="./images/project-3.svg" alt="blog" className="object-cover mb-5 rounded-lg px-20 md:px-0" />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote"/>
                      <h1 className="text-xl lg:text-3xl text-justify">"Iya, emang todolist doang."</h1>
                      <a href='https://github.com/Thisable-Dev'>
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">React-app Todolist</h2>
                        <h2 className="text-xl lg:text-2xl ">Hobby</h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
              </SplideTrack>
            </div>  
          </Splide>
        </div>
      </div>

      {/* section photos */}
      <div id="photos" className="bg-space1 relative text-white py-20">
        <div className='hidden md:block'>
          <img src='./images/shape-eclipse-blue.svg' alt='eclipse' className='absolute top-8 xl:top-28 left-20 z-1' />
          <img src='./images/shape-eclipse-yellow.svg' alt='eclipse' className='absolute bottom-8 xl:bottom-28 right-20 z-1' />
        </div>
        <div className="text-center">
          <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-5">Photos <span className="text-white">📸</span> of me </h1>
          <div className="container mx-auto flex flex-col text-white px-6 lg:px-20">
            <div className="mb-16">
              </div>
                <Splide hasTrack={ false } aria-label="My Favorite Images">
                  <div className="custom-wrapper justify-items-center content-around ">
                    <div className="splide__arrows absolute right-0 -top-24">
                      <button className="splide__arrow splide__arrow--prev mr-5"><img src="./images/ic-prev.svg" alt="prev"/></button>
                      <button className="splide__arrow splide__arrow--next"><img src="./images/ic-next.svg" alt="next"/></button>
                    </div>
                    <SplideTrack>
                      <SplideSlide>
                        <div className="flex flex-col md:flex-row justify-center content-around">
                            <img src="./images/photos/fgd-1.jpg" alt="blog" className="object-cover mb-5 rounded-lg px-20 md:px-0" />                            
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="flex flex-col md:flex-row justify-center content-around">
                          <img src="./images/photos/1.jpg" alt="blog" className="object-scale-down md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                          <img src="./images/photos/2.jpg" alt="blog" className="object-scale-down md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="flex flex-col md:flex-row justify-center content-around">
                            <img src="./images/photos/4.jpg" alt="blog" className="object-scale-down md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                            <img src="./images/photos/5.jpg" alt="blog" className="object-scale-down md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="flex flex-col md:flex-row justify-center content-around">
                            <img src="./images/photos/acara1.JPG" alt="blog" className="object-cover md:w-4/12 md:h-1/5 md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                            <img src="./images/photos/acara2-min.png" alt="blog" className="object-cover md:w-4/12 md:h-3/5 md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="flex flex-col md:flex-row justify-center content-around">
                            <img src="./images/photos/final1.jpg" alt="blog" className="object-cover md:w-4/12 md:h-1/5 md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                            <img src="./images/photos/final2-min.png" alt="blog" className="object-cover md:w-4/12 md:h-2/5 md:ml-10 lg:ml-20 rounded-lg px-20 md:px-0" />
                        </div>
                      </SplideSlide>
                    </SplideTrack>
                  </div>  
                </Splide>
              </div>
            </div>
        </div>
      </div>
  )
};

export default HomePage;