import styles from './style'
import { Navbar, Hero,Stats ,Business ,Billing ,CardDeal ,Testimonials,
Clients,CTA,Footer } from './components'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const App = () =>  (
  <div className="bg-primary w-full overflow-hidden">
    {/* navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar/>
      </div>
    </div>
    {/* hero section  */}
      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
    {/* forepart section  */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}> 
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Stats/>
        </AnimationOnScroll>
        <AnimationOnScroll  animateIn="animate__fadeInLeftBig">
          <Business/>
        </AnimationOnScroll>
        <AnimationOnScroll  animateIn="animate__fadeInRightBig">
          <Billing/>
        </AnimationOnScroll>
        <AnimationOnScroll  initiallyVisible={true} animateIn="animate__flip">
          <CardDeal/>
        </AnimationOnScroll>
        <AnimationOnScroll  initiallyVisible={true} duration={3} animateIn="animate__swing">
          <Testimonials/>
        </AnimationOnScroll>
         <Clients />
        <AnimationOnScroll  animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
          <CTA/>
        </AnimationOnScroll>
         <Footer/>
      </div>
    </div>
  </div>
)

export default App