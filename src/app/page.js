
import AOSInit from "@/component/AOSInit";
import Hero from '@/component/Hero';
import About from '@/component/About';
import Services from '@/component/Services';
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
