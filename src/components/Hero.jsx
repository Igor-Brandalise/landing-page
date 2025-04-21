function Hero() {
  return (
    <main className="bg-gradient-to-r from-[#D84B72] via-[#D87A64] to-[#D48A28] min-h-screen flex flex-col-reverse items-center justify-center px-4 md:flex-row md:justify-between md:px-12 lg:px-24">
     
      <section className="flex flex-col text-center md:text-left md:max-w-[50%]">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-10 md:mt-0">
          Lorem ipsum, dolor sit amet.
        </h1>

        <p className="text-white font-medium text-base sm:text-lg md:text-xl mt-6 md:mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          reiciendis odit nisi labore rem perspiciatis repudiandae maiores culpa
          quia eveniet, animi doloremque molestiae praesentium nobis adipisci!
          Labore dignissimos vitae laborum!
        </p>

        <button className="mt-10 md:mt-20 w-48 h-14 font-bold px-6 py-3 bg-white text-black rounded-full hover:bg-amber-100 transition mx-auto md:mx-0">
          SUBSCRIBE
        </button>
      </section>

      <section className="mb-10 md:mb-0">
        <img
          src="/hero.png"
          alt="Hero"
          className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[700px] h-auto"
        />
      </section>
    </main>
  );
}

export default Hero;
