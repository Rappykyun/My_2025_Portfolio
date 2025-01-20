import HeroSvg from "../assets/icons/HeroSvg";

export function Hero() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-4/5 lg:pr-8">
          <div className="mb-8 relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500/20 relative z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 animate-gradient"></div>
            </div>
          </div>

          <h1
            className="font-incognito font-semibold tracking-tight text-3xl 
            sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:max-w-lg"
          >
            Computer Science Student and Aspiring Software Engineer based in
            Sultan Kudarat, Philippines.
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 lg:max-w-lg">
            I am Ralph Vincent C. Rodriguez a Computer Science student at Sultan
            Kudarat State University and I am passionate about software
            development. I am currently learning web development and I am
            looking for opportunities to work with a team of developers to learn
            and grow.
          </p>
        </div>

        <div className="lg:w-3/5">
          <div className="animate-float">
            <HeroSvg />
          </div>
        </div>
      </section>
    </main>
  );
}
