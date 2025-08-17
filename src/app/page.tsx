import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BookingForm />
      <Footer />
    </div>
  );
}
