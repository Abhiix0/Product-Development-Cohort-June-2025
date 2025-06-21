import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, Shield, ArrowRight, Star, MapPin, Trophy, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const sports = [
    {
      name: 'Basketball',
      icon: '🏀',
      courts: 2,
      description: 'Full-size courts with professional flooring',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'basketball'
    },
    {
      name: 'Badminton',
      icon: '🏸',
      courts: 4,
      description: 'Indoor courts with premium wooden flooring',
      image: 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'badminton'
    },
    {
      name: 'Tennis',
      icon: '🎾',
      courts: 2,
      description: 'Outdoor courts with synthetic surface',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'tennis'
    },
    {
      name: 'Volleyball',
      icon: '🏐',
      courts: 1,
      description: 'Indoor court with professional net setup',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'volleyball'
    },
    {
      name: 'Cricket',
      icon: '🏏',
      courts: 1,
      description: 'Practice nets and turf wicket',
      image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'cricket'
    },
    {
      name: 'Football',
      icon: '⚽',
      courts: 1,
      description: 'Full-size ground with natural grass',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'football'
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      title: 'Instant Booking',
      description: 'Reserve courts in seconds with real-time availability and instant confirmation.',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      title: 'Flexible Timing',
      description: 'Book courts from 6 AM to 10 PM with hourly slots that fit your schedule.',
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: 'Multi-User Access',
      description: 'Designed for students, staff, and visitors with role-based pricing.',
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: 'Secure & Reliable',
      description: 'Your bookings are protected with email confirmations and secure payments.',
    },
  ];

  const testimonials = [
    {
      name: 'Arjun Kumar',
      role: 'Computer Science Student',
      content: 'Booking badminton courts has never been this easy! The interface is super clean and booking takes just a few clicks.',
      rating: 5,
      avatar: 'AK',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Faculty, Mechanical Dept.',
      content: 'Perfect for organizing department tournaments. The admin features make managing multiple bookings effortless.',
      rating: 5,
      avatar: 'PS',
    },
    {
      name: 'Rahul Reddy',
      role: 'Alumni Visitor',
      content: 'Even as an outsider, the booking process was seamless. Love playing on my old campus courts again!',
      rating: 5,
      avatar: 'RR',
    },
  ];

  const handleSportClick = (sportType: string) => {
    navigate(`/courts?sport=${sportType}`);
  };

  return (
    <div className="min-h-screen bg-gray-25">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden flex items-center min-h-[60vh] bg-gradient-to-br from-[rgba(60,179,113,0.18)] via-[rgba(245,176,65,0.13)] to-[rgba(255,140,0,0.13)]">
        {/* Grid background overlay for hero section */}
        <div
          className="absolute inset-0 bg-[url('/gridlayout.png')] bg-bottom bg-no-repeat bg-contain opacity-50 mix-blend-multiply z-[-1]"
          style={{ pointerEvents: 'none' }}
        />
        {/* SVG Net Pattern Background */}
        <div
          className="absolute inset-0 z-[-2] bg-repeat bg-center"
          style={{
            backgroundImage: "url('/net-pattern.svg'), url('/particles.svg')",
            opacity: 0.18,
            pointerEvents: 'none',
            backgroundSize: 'auto, auto',
          }}
        />
        {/* Doodle PNG Floating, left side, responsive, transparent background */}
        <motion.img
          src="/Doodle.png"
          alt="Sports Doodle"
          className="absolute left-0 bottom-0 w-[160px] sm:w-[200px] md:w-[260px] lg:w-[320px] z-0 pointer-events-none select-none"
          initial={{ y: 0 }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ maxWidth: '40vw', minWidth: '100px', filter: 'brightness(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(60,179,113,0.22)] via-[rgba(245,176,65,0.15)] to-[rgba(255,140,0,0.15)] z-[-1]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
            >
              Reserve Your Sports Court{' '}
              <span className="bg-gradient-to-r from-[#3CB371] via-[#F5B041] to-[#FF8C00] bg-clip-text text-transparent">
                in Seconds
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }}
            >
              <span className="block mb-2">Smart. Simple. Seamless.</span>
              Book your favorite courts at MLRIT anytime, from anywhere — whether you're a student, staff member, or guest.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-500 font-medium mb-10 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease: 'easeInOut' }}
            >
              Your Game, One Click Away.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link to="/courts">
                  <Button size="lg" className="group px-8 py-4 text-lg font-semibold shadow-large hover:shadow-xl browse-pulse relative overflow-hidden">
                    <span className="absolute inset-0 z-[-1] bg-[url('/particles.svg')] bg-repeat opacity-30 pointer-events-none" />
                    Browse Courts
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.95 }}
              >
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50">
                    Get Started Free
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up">
            {[
              { number: 500, label: 'Happy Students', suffix: '+' },
              { number: 50, label: 'Faculty Members', suffix: '+' },
              { number: 1000, label: 'Bookings Made', suffix: '+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Sports Section */}
      <div className="relative section-sports bg-gradient-to-r from-[#f6fff6] to-[#fff9f2] overflow-hidden">
        {/* Soft radial light effect in top-left corner */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-100 via-white to-transparent rounded-full opacity-40 blur-2xl z-0 pointer-events-none" />
        <section className="py-20 bg-transparent relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Available Sports
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our wide range of premium sports facilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sports.map((sport, index) => (
                <div key={index} onClick={() => handleSportClick(sport.type)} className="cursor-pointer">
                  <Card 
                    className={`overflow-hidden group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50`}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={sport.image}
                        alt={sport.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 text-4xl group-hover:scale-110 group-hover:animate-bounce-subtle transition-all duration-300">
                        {sport.icon}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">{sport.name}</h3>
                        <p className="text-white/90 text-sm leading-relaxed">{sport.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                          {sport.courts} Court{sport.courts > 1 ? 's' : ''} Available
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <div className="relative section-why bg-gradient-to-br from-[#f3fdf8] via-[#f0f7f5] to-white overflow-hidden">
        {/* Blurred pastel blobs for mesh vibe */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full blur-2xl opacity-20 z-0 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-2xl opacity-15 z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-100 rounded-full blur-2xl opacity-10 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        {/* ️ Right-side Doodle (now top-right) */}
        <img
          src="/doodlebb.png"
          alt="Basketball Doodle"
          className="absolute top-4 right-8 w-[160px] sm:w-[200px] lg:w-[260px] z-10 pointer-events-none select-none"
          style={{ maxWidth: '30vw', filter: 'brightness(0.85)' }}
        />

        <section className="py-20 bg-transparent relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose MLRIT Courts?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with modern technology and user experience in mind, making court reservations effortless.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-8 text-center group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <div className="relative section-testimonials bg-gradient-to-t from-white to-[#f3fef4] overflow-hidden">
        {/* Glowing corners and faint quote mark effect using gradients */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-2xl opacity-10 z-0 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-100 to-transparent rounded-full blur-2xl opacity-10 z-0 pointer-events-none" />
        {/* Faint abstract quote mark using a pseudo-element-like div */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[8rem] font-serif text-primary-200 opacity-10 select-none pointer-events-none z-0">“</div>
        <section className="py-20 bg-transparent relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Community Says
              </h2>
              <p className="text-xl text-gray-600">
                Loved by students, staff, and visitors across MLRIT campus.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-0"
                >
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Court?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join hundreds of students and staff who trust MLRIT Courts for their sports activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {!isAuthenticated && (
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold shadow-large hover:shadow-xl">
                  Sign Up Now
                </Button>
              </Link>
            )}
            <Link to="/courts">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-all"
              >
                View Courts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;