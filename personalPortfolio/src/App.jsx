import './App.css'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection';
import Cards from './Components/Cards/Cards';
import CardsContainer from './Components/Cards/CardsContainer'
import AboutSection from './Components/AboutSection/AboutSection';
import Footer from './Components/Footer/Footer';
import ContactMe from './Components/ContactMe/ContactMe';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {

  return (
    <>
    <div id='home'>
 <Header />
 <HeroSection />
 <AboutSection />
 <CardsContainer>
 <Cards title="Amazon Website" description="Explore a sophisticated e-commerce experience with the Amazon Website project. Discover a user-friendly interface that allows you to browse, search, and shop for a vast range of products. Experience seamless navigation and a responsive design tailored to enhance your online shopping journey." link="https://amazon-website-project.netlify.app" projectId={1} />
<Cards title="Minecraft 2D Game" description=" Minecraft Game: A captivating 2D adventure where players explore, build, and survive in a blocky pixelated world. Unleash your creativity, face challenges, and embark on endless possibilities in this sandbox game." link="https://minecraft-game-jihad.netlify.app/" projectId={2} />
<Cards title="Perfume Store" description="A modern e-commerce platform showcasing a variety of premium perfumes. Explore and discover your signature scent through a seamless and visually appealing shopping experience." link="https://perfuromastore.netlify.app" projectId={3} />
 </CardsContainer>
 <ContactForm />
 <ContactMe />
 <Footer />
 </div>
    </>
  )
}

export default App
