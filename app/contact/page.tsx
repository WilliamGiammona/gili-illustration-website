import React from "react";
import Link from "next/link";
import { FaArtstation, FaLinkedin, FaFacebook } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(60vh)] p-4">
      <div className="flex flex-col text-center w-full max-w-md">
        {/* Heading with responsive text size */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-bold tracking-widest mb-6 sm:mb-8 md:mb-10">
          Let&apos;s Talk
        </h1>

        {/* Divider with responsive width */}
        <div className="w-48 sm:w-64 md:w-80 h-[1px] bg-primary mx-auto mb-6 sm:mb-8 md:mb-10"></div>

        {/* Contact information with responsive text and spacing */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="text-lg sm:text-xl text-foreground font-light tracking-widest mb-2 sm:mb-3">
            +972 527 980 449
          </p>
          <p className="text-lg sm:text-xl text-foreground font-light tracking-widest mb-2 sm:mb-3">
            bolt68@walla.com
          </p>
          <p className="text-lg sm:text-xl text-foreground font-light tracking-widest mb-2 sm:mb-3">
            Israel
          </p>
        </div>

        {/* Social links with responsive sizing and spacing */}
        <div className="flex justify-center">
          <div className="flex justify-around w-32 sm:w-40 md:w-48">
            <Link
              href="https://gili_akashi66.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <FaArtstation className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-foreground hover:text-muted-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gili-lipschitz-4b5479233"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-foreground hover:text-muted-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.facebook.com/people/%D7%92%D7%99%D7%9C%D7%99-%D7%9C%D7%99%D7%A4%D7%A9%D7%99%D7%A5/pfbid0ybse66N7BxEpVo7vnk8eo5GvWzRBy3N2zSVwcadEemzPgdubjf93bsKQrXFJB9fbl/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-foreground hover:text-muted-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
