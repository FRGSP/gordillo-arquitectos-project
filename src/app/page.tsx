import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Whatsapplink from '@/components/landing/whatsapplink';
import ServicesGrid from "@/components/landing/services";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Whatsapplink />
    </div>
  )
}

export default Landing;