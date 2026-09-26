import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#432d3b]">
      <Header />
      <Banner />
      <Experience />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
