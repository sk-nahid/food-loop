import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    {
        id: 1,
        label: "Meals Saved from Waste",
        value: "1,000+",
        icon: (
            <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3v5H9v-5c0-1.657 1.343-3 3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0L8 8m4-4l4 4" />
            </svg>
        ),
    },
    {
        id: 2,
        label: "Active Donors",
        value: "500+",
        icon: (
            <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A6 6 0 0118 17.802" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 3,
        label: "Communities Helped",
        value: "30+",
        icon: (
            <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-3-3.87" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
];
const ImpactStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.3,     
  });

  return (
    <section className="bg-background py-8" ref={ref}>
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map(({ id, label, value, icon }) => (
            <div
              key={id}
              className="bg-base-200 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4 ">{icon}</div>
              <p className="text-4xl font-extrabold text-white">
                {inView ? (
                  <CountUp
                    end={parseInt(value.replace(/\D/g, ""))}
                    duration={3}
                    suffix="+"
                  />
                ) : (
                  "0"
                )}
              </p>
              <p className="mt-2 text-gray-700 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
