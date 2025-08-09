import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Whatsapplink from '@/components/landing/whatsapplink';
import ServicesGrid from "@/components/landing/services";
import Footer from "@/components/landing/footer";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Whatsapplink />
      <Footer />
    </div>
  )
}

export default Landing;