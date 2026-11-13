function About() {
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1000px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-blue-900">
            About Us
          </h1>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to JC Seafood Restaurant, your destination for delicious
               and freshly prepared seafood! We take pride in serving a variety
                of seafood dishes inspired by Filipino flavors, using quality 
                ingredients to bring you a wonderful dining experience.
            </p>

            <p>
              At JC Seafood Restaurant, we believe that great food 
              creates unforgettable moments. From mouthwatering garlic butter 
              shrimp and fresh crabs to grilled fish and delicious seafood
               platters, every meal is prepared with care, flavor, and passion
            </p>

            <p>
              Our goal is to provide delicious food, friendly service, and
               a comfortable place where families and friends can enjoy their
                favorite seafood dishes. Whether you're celebrating a special
                 occasion or simply craving fresh seafood, we are always ready to welcome you.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="site-container">
          <img
            src="/img/Kani.png"
            alt="JC Seafood Restaurant"
            className="w-full h-[400px] object-cover rounded-[200px] shadow-md"
          />
        </div>
      </section>
    </>
  );
}

export default About;
