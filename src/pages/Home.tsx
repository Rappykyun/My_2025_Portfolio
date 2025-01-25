import { Hero } from "../components/Hero";
import { Experiences } from "../components/Experiences";
export function Home() {
    return (
      <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20 ">
        <Hero />
        <Experiences />
      </main>
    );
}