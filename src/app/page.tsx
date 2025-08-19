import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pb-20">
        <HeroSection />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
