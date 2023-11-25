import './App.css'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection';
import Cards from './Components/Cards/Cards';
import CardsContainer from './Components/Cards/CardsContainer'
import AboutSection from './Components/AboutSection/AboutSection';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {

  return (
    <>
 <Header />
 <HeroSection />
 <AboutSection />
 <CardsContainer>
 <Cards title="Amazon Website" description="This project is a replica of the Amazon website, showcasing my ability to recreate complex and dynamic e-commerce platforms. The website features a user-friendly interface, product listings, and a seamless checkout process, providing users with a familiar and intuitive shopping experience." link="https://amazon-website-project.netlify.app" />
 <Cards title="Dice Game" description="The Dice Game project is a fun and interactive web game that demonstrates my skills in building interactive and entertaining applications. Users can roll virtual dice and experience random outcomes, making it a great project for showcasing JavaScript logic and user interaction." link="https://dice-game-website-project.netlify.app/" />
 <Cards title="Perfume Store" description="The Perfume Store project is an elegant and visually appealing online store for perfumes. It highlights my proficiency in creating aesthetically pleasing and responsive designs. The website includes product displays, detailed descriptions, and a smooth navigation experience, making it an excellent example of my front-end development capabilities." link="https://perfuromastore.netlify.app" />
 </CardsContainer>
 <ContactForm />
 <Footer />
    </>
  )
}

export default App
