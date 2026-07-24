import React from "react";
import { Fingerprint, Lock, Activity, ShieldCheck } from "lucide-react";

interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SECURITY_FEATURES: SecurityFeature[] = [
  {
    id: "biometric",
    title: "Biometric Auth",
    description: "Seamless integration with FaceID and TouchID systems.",
    icon: <Fingerprint className="w-9 h-9 text-indigo-400 mb-4" />,
  },
  {
    id: "mpc",
    title: "MPC Technology",
    description:
      "Multi-Party Computation to eliminate single points of failure.",
    icon: <Lock className="w-9 h-9 text-indigo-400 mb-4" />,
  },
  {
    id: "monitoring",
    title: "24/7 Monitoring",
    description: "Real-time threat detection and fraud prevention systems.",
    icon: <Activity className="w-9 h-9 text-indigo-400 mb-4" />,
  },
  {
    id: "audited",
    title: "Audited Smart Contracts",
    description: "Fully audited by industry-leading security firms.",
    icon: <ShieldCheck className="w-9 h-9 text-indigo-400 mb-4" />,
  },
];

export const SecurityFocus: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
        Enterprise-Grade Security
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {SECURITY_FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 flex flex-col items-center hover:border-white/10 transition-colors"
          >
            {feature.icon}
            <h3 className="font-bold text-lg mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityFocus;
