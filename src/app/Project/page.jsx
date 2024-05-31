// pages/projects.js
import Head from "next/head";
import Image from "next/image";
import img3 from "../../../public/assets/screencapture-wisemarket-fahad-netlify-app-2024-05-19-18_48_59.png";
import img4 from "../../../public/assets/screencapture-lemonwaresfahad-vercel-app-2024-05-19-19_15_18.png";
import img5 from "../../../public/assets/screencapture-fahadbookmark786-netlify-app-2024-05-19-19_45_52.png";

const projects = [
  {
    title: "E-Commerce App",
    description:
      "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
    image: img3, // Replace with the path to your image
    link: "https://wisemarket-fahad.netlify.app/", // Replace with your project link
  },
  {
    title: "Landing Page",
    description:
      "A real-time chat application using Next.js, Socket.io, and Tailwind CSS.",
    image: img4, // Replace with the path to your image
    link: "https://lemonwaresfahad.vercel.app/", // Replace with your project link
  },
  {
    title: "Blog Platform",
    description:
      "A personal blog platform developed with Next.js, Markdown, and Tailwind CSS.",
    image: img5, // Replace with the path to your image
    link: "https://fahadbookmark786.netlify.app/", // Replace with your project link
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title className="text-white">Projects - Sheikh Fahad</title>
        <meta
          name="description"
          content="Showcasing some of my projects as a web developer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8 text-white mt-12">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover overflow-hidden w-full h-64 object-top "
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-lg mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
