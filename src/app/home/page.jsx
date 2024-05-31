"use client";
import Image from "next/image";
import img2 from "../../../public/assets/IMG-20240522-WA0004.jpg";
import fahad from "../../../public/assets/facebook-f (2).svg";
import { TypeAnimation } from "react-type-animation";
import { ClientPageRoot } from "next/dist/client/components/client-page";

const Hero = () => {
  return (
    <>
      <div className="w-full">
        <div className=" py-20 px-4 sm:px-6 lg:px-8 duration-500 transition-all ">
          <div className="max-w-7xl mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Hi, I'm Sheikh Fahad
                </h2>
                <p className="mt-3 text-lg text-blue-700 font-semibold py-3">
                  {" "}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Hi'I am Sheikh Fahad",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Mern Stack Developer",
                      1000,
                      "Front End Developer",
                      1000,
                      "Back End Developer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </p>
                <p className="text-justify w-full md:w-1/2 mt-4">
                  You're a digital architect, shaping ideas into functional{" "}
                  software with code. Your toolkit includes languages like{" "}
                  Python and JavaScript, and you thrive on solving puzzles and
                  challenges in the tech world.
                </p>

                <button className="bg-blue-500 hover:bg-blue-700  font-bold py-2 mt-7 px-4 rounded">
                  Our Services
                </button>
              </div>
              <div className="mt-10 lg:mt-3 lg:ml-10">
                <Image
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h"
                  src={img2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-slate-700" />

      {/* <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
        temporibus facilis, consequatur commodi hic id quia facere aspernatur
        debitis esse culpa ipsa error modi distinctio tempora at? Accusantium
        adipisci ipsa quos facilis ex unde maxime dicta, quae vel nisi dolorum
        omnis? Dignissimos, eaque cum. Dignissimos, accusamus cumque autem
        repudiandae aliquid neque, tempora similique possimus veniam atque fuga.
        Aliquam dolorum ratione quia minus placeat temporibus voluptatem
        laudantium nisi eos optio libero eum, numquam quidem neque aperiam,
        nostrum quasi ea soluta porro ex deserunt iure vero dignissimos. Quaerat
        cum hic assumenda distinctio, mollitia sunt ducimus cupiditate
        similique, nesciunt enim sit excepturi iusto. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Illo temporibus facilis, consequatur
        commodi hic id quia facere aspernatur debitis esse culpa ipsa error modi
        distinctio tempora at? Accusantium adipisci ipsa quos facilis ex unde
        maxime dicta, quae vel nisi dolorum omnis? Dignissimos, eaque cum.
        Dignissimos, accusamus cumque autem repudiandae aliquid neque, tempora
        similique possimus veniam atque fuga. Aliquam dolorum ratione quia minus
        placeat temporibus voluptatem laudantium nisi eos optio libero eum,
        numquam quidem neque aperiam, nostrum quasi ea soluta porro ex deserunt
        iure vero dignissimos. Quaerat cum hic assumenda distinctio, mollitia
        sunt ducimus cupiditate similique, nesciunt enim sit excepturi iusto.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
        temporibus facilis, consequatur commodi hic id quia facere aspernatur
        debitis esse culpa ipsa error modi distinctio tempora at? Accusantium
        adipisci ipsa quos facilis ex unde maxime dicta, quae vel nisi dolorum
        omnis? Dignissimos, eaque cum. Dignissimos, accusamus cumque autem
        repudiandae aliquid neque, tempora similique possimus veniam atque fuga.
        Aliquam dolorum ratione quia minus placeat temporibus voluptatem
        laudantium nisi eos optio libero eum, numquam quidem neque aperiam,
        nostrum quasi ea soluta porro ex deserunt iure vero dignissimos. Quaerat
        cum hic assumenda distinctio, mollitia sunt ducimus cupiditate
        similique, nesciunt enim sit excepturi iusto. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Illo temporibus facilis, consequatur
        commodi hic id quia facere aspernatur debitis esse culpa ipsa error modi
        distinctio tempora at? Accusantium adipisci ipsa quos facilis ex unde
        maxime dicta, quae vel nisi dolorum omnis? Dignissimos, eaque cum.
        Dignissimos, accusamus cumque autem repudiandae aliquid neque, tempora
        similique possimus veniam atque fuga. Aliquam dolorum ratione quia minus
        placeat temporibus voluptatem laudantium nisi eos optio libero eum,
        numquam quidem neque aperiam, nostrum quasi ea soluta porro ex deserunt
        iure vero dignissimos. Quaerat cum hic assumenda distinctio, mollitia
        sunt ducimus cupiditate similique, nesciunt enim sit excepturi iusto.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
        temporibus facilis, consequatur commodi hic id quia facere aspernatur
        debitis esse culpa ipsa error modi distinctio tempora at? Accusantium
        adipisci ipsa quos facilis ex unde maxime dicta, quae vel nisi dolorum
        omnis? Dignissimos, eaque cum. Dignissimos, accusamus cumque autem
        repudiandae aliquid neque, tempora similique possimus veniam atque fuga.
        Aliquam dolorum ratione quia minus placeat temporibus voluptatem
        laudantium nisi eos optio libero eum, numquam quidem neque aperiam,
        nostrum quasi ea soluta porro ex deserunt iure vero dignissimos. Quaerat
        cum hic assumenda distinctio, mollitia sunt ducimus cupiditate
        similique, nesciunt enim sit excepturi iusto. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Illo temporibus facilis, consequatur
        commodi hic id quia facere aspernatur debitis esse culpa ipsa error modi
        distinctio tempora at? Accusantium adipisci ipsa quos facilis ex unde
        maxime dicta, quae vel nisi dolorum omnis? Dignissimos, eaque cum.
        Dignissimos, accusamus cumque autem repudiandae aliquid neque, tempora
        similique possimus veniam atque fuga. Aliquam dolorum ratione quia minus
        placeat temporibus voluptatem laudantium nisi eos optio libero eum,
        numquam quidem neque aperiam, nostrum quasi ea soluta porro ex deserunt
        iure vero dignissimos. Quaerat cum hic assumenda distinctio, mollitia
        sunt ducimus cupiditate similique, nesciunt enim sit excepturi iusto.
      </p> */}
    </>
  );
};

export default Hero;
