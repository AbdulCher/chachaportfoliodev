import ParticleBackground from "../components/ParticleBackground";
export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-start h-screen w-full bg-gradient-to-b from-[#1F6692] via-[#111A27] to-[#0D141F] flex flex-col items-center justify-center p-6 lg:px-16"
    >
      <h1 className="text-5xl font-bold text-gray-300 mb-6">Contact</h1>
      <p className="text-gray-300 mb-6 text-center max-w-2xl">
        Vous avez un projet ou une question ? Écrivez-moi !
      </p>

      <form
        id="contactForm"
        action="https://formspree.io/f/TON_ID"
        method="POST"
        className="w-full max-w-lg bg-[#112840] text-gray-300 p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="_replyto"
            required
            placeholder="Votre email"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Votre message"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
