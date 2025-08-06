import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Whatsapplink from '@/components/landing/whatsapplink';

function Landing() {
  return (
    <div>
      <Navbar />
      <Whatsapplink />
      <Hero />
    </div>
  )
}

export default Landing;