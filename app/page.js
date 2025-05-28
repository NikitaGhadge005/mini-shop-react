import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Sports from './components/Sports';
import Stationary from './components/Stationary';

export default function Home() {
  return (
    <>
      <Header />
      <MenuBar />
      <MainSection />
      <Sports/>
      <Stationary/>
      {/* Your main content here */}
      <Footer />
    </>
  );
}
