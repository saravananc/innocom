
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Cpu,
  Database,
  Layers,
  LineChart,
  Tablet,
  RefreshCw,
  ArrowRight,
  Check,
  Server,
  Cloud,
  Building,
  Puzzle,
  PenTool,
  FileCode,
  FileSpreadsheet,
  FileImage,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-innocom-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2340')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down text-white">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Services We Provide"
            subtitle="From custom software development to digital marketing, we offer a wide range of IT solutions to help your business thrive."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Code}
              title="Custom Software Development"
              description="Tailored software solutions designed to address your specific business challenges and objectives."
              linkTo="#software-development"
            />
            <ServiceCard
              icon={RefreshCw}
              title="Software Reengineering"
              description="Analysis, redesign, and improvement of existing software systems to enhance performance and functionality."
              linkTo="#reengineering"
            />
            <ServiceCard
              icon={Database}
              title="Software Maintenance"
              description="Ongoing support and maintenance of software solutions to ensure optimal performance and reliability."
              linkTo="#maintenance"
            />
            <ServiceCard
              icon={Cpu}
              title="Product Development"
              description="End-to-end product development services for both software and hardware solutions."
              linkTo="#product-development"
            />
            <ServiceCard
              icon={FileCode}
              title="Software Testing"
              description="Comprehensive quality assurance and testing services to ensure your software performs flawlessly."
              linkTo="#testing"
            />
            <ServiceCard
              icon={Layers}
              title="UX/UI Design"
              description="User-centered design services that create intuitive, engaging, and visually appealing interfaces."
              linkTo="#design"
            />
            <ServiceCard
              icon={FileImage}
              title="Website & Logo Design"
              description="Professional website layouts and logo designs that reflect your brand identity and engage your audience."
              linkTo="#web-design"
            />
            <ServiceCard
              icon={FileSpreadsheet}
              title="Digital Brochure"
              description="Designing compelling digital brochures for effective marketing and communication."
              linkTo="#brochure"
            />
            <ServiceCard
              icon={Smartphone}
              title="Social Media Handling"
              description="Comprehensive social media management to boost your online presence and engagement."
              linkTo="#social-media"
            />
            <ServiceCard
              icon={LineChart}
              title="Digital Marketing"
              description="Strategic online marketing services including SEO, PPC, and content marketing."
              linkTo="#digital-marketing"
            />
            <ServiceCard
              icon={Puzzle}
              title="3D Projects"
              description="Creative 3D videos, character designs, animations, and explainer videos for impactful visual communication."
              linkTo="#3d-projects"
            />
            <ServiceCard
              icon={PenTool}
              title="AutoCAD Services"
              description="Professional design and drafting services using AutoCAD for engineering, architecture, and construction."
              linkTo="#autocad"
            />
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section id="software-development" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Custom Software Development Services" />
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-innocom-100">
                      <Server className="h-4 w-4 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Business Application Development</h3>
                    <p className="text-gray-600">
                      We create custom web, desktop, and mobile applications that streamline operations, improve efficiency, and boost customer engagement. Whether you need a CRM, ERP, or any other business tool, we ensure it meets your exact requirements.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-innocom-100">
                      <Cloud className="h-4 w-4 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Cloud-Based Software Development</h3>
                    <p className="text-gray-600">
                      Harness the power of the cloud with secure, scalable, and high-performance cloud solutions. Our cloud-based applications provide easy accessibility, better collaboration, and improved efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-innocom-100">
                      <Building className="h-4 w-4 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Enterprise Software Solutions</h3>
                    <p className="text-gray-600">
                      For large organizations, we develop high-performance enterprise solutions like HR management systems, accounting software, and supply chain management applications.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-innocom-100">
                      <Puzzle className="h-4 w-4 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">API & System Integration</h3>
                    <p className="text-gray-600">
                      We develop custom APIs and integrate third-party services to ensure smooth connectivity between different platforms and applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2340"
                alt="Custom Software Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Custom Software Development Process"
            subtitle="We follow a structured, agile-based approach to ensure the best results."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-innocom-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 pt-2">Requirement Analysis</h3>
              <p className="text-gray-600">
                We begin by understanding your business, challenges, and goals to define the software requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-innocom-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 pt-2">Planning & Prototyping</h3>
              <p className="text-gray-600">
                We create a wireframe or prototype to visualize the software before development starts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-innocom-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 pt-2">Software Development</h3>
              <p className="text-gray-600">
                Our skilled developers write clean, efficient, and secure code to bring your software to life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-innocom-600 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 pt-2">Testing & Quality Assurance</h3>
              <p className="text-gray-600">
                We conduct rigorous testing to ensure flawless performance, security, and user experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-innocom-600 rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <h3 className="text-xl font-bold mb-2 pt-2">Deployment & Training</h3>
              <p className="text-gray-600">
                Once approved, we deploy the software and provide training and documentation for your team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-innocom-600 rounded-full flex items-center justify-center text-white font-bold">
                6
              </div>
              <h3 className="text-xl font-bold mb-2 pt-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We offer continuous monitoring, updates, and technical support to keep your software running at peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us for Custom Software Development?"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-innocom-600" />
                </div>
                <h3 className="text-xl font-bold">Expert Team</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Our team consists of highly skilled developers, designers, and project managers with extensive industry experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-innocom-600" />
                </div>
                <h3 className="text-xl font-bold">Agile Methodology</h3>
              </div>
              <p className="text-gray-600 ml-9">
                We employ agile development practices for faster delivery and continuous improvement throughout the project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-innocom-600" />
                </div>
                <h3 className="text-xl font-bold">Transparent Communication</h3>
              </div>
              <p className="text-gray-600 ml-9">
                We maintain clear, open communication with regular updates and feedback loops throughout the development process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-innocom-600" />
                </div>
                <h3 className="text-xl font-bold">Cost-Effective Solutions</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Our solutions are designed to maximize your return on investment with efficient, high-quality software.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-innocom-600" />
                </div>
                <h3 className="text-xl font-bold">Cutting-Edge Technology</h3>
              </div>
              <p className="text-gray-600 ml-9">
                We leverage the latest technologies including AI, IoT, blockchain, and cloud-based solutions to give you a competitive edge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-innocom-600" />
                </div>
                <h3 className="text-xl font-bold">Post-Launch Support</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Our commitment doesn't end with deployment; we provide ongoing support and maintenance to ensure your software continues to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-innocom-800 to-innocom-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Let's Build Your Custom Software Today!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Need a custom solution tailored to your business? Contact us now for a free consultation!
            </p>
            <Button asChild size="lg" className="bg-white text-innocom-900 hover:bg-gray-100 inline-flex items-center">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
