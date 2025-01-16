"use client";
import React, { useState } from "react";
import Image from "next/image";

interface BaseCard {
  src: string;
  alt: string;
}

interface CardWithDialogue extends BaseCard {
  dialogueCard: string;
}

const Page = () => {
  const [showDaughterCards, setShowDaughterCards] = useState(false);
  const [showCoverCards, setShowCoverCards] = useState(false);
  const [initialView, setInitialView] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const daughterCards: BaseCard[] = [
    {
      src: "/images/clients/DaughterHuggingPillow.jpg",
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
    {
      src: "/images/clients/DaughterThinking.jpg",
      alt: "Daughter Thinking",
    },
  ];

  type TopRowCard = BaseCard | CardWithDialogue;
  type CoverCardsType = {
    cardSets: {
      main: TopRowCard;
      writing?: string;
    }[];
    additional: string;
  };

  const coverCards: CoverCardsType = {
    cardSets: [
      {
        main: {
          src: "/images/clients/CardPencilHold.jpg",
          alt: "Card Pencil Hold",
          dialogueCard: "/images/clients/WritingCardPencilHold.jpg",
        },
        writing: "/images/clients/WritingCardPencilHold.jpg",
      },
      {
        main: {
          src: "/images/clients/CardSitting.jpg",
          alt: "Card Sitting",
          dialogueCard: "/images/clients/WritingCardSitting.jpg",
        },
        writing: "/images/clients/WritingCardSitting.jpg",
      },
      {
        main: {
          src: "/images/clients/CoverBoxBack.jpg",
          alt: "Cover Box Back",
        },
      },
    ],
    additional: "/images/clients/FrontDisplayCoverCard.jpg",
  };

  const handleDaughterImageClick = () => {
    setShowDaughterCards(true);
    setInitialView(false);
  };

  const handleCoverCardClick = () => {
    setShowCoverCards(true);
    setInitialView(false);
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const resetToInitialView = () => {
    setShowDaughterCards(false);
    setShowCoverCards(false);
    setInitialView(true);
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-180px)] py-8">
      {/* Back button */}
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

      {/* Main content */}
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-7xl">
        {initialView && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div
              onClick={handleDaughterImageClick}
              className="w-full sm:w-96 h-96 cursor-pointer"
            >
              <Image
                src="/images/clients/DaughterHuggingPillow.jpg"
                alt="Daughter Hugging Pillow"
                width={300}
                height={300}
                className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                priority
              />
            </div>
            <div
              onClick={handleCoverCardClick}
              className="w-full sm:w-96 h-96 cursor-pointer"
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
        )}

        {showDaughterCards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        )}

        {showCoverCards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverCards.cardSets.map((set) => (
              <div key={set.main.src} className="flex flex-col gap-4">
                {/* Main card */}
                <div
                  onClick={() => handleImageClick(set.main.src)}
                  className="w-full h-96 cursor-pointer"
                >
                  <Image
                    src={set.main.src}
                    alt={set.main.alt}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                  />
                </div>
                {/* Writing card if it exists */}
                {set.writing && (
                  <div
                    onClick={() => handleImageClick(set.writing!)}
                    className="w-full h-96 cursor-pointer"
                  >
                    <Image
                      src={set.writing}
                      alt={`Writing for ${set.main.alt}`}
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {initialView && (
        <>
          <br />
          <p>(Click Me)</p>
        </>
      )}

      <h2 className="text-2xl font-semibold text-center mt-8">
        Liron Kol Rega
      </h2>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected illustration"
              width={1200}
              height={800}
              className="rounded-lg shadow-xl object-contain max-h-[90vh]"
            />
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
