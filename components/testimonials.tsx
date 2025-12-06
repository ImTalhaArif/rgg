"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Travel Assistance Client",
    message:
      "RGG made my international travel completely stress-free. From visa guidance to arranging my stay, their support felt personal and reliable. I’ve never experienced such seamless assistance before.",
    img: "/images/testimonial1.jpg",
  },
  {
    name: "Jonathan Patel",
    role: "Healthcare Support Client",
    message:
      "During a critical time for my family, RGG guided us with clarity, compassion, and expert knowledge. They helped us access the right specialists quickly and removed all the usual confusion around medical procedures.",
    img: "/images/testimonial2.jpg",
  },
  {
    name: "Ayesha Khan",
    role: "Education Services Client",
    message:
      "RGG walked me through every step of my study-abroad journey—shortlisting universities, preparing documents, and securing admission. Their team earned my trust from day one and made the whole process incredibly easy.",
    img: "/images/testimonial3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-20 bg-[#b2b7c2]/10">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">
            Real experiences from people who trusted RGG for guidance, support, and global opportunities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center text-center border border-gray-100"
            >
              {/* Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-5">
                <Image
                  src={item.img}
                  width={80}
                  height={80}
                  alt={item.name}
                  className="object-cover"
                />
              </div>

              {/* Message */}
              <p className="text-gray-700 italic leading-relaxed mb-6">
                “{item.message}”
              </p>

              {/* Name & Role */}
              <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
