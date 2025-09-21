"use client";
import React, { useState } from "react";
import Image from "next/image";

interface BaseCard {
  src: string;
  alt: string;
}

const Page = () => {
  const [showDaughterCards, setShowDaughterCards] = useState(false);
  const [showCoverCards, setShowCoverCards] = useState(false);
  const [showVillageCards, setShowVillageCards] = useState(false);
  const [initialView, setInitialView] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const daughterCards: BaseCard[] = [
    {
      src: "/images/clients/DaughterHuggingPillowNoText.jpg",
      alt: "Daughter Hugging Pillow",
    },
    {
      src: "/images/clients/MomHuggingDaughter.jpg",
      alt: "Mom Hugging Daughter",
    },
    {
      src: "/images/clients/MomKissingDaughter.jpg",
      alt: "Mom Kissing Daughter",
    },
    { src: "/images/clients/DaughterThinking.jpg", alt: "Daughter Thinking" },
  ];

  const villageCards: BaseCard[] = [
    { src: "/images/clients/Village_one.png", alt: "Village One" },
    { src: "/images/clients/Village_two.png", alt: "Village Two" },
    {
      src: "/images/clients/everybody_ethiopia_finale.jpg",
      alt: "Everybody Ethiopia Finale",
    },
  ];

  const handleDaughterImageClick = () => {
    setShowDaughterCards(true);
    setInitialView(false);
  };

  const handleCoverCardClick = () => {
    setShowCoverCards(true);
    setInitialView(false);
  };

  const handleVillageCardClick = () => {
    setShowVillageCards(true);
    setInitialView(false);
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsLoading(true);
  };

  const resetToInitialView = () => {
    setShowDaughterCards(false);
    setShowCoverCards(false);
    setShowVillageCards(false);
    setInitialView(true);
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-180px)] py-8">
      {!initialView && (
        <div className="mb-8 w-full text-center">
          <button
            onClick={resetToInitialView}
            className="text-foreground hover:opacity-70 transition-opacity"
          >
            ← Back
          </button>
        </div>
      )}

      <div className="w-full px-4 sm:px-6 md:px-8 max-w-7xl">
        {initialView && (
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <div
                onClick={handleDaughterImageClick}
                className="w-full sm:w-96 sm:h-96 md:h-[30rem] cursor-pointer"
              >
                <Image
                  src="/images/clients/DaughterHuggingPillow.jpg"
                  alt="Daughter Hugging Pillow"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-full object-cover transition-transform hover:scale-105"
                  priority
                />
              </div>
              <h3 className="text-lg font-medium">Liron Kol Rega</h3>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div
                onClick={handleCoverCardClick}
                className="w-full sm:w-96 sm:h-96 md:h-[30rem] cursor-pointer"
              >
                <Image
                  src="/images/clients/FrontDisplayCoverCard.jpg"
                  alt="Front Display Cover Card"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium">Shahar Sinai</h3>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div
                onClick={handleVillageCardClick}
                className="w-full sm:w-96 sm:h-96 md:h-[30rem] cursor-pointer"
              >
                <Image
                  src="/images/clients/Village_one.png"
                  alt="Village Cover"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium">Liron Kol Rega</h3>
            </div>
          </div>
        )}

        {showDaughterCards && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {daughterCards.map((card) => (
                <div
                  key={card.src}
                  onClick={() => handleImageClick(card.src)}
                  className="w-full h-96 cursor-pointer"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-center mt-4">
              Liron Kol Rega
            </h2>
          </>
        )}

        {showCoverCards && (
          <>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                  <div
                    onClick={() =>
                      handleImageClick("/images/clients/CardPencilHold.jpg")
                    }
                    className="w-full h-96 cursor-pointer"
                  >
                    <Image
                      src="/images/clients/CardPencilHold.jpg"
                      alt="Card Pencil Hold"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                  <div
                    onClick={() =>
                      handleImageClick(
                        "/images/clients/WritingCardPencilHold.jpg"
                      )
                    }
                    className="w-full h-96 cursor-pointer"
                  >
                    <Image
                      src="/images/clients/WritingCardPencilHold.jpg"
                      alt="Writing for Card Pencil Hold"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div
                    onClick={() =>
                      handleImageClick("/images/clients/CardSitting.jpg")
                    }
                    className="w-full h-96 cursor-pointer"
                  >
                    <Image
                      src="/images/clients/CardSitting.jpg"
                      alt="Card Sitting"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                  <div
                    onClick={() =>
                      handleImageClick("/images/clients/WritingCardSitting.jpg")
                    }
                    className="w-full h-96 cursor-pointer"
                  >
                    <Image
                      src="/images/clients/WritingCardSitting.jpg"
                      alt="Writing for Card Sitting"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div
                    onClick={() =>
                      handleImageClick("/images/clients/CoverBoxBack.jpg")
                    }
                    className="w-full h-96 cursor-pointer"
                  >
                    <Image
                      src="/images/clients/CoverBoxBack.jpg"
                      alt="Cover Box Back"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                  <div
                    onClick={() =>
                      handleImageClick(
                        "/images/clients/FrontDisplayCoverCard.jpg"
                      )
                    }
                    className="w-full h-96 cursor-pointer"
                  >
                    <Image
                      src="/images/clients/FrontDisplayCoverCard.jpg"
                      alt="Front Display Cover Card"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mt-8">
              Shahar Sinai
            </h2>
          </>
        )}

        {showVillageCards && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {villageCards.map((card) => (
                <div
                  key={card.src}
                  onClick={() => handleImageClick(card.src)}
                  className="w-full h-96 cursor-pointer"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-center mt-4">
              Liron Kol Rega
            </h2>
          </>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          <div
            className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-xl">
              <Image
                src={selectedImage}
                alt="Selected illustration"
                width={1200}
                height={800}
                className="rounded-lg object-contain max-h-[90vh]"
                onLoad={() => setIsLoading(false)}
              />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 text-white w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
