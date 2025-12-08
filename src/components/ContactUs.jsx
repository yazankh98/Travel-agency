import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-primary text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold font-caveat">Contact Us</h2>
        <p className="text-white/80 mt-2">
          We are here to help you plan your perfect trip ✈️
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid mob:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-3xl" />
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-white/80">+971 99 999 999</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-3xl text-green-400" />
          <div>
            <h3 className="font-semibold text-lg">WhatsApp</h3>
            <p className="text-white/80">+971 99 999 999</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-3xl" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-white/80">info@travelin.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-3xl" />
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-white/80">Sharjah, UAE</p>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default ContactUs;
