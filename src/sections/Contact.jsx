
// ============================================
// sections/Contact.js - AMÉLIORÉ
// ============================================
import { useState } from "react";
import Icons from "../components/Icons";
import BgChacha from "../animate/BgChacha";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simuler l'envoi (remplacer par votre API)
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
      
      // Réinitialiser après 5 secondes
      setTimeout(() => setSent(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative snap-start min-h-screen
        bg-[#001524] text-[#ece5dd]
        flex flex-col items-center 
        justify-center px-8 lg:px-20 py-24"
      aria-labelledby="contact-title"
    >
      <h2 
        id="contact-title"
        className="text-[#ece5dd] mb-6 text-2xl md:text-3xl 
          xl:text-4xl lg:text-5xl font-semibold"
        data-aos="fade-down"
      >
        Contact
      </h2>

      <p 
        className="text-lg mb-10 text-center max-w-2xl opacity-90"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Une question ou une idée ? Utilisez ce formulaire ou les réseaux sociaux 👇
      </p>

      <div className="w-full max-w-2xl z-10">
        <div 
          className="bg-[#001524]/60 backdrop-blur-sm border-2 
            border-[#27818f]/40 p-8 rounded-xl shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-sm font-medium"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#001524] 
                    border-2 border-[#27818f]/50
                    focus:border-[#ff7d00] focus:outline-none
                    transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#001524] 
                    border-2 border-[#27818f]/50
                    focus:border-[#ff7d00] focus:outline-none
                    transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#001524] 
                    border-2 border-[#27818f]/50
                    focus:border-[#ff7d00] focus:outline-none
                    transition-colors duration-300 h-40 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#27818f] hover:bg-[#ff7d00] 
                  text-[#ece5dd] font-bold py-3 rounded-lg 
                  transition-all duration-300
                  hover:shadow-xl hover:scale-105
                  disabled:opacity-50 disabled:cursor-not-allowed
                  disabled:hover:scale-100"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          ) : (
            <div 
              className="text-center py-12"
              data-aos="zoom-in"
            >
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-2xl font-semibold text-[#ff7d00]">
                Message envoyé avec succès !
              </p>
              <p className="text-lg mt-2 opacity-90">
                Je vous répondrai dans les plus brefs délais.
              </p>
            </div>
          )}
        </div>

        <div className="mt-10">
          <BgChacha />
        </div>
        <Icons />
      </div>
    </section>
  );
}