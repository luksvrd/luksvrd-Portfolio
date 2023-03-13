// import { laptop, wave } from "../assets";
// import "./../Components";
// import { aboutSection, AppText } from "../Constants";

const Intro = () => {
  return (
    <div
      id="intro"
      className="flex flex-col items-center justify-center pt-20 pb-6 text-center"
    >
      <h1 className="mb-1 text-4xl font-bold dark:text-white md:mb-3 md:text-7xl">
        Lukas <span className="text-black">Virden</span>
      </h1>
      <h2 className="mb-3 text-base font-medium md:text-xl">
        Web Developer & Engineer
      </h2>
      <p className="mb-6 max-w-xl text-sm font-bold">
        As a civil engineer with 5 years experience in civil site design, deep
        foundations, and geotechnical field engineering, I can bring a holistic
        understanding of complex and interrelated systems to software
        development. With a focus on problem-solving and technical proficiency,
        I am well-equipped to contribute to creating innovative and impactful
        products. I am currently honing my skills in React, Node.js, Express,
        MongoDB, Git, and Agile methodologies through the Full Stack Web
        Development Bootcamp at Washington University in St. Louis while working
        part-time as a lab technician for building materials. My experiences in
        various engineering roles have taught me how to work in diverse teams,
        think critically, and take ownership of my work. I value integrity,
        authenticity, and accountability and approach every task with humility
        and a dedication to constant improvement. I believe in empowering
        employees to grow and develop their skills, and I am committed to
        helping myself and others achieve their full potential.
      </p>
    </div>
  );
};

export default Intro;
