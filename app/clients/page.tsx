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
  const [showVillageCards, setShowVillageCards] = useState(false); // NEW
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

  // NEW group for Village images (order as requested)
  const villageCards: BaseCard[] = [
    { src: "/images/clients/Village_one.png", alt: "Village One" },
    { src: "/images/clients/Village_two.png", alt: "Village Two" },
    {
      src: "/images/clients/everybody_ethiopia_finale.jpg",
      alt: "Everybody Ethiopia Finale",
    },
  ];

  // --- Ethiopia modal routing (ONLY affects the modal) ---
  // PNGs (Village 1/2) -> edge-to-edge transparent modal (no white gutters)
  const isEthiopiaVillage = (src: string | null) =>
    !!src && /\/(Village_one\.png|Village_two\.png)$/i.test(src);
  // JPG finale -> white card so it looks identical in light & dark modes
  const isEthiopiaFinale = (src: string | null) =>
    !!src && /\/everybody_ethiopia_finale\.jpg$/i.test(src);

  // Ethiopia grid thumbnails: fill the 4:3 frame without top/bottom bars for the two PNGs
  const isWideVillageThumb = (src: string) =>
    /\/(Village_one\.png|Village_two\.png)$/i.test(src);

  const handleDaughterImageClick = () => {
    setShowDaughterCards(true);
    setInitialView(false);
  };

  const handleCoverCardClick = () => {
    setShowCoverCards(true);
    setInitialView(false);
  };

  // NEW
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
    setShowVillageCards(false); // NEW
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
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {/* 1) Daughter set (UNCHANGED) */}
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
              <h3 className="text-lg font-medium">אריאלה פסקו עובדיה</h3>
            </div>

            {/* 2) Card/cover set (UNCHANGED) */}
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

            {/* 3) NEW Village set (cover uses the updated image only here) */}
            <div className="flex flex-col items-center gap-4">
              <div
                onClick={handleVillageCardClick}
                className="w-full sm:w-96 sm:h-96 md:h-[30rem] cursor-pointer bg-white dark:bg-neutral-100 ring-1 ring-black/10 dark:ring-white/10 rounded-lg"
              >
                <Image
                  src="/images/clients/Village_one_update.png"
                  alt="Village Cover"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium">אלמוורק יצחק</h3>
            </div>
          </div>
        )}

        {/* Daughter grid (UNCHANGED) */}
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
              אריאלה פסקו עובדיה
            </h2>
          </>
        )}

        {/* Cover/lettering grid (UNCHANGED) */}
        {showCoverCards && (
          <>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* CardPencilHold with its writing */}
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

                {/* CardSitting with its writing */}
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

                {/* CoverBoxBack with FrontDisplayCoverCard */}
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

        {/* NEW: Village grid (ONLY change is the object-fit per image) */}
        {showVillageCards && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {villageCards.map((card) => (
                <div
                  key={card.src}
                  onClick={() => handleImageClick(card.src)}
                  className="relative w-full aspect-[4/3] cursor-pointer bg-white dark:bg-neutral-100 ring-1 ring-black/10 dark:ring-white/10 rounded-lg overflow-hidden"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className={`${
                      isWideVillageThumb(card.src)
                        ? "object-cover"
                        : "object-contain"
                    } transition-transform hover:scale-105`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={false}
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-center mt-4">
              אלמוורק יצחק
            </h2>
          </>
        )}
      </div>

      {/* Modal — ONLY CHANGES APPLY HERE */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Spinner chip */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="rounded-xl px-4 py-3 bg-white/85 dark:bg-black/70 shadow-xl ring-1 ring-black/10 dark:ring-white/10">
                <div className="animate-spin h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-black/30 dark:border-white/30 border-t-black dark:border-t-white"></div>
              </div>
            </div>
          )}

          {isEthiopiaVillage(selectedImage) ? (
            /* ETHIOPIA PNGs: transparent, edge-to-edge (no white gutters) */
            <div
              className="relative w-[min(95vw,1200px)] h-[90vh] rounded-lg shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected illustration"
                fill
                className="object-contain"
                onLoad={() => setIsLoading(false)}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 text-white w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          ) : isEthiopiaFinale(selectedImage) ? (
            /* ETHIOPIA JPG finale: show on a white card so it looks identical in light & dark */
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
          ) : (
            /* EVERYTHING ELSE: original modal */
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
                onLoad={() => setIsLoading(false)}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 text-white w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
