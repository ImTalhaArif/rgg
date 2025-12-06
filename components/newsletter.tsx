export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div
          className="relative bg-purple-600 rounded-3xl overflow-hidden p-10 md:p-16 text-white shadow-xl"
          data-aos="fade-up"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/60 to-purple-500/40 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated With Our Latest Insights
            </h3>
            <p className="text-purple-100 text-lg mb-8">
              Get exclusive access to updates, tutorials, and resources.
              Join thousands of professionals leveling up with us.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none shadow-md"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Decorative blurred glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300/30 blur-[120px]" />
        </div>
      </div>
    </section>
  );
}
