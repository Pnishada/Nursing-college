import React from "react";
import { FaCheckCircle, FaStar, FaRocket } from "react-icons/fa";
import { IconType } from "react-icons";

interface Highlight {
  Icon: IconType;
  title: string;
  desc: string;
}

export default function Highlights(): React.ReactElement {
  const highlights: Highlight[] = [
    {
      Icon: FaCheckCircle,
      title: "Quality Training",
      desc: "We provide top-notch courses with expert instructors.",
    },
    {
      Icon: FaStar,
      title: "Accredited Programs",
      desc: "Our programs are accredited and industry-recognized.",
    },
    {
      Icon: FaRocket,
      title: "Career Growth",
      desc: "Boost your career with practical skills.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {highlights.map((item, index) => {
          const Icon = item.Icon as React.FC<{ size?: number; className?: string }>;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <Icon size={30} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
