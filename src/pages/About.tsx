
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Lightbulb, Users, Star, Zap, Lock, RefreshCw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-innocom-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2340')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down text-white">
              About Innocom
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up">
              Learn about our journey, our mission, and the values that drive us to deliver exceptional IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <SectionHeading title="Our History" />
              <p className="text-gray-600 mb-6">
                Founded with a passion for innovation, Innocom started as a small team of visionary developers committed to crafting cutting-edge software solutions. We have grown into a trusted technology partner, helping businesses of all sizes streamline operations, enhance productivity, and achieve digital transformation.
              </p>
              <p className="text-gray-600">
                Our journey has been fueled by a relentless pursuit of excellence, a deep understanding of industry needs, and a commitment to delivering customized software that drives success.
              </p>
            </div>
            <div className="relative animate-fade-left">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340"
                  alt="Innocom Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-innocom-600 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="font-bold text-lg">10+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-up">
              <div className="w-12 h-12 bg-innocom-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-innocom-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                At Innocom, our mission is to empower businesses with tailor-made software solutions that optimize efficiency, enhance user experiences, and foster growth. We believe in harnessing the power of technology to solve real-world challenges, ensuring that every line of code we write contributes to the success of our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-up">
              <div className="w-12 h-12 bg-innocom-100 rounded-full flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-innocom-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where technology seamlessly integrates with business processes, enabling innovation and sustainable growth. Our goal is to be a global leader in custom software development, setting industry benchmarks for quality, security, and client satisfaction. By staying ahead of technological advancements, we strive to create intelligent, scalable, and future-ready software solutions that transform industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Core Values & Principles"
            subtitle="These are the guiding principles that shape our approach to every project and client relationship."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation & Creativity</h3>
              <p className="text-gray-600">
                We embrace new ideas and cutting-edge technologies to develop solutions that drive progress and set new industry standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We listen, adapt, and deliver tailored software solutions that align with their unique needs and goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality & Excellence</h3>
              <p className="text-gray-600">
                We uphold the highest standards in coding, design, and functionality, ensuring that every product we deliver is robust, secure, and scalable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security & Reliability</h3>
              <p className="text-gray-600">
                We prioritize security in every project, ensuring that our software solutions are protected against threats while maintaining high performance and reliability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agility & Adaptability</h3>
              <p className="text-gray-600">
                The tech landscape evolves rapidly, and so do we. Our agile methodologies allow us to stay flexible and responsive to changes and client feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration & Teamwork</h3>
              <p className="text-gray-600">
                Great software is built through collaboration. We foster a culture of teamwork—both within our company and with our clients—to achieve the best results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                Technology never stands still, and neither do we. We invest in learning, innovation, and refining our skills to stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-innocom-800 to-innocom-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to work with a team that values innovation, quality, and your business success?
            </p>
            <Button asChild size="lg" className="bg-white text-innocom-900 hover:bg-gray-100">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
