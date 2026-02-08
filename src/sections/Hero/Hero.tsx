import profileImg from "../../assets/images/Profile.webp";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import personal from "../../data/personal.json";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="container-main grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="space-y-6">
          <h1 className="bg-gradient-to-r from-[#DD2343] to-[#00345D] bg-clip-text text-transparent">
            {personal.name}
          </h1>

          <h3 className="text-[#DD2343]">
            {personal.role}
          </h3>

          <p className="text-slate-400 max-w-lg">
            {personal.tagline}
          </p>

          <div className="flex gap-5 text-2xl">
            <FaGithub className="hover:text-[#DD2343] cursor-pointer"/>
            <FaLinkedin className="hover:text-[#DD2343] cursor-pointer"/>
            <FaEnvelope className="hover:text-[#DD2343] cursor-pointer"/>
          </div>

          <button className="btn-accent">
            Contactar
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#DD2343]/60 shadow-xl">
            <img src={profileImg} className="w-full h-full object-cover"/>
          </div>
        </div>

      </div>
    </section>
  );
}
