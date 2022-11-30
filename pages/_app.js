import '../styles/globals.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/counter.css'
import '../styles/valued.css'
import '../styles/testimonial.css'
import '../styles/projects.css'
import '../styles/why.css'
import '../styles/footer.css'
import '../styles/contact.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import NProgress from "nprogress"
import { Router } from 'next/router';
import  { useEffect } from 'react';





function MyApp({ Component, pageProps }) {

  NProgress.configure({showSpinner:"true"})

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  useEffect(() => {
    AOS.init(
     
    )
      }, [])
  return <Component {...pageProps} />
}

export default MyApp
