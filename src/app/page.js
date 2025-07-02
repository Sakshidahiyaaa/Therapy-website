
import AOSInit from "@/component/AOSInit";
import Hero from '@/component/Hero';
import About from '@/component/About';
import Services from '@/component/Services';
//import FAQ from '@/component/FAQ';
//import ContactForm from '@/component/ContactForm';
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <main>
       <AOSInit />
      <Hero />
      <About />
      <Services />
     
      <Footer />
    </main>
  );
}
