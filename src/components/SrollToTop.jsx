import { useEffect } from 'react'

export function ScrollToTop(){
    
    useEffect(() => {
        const hash=location.hash
        if(hash==='#apropos'){
            return
        }
        scrollToTop()
      },[])
      const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
}