// pages/about.js
import Head from "next/head";
import Image from "next/image";
import img3 from "../../../public/assets/IMG-20240522-WA0002.jpg";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Sheikh FAHAD</title>
        <meta
          name="description"
          content="Learn more about [Your Name], a passionate web developer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <Image
              src={img3} // Replace with your image path
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg leading-relaxed">
              Hi, I'm Sheikh Fahad, a passionate web developer with expertise in
              building modern web applications. My journey in web development
              began in 2023, and since then, I have been continuously honing my
              skills and expanding my knowledge in various web technologies.
            </p>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p className="text-lg leading-relaxed">
            Front-End Development (HTML, CSS, JavaScript, React, Next.js),
            Back-End Development (Node.js, Express, MongoDB), Responsive Design,
            Version Control (Git, GitHub).
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p className="text-lg leading-relaxed">
            Full-stack e-commerce app, real-time chat app, personal blog
            platform.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-lg leading-relaxed">
            Email: fahaddeveloper001@gmail.com, GitHub:{" "}
            <a
              href="https://github.com/sheikhfahad27"
              className="text-blue-500"
            >
              Sheikh Fahad
            </a>
          </p>
        </section>
      </div>
      <hr className="bg-slate-700" />
    </>
  );
}
