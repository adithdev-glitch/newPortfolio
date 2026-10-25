import { motion } from "framer-motion";

const experiences = [
  {
    company: "Imagecon India Pvt Ltd",
    role: "Software Trainee",
    year: "May 2026 - Present",
    points: [
      "Developing and maintaining modern web applications using React.js and Tailwind CSS.",
      "Training students in MERN stack development and frontend best practices.",
      "Creating reusable UI components and scalable frontend architectures.",
      "Mentoring students through real-world projects and coding exercises.",
    ],
  },
  {
    company: "G-TEC COMPUTER EDUCATION",
    role: "MERN Stack Intern",
    year: "February - November 2025",
    points: [
      "Built full-stack MERN applications with authentication.",
      "Created cinematic portfolio websites and dashboards.",
      "Integrated APIs, admin panels, and payment systems.",
      "Focused on modern UI/UX inspired by Awwwards websites.",
    ],
  },
];

const education = [
  {
    school: "Srinivas University",
    degree: "Bachelor of Computer Applications",
    year: "2022 - 2025",
    points: [
      "Graduated with a CGPA of 9.04.",
      "Focused on Cloud Computing & MERN Stack development.",
      "Built multiple MERN stack applications.",
      "Specialized in frontend animation and UI design.",
    ],
  },
  {
    school: "NSS VHSS School Mundathicode",
    degree: "Higher Secondary",
    year: "2020 - 2022",
    points: [
      "Completed higher secondary education.",
      "Developed strong interest in programming.",
    ],
  },
];

export default function ExperienceEducation() {
  return (
    <section className="w-full min-h-screen bg-[#ECE9DB] px-4 sm:px-6 md:px-10 lg:px-20 py-10 overflow-hidden">

      <div className="max-w-[1450px] mx-auto flex flex-col lg:flex-row gap-8 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            w-full
            lg:w-[68%]

            bg-[#ECECEC]
            border-[4px]
            border-black
            rounded-[24px]

            p-4
            sm:p-5
            md:p-7

            shadow-[6px_6px_0px_black]
          "
        >
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-5xl

              font-black
              uppercase
              mb-7
              tracking-tight
            "
          >
            Experience
          </h1>

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="
                  bg-[#F1DB4B]
                  border-[4px]
                  border-black
                  p-4
                  sm:p-5
                  shadow-[5px_5px_0px_black]
                "
              >
                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-[30px]

                    font-black
                    leading-tight
                  "
                >
                  {exp.company}
                </h2>

                <div
                  className="
                    inline-block
                    border-[3px]
                    border-black
                    bg-white

                    px-3
                    py-1
                    mt-2

                    font-mono
                    text-xs
                    sm:text-sm
                    md:text-base
                  "
                >
                  {exp.role}
                </div>

                <p
                  className="
                    font-black
                    mt-3

                    text-sm
                    sm:text-base
                    md:text-lg
                  "
                >
                  {exp.year}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="
                        flex
                        gap-3

                        text-[13px]
                        sm:text-[14px]
                        md:text-[15px]

                        leading-relaxed
                      "
                    >
                      <span>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            w-full
            lg:w-[32%]

            bg-[#ECECEC]
            border-[4px]
            border-black
            rounded-[24px]

            p-4
            sm:p-5
            md:p-6

            shadow-[6px_6px_0px_black]
          "
        >
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-5xl

              font-black
              uppercase
              mb-7
              tracking-tight
            "
          >
            Education
          </h1>

          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="
                  bg-[#8DB6E8]
                  border-[4px]
                  border-black
                  p-4
                  sm:p-5
                  shadow-[5px_5px_0px_black]
                "
              >
                <h2
                  className="
                    text-lg
                    sm:text-xl
                    md:text-2xl

                    font-black
                    leading-tight
                  "
                >
                  {edu.school}
                </h2>

                <div
                  className="
                    inline-block
                    border-[3px]
                    border-black
                    bg-white

                    px-3
                    py-1
                    mt-2

                    font-mono
                    text-xs
                    sm:text-sm
                    md:text-base
                  "
                >
                  {edu.degree}
                </div>

                <p
                  className="
                    font-black
                    mt-3

                    text-sm
                    sm:text-base
                    md:text-lg
                  "
                >
                  {edu.year}
                </p>

                <ul className="mt-4 space-y-2">
                  {edu.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="
                        flex
                        gap-3

                        text-[13px]
                        sm:text-[14px]
                        md:text-[15px]

                        leading-relaxed
                      "
                    >
                      <span>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}