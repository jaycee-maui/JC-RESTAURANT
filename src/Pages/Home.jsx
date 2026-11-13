function Home() {
  const testimonials = [
    {
      message: "The seafood is fresh and delicious!",
      name: "- Seafood Lover",
    },
    {
      message: "Amazing grilled fish and excellent service.",
      name: "- Happy Customer",
    },
    {
      message: "The shrimp and crab dishes are full of flavor.",
      name: "- Seafood Fan",
    },
    {
      message: "The staff are friendly and the restaurant is welcoming.",
      name: "- Satisfied Guest",
    },
    {
      message: "A great place to enjoy authentic Filipino seafood.",
      name: "- Food Enthusiast",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24 text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 blur-md"
          style={{
            backgroundImage: "url('/img/seafood-background.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-4 text-5xl font-bold">
            Welcome to JC Seafood Restaurant
          </h1>

          <p className="text-lg">
            Enjoy fresh seafood, delicious Filipino dishes, and unforgettable
            dining experiences with family and friends.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-blue-900">
            Customer Testimonials
          </h2>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 bg-white border-4 border-blue-300 rounded-2xl shadow-sm"
              >
                <p className="italic">"{testimonial.message}"</p>

                <span className="block mt-2 font-bold text-right">
                  {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;