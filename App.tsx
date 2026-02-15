
import React, { useState } from 'react';
import { PACKAGES, ALACARTE_SERVICES, CONTACT_INFO } from './constants';
import ChatBot from './components/ChatBot';
import BookingSystem from './components/BookingSystem';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  const openBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="h-12 w-12 bg-white flex items-center justify-center p-1">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/peniel-logo-icon.png" 
                  alt="Peniel Icon" 
                  className="h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=100";
                  }}
                />
             </div>
             <div>
               <h1 className="font-bold text-xl leading-tight text-brand-purple">PENIEL</h1>
               <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium -mt-1">Healthcare Services</p>
             </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-brand-purple transition-colors">Home</a>
            <a href="#packages" className="hover:text-brand-purple transition-colors">Packages</a>
            <a href="#alacarte" className="hover:text-brand-purple transition-colors">Services</a>
            <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="hidden md:flex items-center gap-2 text-brand-green font-bold text-sm">
              <i className="fas fa-phone-alt"></i>
              {CONTACT_INFO.phone}
            </a>
            <button 
              onClick={() => openBooking()}
              className="bg-brand-purple text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:bg-opacity-90 transition-all"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-lightGreen/50 -skew-x-12 transform origin-top translate-x-32 hidden lg:block"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 bg-brand-lightPurple text-brand-purple rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Expert Agency Guidance
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Your Partner in Launching a <span className="gradient-text">Successful</span> Healthcare Agency.
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                From compliance to continuous growth, we provide tailored solutions for your success in the evolving homecare landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openBooking()}
                  className="bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-brand-green/20 transform hover:-translate-y-1 transition-all"
                >
                  Book a Free Consultation
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 text-gray-700 font-bold text-lg hover:text-brand-purple transition-colors">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                    <i className="fas fa-play ml-1"></i>
                  </div>
                  Watch Intro
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1489424155312-428b5783ee4a?auto=format&fit=crop&q=80&w=100"
                  ].map((src, i) => (
                    <img key={i} src={src} className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" alt="client" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400 mb-1">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-500"><span className="font-bold text-gray-900">50+</span> Agencies Launched in Chicago</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional healthcare consultant" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-lightGreen rounded-full flex items-center justify-center text-brand-green">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <h4 className="font-bold">Compliance Ready</h4>
                </div>
                <p className="text-sm text-gray-500">All our packages are IDOA & IDPH aligned for Chicago agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Peniel Healthcare Services?</h2>
            <p className="text-gray-600 text-lg">We don't just provide templates. We provide a path to sustainable success built on real-world experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-hospital-user', title: 'Real-world home-care expertise', color: 'green' },
              { icon: 'fa-shield-check', title: 'Compliance-focused & state-ready', color: 'purple' },
              { icon: 'fa-dove', title: 'Faith-driven & ethical approach', color: 'green' },
              { icon: 'fa-user-cog', title: 'Personalized support — not templates', color: 'purple' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform ${feature.color === 'green' ? 'bg-brand-green shadow-lg shadow-brand-green/20' : 'bg-brand-purple shadow-lg shadow-brand-purple/20'}`}>
                  <i className={`fas ${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">Our consultants have years of experience navigating the complexities of the Illinois healthcare system.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Service Packages</h2>
            <p className="text-gray-600">Comprehensive solutions for every stage of your agency's lifecycle.</p>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {PACKAGES.map((pkg) => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-[2.5rem] p-8 flex flex-col shadow-sm hover:shadow-2xl transition-all border border-gray-100 hover:border-brand-purple/20 relative group"
              >
                {pkg.id === 'full-setup' && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-10">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">{pkg.headline}</h3>
                  <h4 className="text-2xl font-bold mb-4">{pkg.name}</h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-gray-900">${pkg.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm font-medium">total</span>
                  </div>
                  <p className="text-gray-500 text-sm">{pkg.description}</p>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-tight">
                      <i className={`fas fa-check-circle mt-0.5 ${pkg.color === 'green' ? 'text-brand-green' : 'text-brand-purple'}`}></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => openBooking(pkg.id)}
                  className={`w-full py-4 rounded-2xl font-bold transition-all shadow-md group-hover:scale-105 ${
                    pkg.color === 'green' 
                      ? 'bg-brand-green text-white hover:bg-opacity-90' 
                      : 'bg-brand-purple text-white hover:bg-opacity-90'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A La Carte Consulting */}
      <section id="alacarte" className="py-24 bg-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-lightPurple/40 rounded-full blur-[100px] -mr-48 -mb-48"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Need Specific Support?</h2>
              <p className="text-xl text-gray-600 mb-8">Our hourly and specialized services are here when you need targeted assistance on specific aspects of your agency.</p>
              
              <div className="grid gap-4">
                {ALACARTE_SERVICES.map((item) => (
                  <div key={item.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all">
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-purple transition-colors">{item.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Specialized Service</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-brand-green">{item.price}</p>
                      <button 
                        onClick={() => openBooking(item.id)}
                        className="text-xs font-bold text-brand-purple hover:underline mt-1"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-brand-purple rounded-[3rem] p-12 text-white relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mt-32 -mr-32"></div>
                <h3 className="text-3xl font-bold mb-8 relative z-10">Ready to Take the First Step?</h3>
                <p className="text-purple-100 mb-10 text-lg relative z-10">Schedule a discovery call with one of our Chicago-based consultants to discuss your unique goals.</p>
                <div className="space-y-6 mb-10 relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><i className="fas fa-calendar-alt"></i></div>
                    <p className="font-medium">Free 20-Minute Strategy Session</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><i className="fas fa-map-marker-alt"></i></div>
                    <p className="font-medium">Local Chicago Expertise (IDOA / IDPH)</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><i className="fas fa-users"></i></div>
                    <p className="font-medium">Direct Professional Mentorship</p>
                  </div>
                </div>
                <button 
                  onClick={() => openBooking('free-consultation')}
                  className="bg-white text-brand-purple px-10 py-5 rounded-full font-extrabold text-lg hover:bg-gray-50 transition-all shadow-xl w-full sm:w-auto"
                >
                  Schedule A La Carte Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-16 shadow-xl flex flex-col md:flex-row gap-16 items-center">
             <div className="w-full md:w-2/5">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-lg w-full h-[500px] object-cover" alt="Peniel Founder" />
             </div>
             <div className="w-full md:w-3/5">
                <h2 className="text-3xl font-bold mb-6">About Peniel Healthcare Services</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded with a mission to elevate the standard of home-care in Chicago, Peniel Healthcare Services combines clinical excellence with ethical leadership. 
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We believe that every agency owner has the potential to make a profound difference in their community. Our role is to provide the operational, legal, and strategic foundation to turn that vision into a sustainable reality. 
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div>
                     <p className="text-4xl font-extrabold text-brand-purple mb-1">15+</p>
                     <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Years Experience</p>
                   </div>
                   <div>
                     <p className="text-4xl font-extrabold text-brand-green mb-1">100%</p>
                     <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Compliance Rate</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">Have questions? We're here to help you navigate the journey of starting your healthcare agency. Reach out to us today.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-brand-lightPurple rounded-2xl flex items-center justify-center text-brand-purple shrink-0">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-500">{CONTACT_INFO.phone}</p>
                    <p className="text-xs text-gray-400 mt-1">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-brand-lightGreen rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-500">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                    <p className="text-gray-500">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="bg-gray-50 p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-brand-purple/20 bg-white" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-brand-purple/20 bg-white" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-brand-purple/20 bg-white" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-brand-purple/20 bg-white" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-brand-green text-white rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
               <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center p-1">
                    <img 
                      src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/peniel-logo-icon.png" 
                      alt="Peniel Icon" 
                      className="h-full"
                    />
                </div>
                <div>
                  <h1 className="font-bold text-lg leading-tight">PENIEL</h1>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-gray-500 font-medium -mt-1">Healthcare Services</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xs">
                Empowering healthcare entrepreneurs to build legacy-defining agencies with faith, integrity, and compliance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-gray-500">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Packages</a></li>
                <li><a href="#alacarte" className="text-gray-400 hover:text-white transition-colors">A La Carte</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-gray-500">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">State Licensing Docs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting Agreement</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-gray-500">Chicago Office</h4>
              <p className="text-gray-400 mb-4">{CONTACT_INFO.location}</p>
              <p className="text-gray-400 mb-4">{CONTACT_INFO.phone}</p>
              <p className="text-gray-400">{CONTACT_INFO.email}</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Peniel Healthcare Services. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <ChatBot />
      {isBookingOpen && (
        <BookingSystem 
          initialServiceId={selectedServiceId} 
          onClose={() => setIsBookingOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
