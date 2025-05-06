
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Code, Cpu, Layers, Database, LineChart, Users, Rocket, Award, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-innocom-900 to-innocom-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down text-white">
              Custom IT Solutions for <span className="text-innocom-300">Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up">
              At Innocom, we specialize in delivering high-quality, custom software solutions designed to help businesses innovate and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button asChild size="lg" className="bg-innocom-500 hover:bg-innocom-600 text-white border-none">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Innocom?"
            subtitle="We deliver cutting-edge solutions tailored to your business needs with a focus on quality, reliability, and exceptional customer service."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Skilled developers, designers, and project managers with years of industry experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agile Methodology</h3>
              <p className="text-gray-600">
                Fast delivery with continuous improvement and adaptability to changing requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
              <p className="text-gray-600">
                We prioritize clear communication and tailored solutions that meet your specific needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-innocom-100 rounded-lg flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-innocom-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control procedures for robust, reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of IT solutions tailored to meet your business needs."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Code}
              title="Custom Software Development"
              description="Tailored software solutions designed to address your specific business challenges and objectives."
              linkTo="/services#software-development"
            />
            <ServiceCard
              icon={Cpu}
              title="Product Development"
              description="End-to-end product development services for software and hardware solutions."
              linkTo="/services#product-development"
            />
            <ServiceCard
              icon={Database}
              title="Software Maintenance"
              description="Ongoing support and maintenance to ensure your software systems run smoothly."
              linkTo="/services#maintenance"
            />
            <ServiceCard
              icon={Layers}
              title="UX/UI Design"
              description="User-centered design services that create intuitive, engaging, and visually appealing interfaces."
              linkTo="/services#design"
            />
            <ServiceCard
              icon={LineChart}
              title="Digital Marketing"
              description="Comprehensive digital marketing strategies to boost your online presence and reach."
              linkTo="/services#digital-marketing"
            />
            <ServiceCard
              icon={Users}
              title="3D Projects"
              description="Creative 3D videos, character designs, animations and explainer videos."
              linkTo="/services#3d-projects"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-innocom-600 hover:bg-innocom-700">
              <Link to="/services" className="inline-flex items-center">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="section-padding bg-innocom-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Impact"
            subtitle="We've helped numerous businesses transform their operations and achieve their goals."
            centered={true}
            className="text-white"
            color="text-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value={10} suffix="+" text="Years of Experience" />
            <StatCard value={500} suffix="+" text="Satisfied Clients" />
            <StatCard value={200} suffix="+" text="Completed Projects" />
            <StatCard value={30} text="Expert Team Members" />
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it—hear from some of our satisfied clients."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              text="Innocom transformed our outdated systems into a streamlined solution that significantly improved our operational efficiency. Their team was professional, responsive, and delivered beyond our expectations."
              name="Sarah Johnson"
              role="CTO"
              companyName="Global Tech Solutions"
            />
            <TestimonialCard
              text="We approached Innocom for a custom CRM, and they delivered a perfect solution tailored to our unique requirements. The team's expertise and commitment to our success were evident throughout the project."
              name="Michael Chen"
              role="CEO"
              companyName="Innovate Retail"
            />
            <TestimonialCard
              text="The mobile app developed by Innocom helped us increase customer engagement by 40%. Their attention to detail, user-centric design, and technical excellence made all the difference."
              name="Jennifer Taylor"
              role="Marketing Director"
              companyName="NextGen Services"
            />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-innocom-800 to-innocom-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Innovate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let's discuss how we can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="bg-white text-innocom-900 hover:bg-gray-100">
              <Link to="/contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
