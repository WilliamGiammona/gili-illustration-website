import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

const page = () => {
  return (
    <div className="flex justify-center items-start p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24 w-full max-w-6xl">
        {/* Image Section */}
        <div className="flex flex-col items-center justify-start space-y-4 md:space-y-6 mb-8 md:mb-0">
          <div className="w-32 sm:w-40 md:w-44">
            <Image
              src="/images/about/gili-about-image.jpg"
              alt="Gili Giammona"
              width={200}
              height={200}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </div>
          <h2 className="text-center text-2xl sm:text-3xl">Hello!</h2>
        </div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 max-w-2xl mx-auto md:mx-0">
          <div className="space-y-4 sm:space-y-6 mb-6">
            <p className="text-foreground text-sm sm:text-base md:text-lg font-normal">
              Hi, I&apos;m Gili Giammona! I&apos;m an illustrator, graphic
              designer, and storyboard artist passionate about visual
              storytelling and bringing creative ideas to life. I studied at the
              Isarel Animation College in Tel Aviv, and am currently based in
              Israel.
              <br />
              <br />I specialize in creating unique illustrations designed to
              bring warmth and positivity to any project. My work focuses on
              crafting thoughtful, high-quality designs that connect with
              audiences and leave them with a lasting impression.
            </p>
          </div>

          {/* Resume Section */}
          <div className="flex justify-start py-4">
            <div className="text-left">
              <h3 className="text-lg sm:text-xl mb-2">View Resume</h3>
              <Link
                href="https://gili-resume.netlify.app/"
                className="inline-block px-4 py-2 bg-primary/10 rounded-md text-foreground hover:bg-primary/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Software Skills Section */}
          <div className="text-left py-6 sm:py-8">
            <h2 className="text-xl sm:text-2xl mb-4">Software Skills</h2>
            {/* Icons row with responsive spacing and sizing */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-center">
              <SiAdobephotoshop className="w-8 h-8 sm:w-10 sm:h-10" />
              <SiAdobeillustrator className="w-8 h-8 sm:w-10 sm:h-10" />
              <SiAdobepremierepro className="w-8 h-8 sm:w-10 sm:h-10" />
              <SiAdobeaftereffects className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/Logos/procreate.jpg"
                  alt="Procreate"
                  width={40}
                  height={40}
                  className="object-contain rounded-lg dark:invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
