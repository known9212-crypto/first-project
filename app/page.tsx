import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen px-6 py-12 sm:px-10 font-serif text-[#4a4a4a]">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <header className="text-center mb-10">
          {/* Profile Picture */}
          <div className="w-32 h-32 mx-auto mb-4">
            <Image
              src="/1757749095908.jpg" // Change to your actual image path
              alt="Adelaine Daluz Suminday"
              width={100}
              height={60}
              className="rounded-full object-cover"
            />
          </div>
          <br></br>

          <h1 className="text-3xl sm:text-4xl font-light tracking-widest text-[#2c3e50] uppercase">
            Adelaine Daluz Suminday
          </h1>
          <p className="text-[#7f8c8d] italic mt-2">
            Piñan, Zamboanga del Norte | 09468909965 |{" "}
            <a
              href="mailto:sumindayadelaine@gmail.com"
              className="underline hover:text-black"
            >
              sumindayadelaine@gmail.com
            </a>
          </p>
        </header>

        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 text-[#34495e]">
            About Me
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Hello! My name is <strong>Adelaine Daluz Suminday</strong>, and I am
            a progress-focused and adaptable individual. I am currently a
            college student seeking a challenging position in a reputable
            company where I can learn new skills, expand my knowledge, and
            leverage my learnings. I am eager to contribute my best potential to
            an organization growth and to work to help my family.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 text-[#34495e]">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-3 mt-4 text-sm">
            <li className="bg-[#ecf0f1] text-[#34495e] px-4 py-2 rounded-full font-bold">
              Progress-focused
            </li>
            <li className="bg-[#ecf0f1] text-[#34495e] px-4 py-2 rounded-full font-bold">
              Adaptable
            </li>
            <li className="bg-[#ecf0f1] text-[#34495e] px-4 py-2 rounded-full font-bold">
              Problem-solving
            </li>
            <li className="bg-[#ecf0f1] text-[#34495e] px-4 py-2 rounded-full font-bold">
              Team-oriented
            </li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 text-[#34495e]">
            Education
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base">
            <div>
              <p className="font-semibold">Piñan National High School</p>
              <p className="italic text-[#7f8c8d]">
                Science, Technology, Engineering, and Mathematics (STEM) Strand
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Dipolog City Institute of Technology
              </p>
              <p className="italic text-[#7f8c8d]">
                Bachelor of Science in Computer Science – In Progress
              </p>
            </div>
          </div>
        </section>

        {/* Objective Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 text-[#34495e]">
            Objective Statement
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Seeking a challenging position in a reputable company where I can
            learn new skills, expand my knowledge, and leverage my learnings. I
            aim to make the best of my potential and contribute to the
            organization&apos;s growth while supporting my family.
          </p>
        </section>

        {/* Reference Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 text-[#34495e]">
            Reference
          </h2>
          <p className="mt-4 text-sm sm:text-base">Available upon request.</p>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-[#95a5a6] pt-8 border-t border-gray-200 mt-12">
          &copy; 2025 Adelaine Daluz Suminday. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
