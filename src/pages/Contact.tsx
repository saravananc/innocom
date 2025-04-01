
import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-innocom-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2374')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up">
              Have a question or want to discuss a project? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get In Touch" />
              <p className="text-gray-600 mb-8">
                We're here to help with any questions you have about our services or how we can assist with your project. Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-innocom-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      11/41, 3rd Street, Nehru Nagar, Ennore, Chennai – 600057
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-innocom-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:theinnocom@gmail.com"
                      className="text-innocom-600 hover:underline"
                    >
                      theinnocom@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-innocom-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <a
                      href="tel:+919789459016"
                      className="text-innocom-600 hover:underline"
                    >
                      +91 97894 59016
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-innocom-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-innocom-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our office in Chennai"
            centered={true}
          />
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.1957643872156!2d80.31449097455025!3d13.213022709540354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527053c799f97f%3A0x9bd97e4ba239d1b!2s11%2F41%2C%203rd%20St%2C%20Nehru%20Nagar%2C%20Ennore%2C%20Chennai%2C%20Tamil%20Nadu%20600057!5e0!3m2!1sen!2sin!4v1743518993918!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
