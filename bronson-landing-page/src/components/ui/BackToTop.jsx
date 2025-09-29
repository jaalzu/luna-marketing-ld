import styles from './BackToTop.module.css'
import {useState,useEffect} from 'react'

export default function BackToTop(){
const [isVisible,setIsVisible] = useState(false)

function handleVisible(){
setIsVisible(window.pageYOffset > 300);
}

useEffect(() => {
  window.addEventListener("scroll", handleVisible);
  return () => window.removeEventListener("scroll", handleVisible);
}, []);


    return (
        <div className={styles.nav}>
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className={`fixed bottom-6 right-6 w-12 bg-primary h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 
    ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
  aria-label="Volver arriba"
    >
<svg 
      className="w-6 h-6 text-white mx-auto" 
       fill="none" 
       stroke="currentColor" 
       viewBox="0 0 24 24">
      <path 
   strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2" 
      d="M5 15l7-7 7 7">
      </path>
    </svg></button>
  </div>
    )
}

