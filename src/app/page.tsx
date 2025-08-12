'use client';

import Image from "next/image";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Navbar from "./components/Navbar";
import LanguagePopup from "./components/LanguagePopup";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t, dir, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white" dir={dir}>
      {/* Developer Section - Sticky Above Navbar */}
      <div className="bg-gray-900 text-white py-3 px-4 sm:px-6 lg:px-8 sticky top-0 z-50" dir={dir}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center" dir={language == 'en' ? 'rtl' : 'ltr'}>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <a 
                href="https://wa.me/96170407916" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm hover:text-green-400 transition duration-300 flex items-center space-x-1 rtl:space-x-reverse group px-1"
                dir={'ltr'}
              >
                <span>+961 70 407 916</span>
                <svg className="w-3 h-3 text-green-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-1 ltr:space-x-reverse" dir={dir}>
              <span className="text-sm">{t.footer.crafted}</span>
              <span className="text-sm font-medium text-blue-400">{t.footer.developer}</span>
              <span className="text-red-500">⚡</span>
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 sm:pt-20 lg:pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" dir={dir}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.hero.title}
                <span className="text-blue-600 block">{t.hero.titleHighlight}</span>
                {t.hero.subtitle}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4" dir={dir}>
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center">
                  {t.hero.contactUs}
                </a>
                <a href="#about" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center">
                  {t.hero.learnMore}
                </a>
              </div>
            </div>
            <div className="relative" dir={dir}>
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <div className="text-center space-y-4" dir={dir}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center">{t.hero.certified}</h3>
                  <p className="text-blue-100 text-center">{t.hero.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" dir={dir}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              {t.about.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" dir={dir}>
                
                {/* Left Column - Story & Mission */}
                <div className="lg:col-span-2 space-y-8" dir={dir}>
                  
                  {/* Story Section */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" dir={dir}>
                    <div className="flex items-center mb-6" dir={dir}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{t.about.story.title}</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {t.about.story.content.map((paragraph, index) => (
                        <p key={index}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Mission Section */}
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-100" dir={dir}>
                    <div className="flex items-center mb-6" dir={dir}>
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{t.about.mission.title}</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {t.about.mission.content.map((paragraph, index) => (
                        <p key={index}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Values Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={dir}>
                                          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300" dir={dir}>
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.about.values.compassion.title}</h4>
                        <p className="text-gray-600 text-sm">{t.about.values.compassion.description}</p>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300" dir={dir}>
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.about.values.excellence.title}</h4>
                        <p className="text-gray-600 text-sm">{t.about.values.excellence.description}</p>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300" dir={dir}>
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.about.values.integrity.title}</h4>
                        <p className="text-gray-600 text-sm">{t.about.values.integrity.description}</p>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300" dir={dir}>
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.about.values.personalization.title}</h4>
                        <p className="text-gray-600 text-sm">{t.about.values.personalization.description}</p>
                      </div>
                  </div>
                </div>

                {/* Right Side - Stats & Credentials */}
                <div className="space-y-8" dir={dir}>
                  {/* Stats Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-6 text-center">{t.about.stats.title}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">100%</div>
                        <div className="text-blue-100 text-sm">{t.about.stats.licensed}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">100%</div>
                        <div className="text-blue-100 text-sm">{t.about.stats.focused}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">100%</div>
                        <div className="text-blue-100 text-sm">{t.about.stats.satisfaction}</div>
                      </div>
                    </div>
                  </div>

                  {/* Credentials Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{t.about.credentials.title}</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{t.about.credentials.licensed}</span>
                      </div>
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{t.about.credentials.excellence}</span>
                      </div>
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{t.about.credentials.care}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
                    <h3 className="text-lg font-bold mb-3">{t.about.cta.title}</h3>
                    <p className="text-green-100 text-sm mb-4">{t.about.cta.subtitle}</p>
                    <a href="#contact" className="inline-block bg-white text-green-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
                      {t.about.cta.button}
                    </a>
                  </div>
                </div>
              </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" dir={dir}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={dir}>
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300" dir={dir}>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.services[0].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.services[0].description}
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300" dir={dir}>
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.services[1].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.services[1].description}
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300" dir={dir}>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.services[2].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.services[2].description}
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300" dir={dir}>
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.services[3].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.services[3].description}
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300" dir={dir}>
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.services[4].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.services[4].description}
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300" dir={dir}>
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.services[5].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.services[5].description}
              </p>
            </div>

            {/* Service 7 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300" dir={dir}>
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.services[6].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.services[6].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" dir={dir}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              {t.testimonials.subtitle}
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" dir={dir}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir={dir}>
            {/* Call Us Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition duration-300 flex flex-col items-center" dir={dir}>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{t.contact.callUs.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{t.contact.callUs.description}</p>
              <div className="flex justify-center">
                <a href="tel:+96176978070" className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition duration-300 group">
                  {t.contact.callUs.button}
                  {language === 'ar' ? (
                    <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition duration-300 flex flex-col items-center" dir={dir}>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{t.contact.whatsapp.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{t.contact.whatsapp.description}</p>
              <div className="flex justify-center">
                <a href="https://wa.me/96176978070" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 font-semibold text-lg hover:text-green-700 transition duration-300 group">
                  {t.contact.whatsapp.button}
                  {language === 'ar' ? (
                    <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition duration-300 flex flex-col items-center" dir={dir}>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{t.contact.location.title}</h3>
              <div className="text-gray-600 text-center">
                <p className="text-lg font-medium">{t.contact.location.address}</p>
                <p className="text-sm mt-2">{t.contact.location.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8" dir={dir}>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {/* Copyright */}
            <div className="text-center" dir={dir}>
              <p className="text-gray-400 text-sm text-center">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-4" dir={dir}>
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/96176978070"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg>
          {/* Tooltip */}
                      {/* Tooltip */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none ${language === 'ar' ? 'left-20' : 'right-20'}`} dir={dir}>
                        {t.contact.whatsapp.button}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent ${language === 'ar' ? 'right-full border-r-8 border-r-gray-900' : 'left-full border-l-8 border-l-gray-900'}`}></div>
                      </div>
        </a>

        {/* Call Floating Button */}
        <a
          href="tel:+96176978070"
          className="block w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Call us"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {/* Tooltip */}
                      {/* Tooltip */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none ${language === 'ar' ? 'left-20' : 'right-20'}`} dir={dir}>
                        {t.contact.callUs.button}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent ${language === 'ar' ? 'right-full border-r-8 border-r-gray-900' : 'left-full border-l-8 border-l-gray-900'}`}></div>
                      </div>
        </a>
      </div>

      {/* Language Selection Popup */}
      <LanguagePopup />
    </div>
  );
}
