import experience from "../../data/experience.json";
import BosqueLogo from "../../assets/logos/BosqueNagal.png";
import FunigualdadLogo from "../../assets/logos/Funigualdad.png";
import InstitutoLogo from "../../assets/logos/InstitutoFrances.png";

const logos: any = {
  "Grupo Nagal S.A.S": BosqueLogo,
  "Fundación FUNIGUALDADH": FunigualdadLogo,
  "Proyecto Instituto Francés": InstitutoLogo,
};

export default function Experience() {
  return (
    <section className="section-spacing">
      <div className="container-main">

        <h2 className="mb-14 text-center">
          Experiencia Profesional
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {experience.map((job: any, i: number) => (
            <div key={i} className="card-tech p-7 flex gap-5">

              <img
                src={logos[job.company]}
                className="w-16 h-16 object-contain"
              />

              <div className="space-y-3">
                <h3>{job.company}</h3>

                <p className="text-sm text-[#DD2343]">
                  {job.role} · {job.period}
                </p>

                <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
                  {job.tasks.map((t:string, idx:number) =>
                    <li key={idx}>{t}</li>
                  )}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
