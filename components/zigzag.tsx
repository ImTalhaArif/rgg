import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.jpeg'
import FeatImage02 from '@/public/images/features-03-image-02.jpg'
import FeatImage03 from '@/public/images/features-03-image-03.jpg'

export default function Zigzag() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
            Reliable services under one roof
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Your Journey — Travel, Health, Education & More
          </h1>
          <p className="text-xl text-gray-600">
            At RGG, we provide a wide spectrum of services: from travel and visas to healthcare support, education guidance, insurance and more — all with trust and integrity.
          </p>
        </div>

        {/* Feature blocks */}
        <div className="grid gap-20">

          {/* 1st item — Travel & Tours */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            <div className="md:col-span-5 lg:col-span-6 mb-8 md:mb-0">
              <Image
                src={FeatImage01}
                width={540}
                height={405}
                alt="Travel & Tours"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:col-span-7 lg:col-span-6">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="text-xl text-purple-600 mb-2">See the world, stress‑free</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Tours & Travel Management</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Whether you are travelling solo, with family, or for groups, RGG arranges end-to-end travel services — visas, tickets, hospitality, and support — making your journey smooth and secure.
                </p>
                <ul className="text-lg text-gray-700 space-y-2">
                  <li className="flex items-center"><CheckIcon /> Visa & documentation support</li>
                  <li className="flex items-center"><CheckIcon /> Global flight & hotel booking</li>
                  <li className="flex items-center"><CheckIcon /> 24/7 travel assistance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd item — Healthcare & Medical Support */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            <div className="md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-2 lg:order-1">
              <Image
                src={FeatImage02}
                width={540}
                height={405}
                alt="Healthcare Support"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:col-span-7 lg:col-span-6">
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <div className="text-xl text-purple-600 mb-2">Your health, our priority</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Healthcare & Medical Services</h3>
                <p className="text-lg text-gray-600 mb-4">
                  RGG supports you with access to trusted medical care — from consultations to hospitalisation, labs, pharmacies, and ongoing care — ensuring peace of mind for you and your loved ones.
                </p>
                <ul className="text-lg text-gray-700 space-y-2">
                  <li className="flex items-center"><CheckIcon /> Hospital & clinic referrals</li>
                  <li className="flex items-center"><CheckIcon /> Lab & pharmacy support</li>
                  <li className="flex items-center"><CheckIcon /> Emergency medical assistance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3rd item — Education & Study Abroad / Virtual University */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            <div className="md:col-span-5 lg:col-span-6 mb-8 md:mb-0">
              <Image
                src={FeatImage03}
                width={540}
                height={405}
                alt="Education & Study Abroad"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:col-span-7 lg:col-span-6">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="text-xl text-purple-600 mb-2">Learn. Grow. Succeed.</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Education & Study‑Abroad Support</h3>
                <p className="text-lg text-gray-600 mb-4">
                  From academic counselling, university placements, to virtual‑learning support — RGG helps you chase education goals worldwide with confidence and guidance at every step.
                </p>
                <ul className="text-lg text-gray-700 space-y-2">
                  <li className="flex items-center"><CheckIcon /> University & visa guidance</li>
                  <li className="flex items-center"><CheckIcon /> Admissions & documentation support</li>
                  <li className="flex items-center"><CheckIcon /> Virtual education & e‑learning access</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mr-2"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
    </svg>
  );
}
