"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import { receiptContent } from "@/content/items";

export default function Receipt() {
  const {
    items,
    storeName,
    subtitle,
    thankYouMessage,
    websiteUrl,
    githubRepo,
    images,
    creatorName = "Praveen",
    creatorLink = "https://github.com/praveen-tek",
  } = receiptContent as typeof receiptContent & {
    creatorName?: string;
    creatorLink?: string;
  };

  const [lastUpdated, setLastUpdated] = useState<string>("LOADING...");
  const [isDownloading, setIsDownloading] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchLastCommitDate() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${githubRepo}/commits?per_page=1`,
        );
        if (!response.ok) throw new Error("Failed to fetch commit date");

        const data = await response.json();
        if (data && data.length > 0) {
          const rawDate = data[0].commit.committer.date;
          const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          setLastUpdated(formattedDate.toUpperCase());
        }
      } catch (error) {
        console.error("Error fetching last commit date:", error);
        setLastUpdated("DATE UNAVAILABLE");
      }
    }

    fetchLastCommitDate();
  }, [githubRepo]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleDownload = async () => {
    if (!receiptRef.current) return;

    try {
      setIsDownloading(true);
      const dataUrl = await toPng(receiptRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = `${storeName.toLowerCase()}-receipt.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate receipt image:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden gap-6">
      <Image
        src={images.pageBackground}
        alt="Page Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div
        ref={receiptRef}
        className="relative w-full max-w-sm rounded-sm shadow-lg overflow-hidden bg-[#F2F1E8]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.shaderTexture}
          alt="Receipt Texture"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative px-5 sm:px-8 py-6 sm:py-10 font-mono text-gray-900">
          <h1 className="text-xl sm:text-2xl font-bold text-center tracking-wide">
            {storeName}
          </h1>

          {images.headerLogo && (
            <div className="flex justify-center my-2">
              <Image
                src={images.headerLogo}
                alt="Bookify Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          )}

          <p className="text-center text-xs sm:text-sm mt-1">{subtitle}</p>

          <div className="text-[11px] sm:text-xs mt-6">
            <p>BOOKS SUGGESTED BY TEACHERS</p>
            <p>
              LAST UPDATED <b>:</b> {lastUpdated}
            </p>
          </div>

          <div className="border-t border-dashed border-gray-500 my-3" />

          <div className="text-[11px] sm:text-xs flex justify-between font-bold">
            <span>NAME</span>
            <span>PRICE</span>
          </div>

          <div className="text-[16px] sm:text-[8px] mt-2 space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex justify-between gap-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 wrap-break-word"
                >
                  {String(i + 1).padStart(2, "0")} {item.name}
                </a>
                <span className="whitespace-nowrap">₹{item.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-gray-500 my-3" />

          <div className="text-[11px] sm:text-xs flex justify-between">
            <span>ITEM COUNT:</span>
            <span>{items.length}</span>
          </div>
          <div className="text-[11px] sm:text-xs flex justify-between">
            <span>TOTAL:</span>
            <span>₹{total}</span>
          </div>

          <div className="border-t border-dashed border-gray-500 my-3" />

          <p className="text-center text-xs sm:text-sm mt-6">
            {thankYouMessage}
          </p>

          <div className="flex justify-center mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={"/cfs.gif"}
              alt="Receipt Barcode GIF"
              className="h-10 sm:h-12 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          <p className="text-center text-[10px] sm:text-xs mt-2 tracking-wide">
            {websiteUrl}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 z-10 mb-16 sm:mb-0">
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-gray-700">
          <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
            Crafted by{" "}
            <a
              href={creatorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 hover:text-black transition-colors"
            >
              {creatorName}
            </a>
          </span>

          <a
            href={`https://github.com/${githubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-white hover:text-black transition-all"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            Edit Page on GitHub
          </a>
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="fixed bottom-5 right-5 z-50 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full shadow-lg hover:bg-neutral-800 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
      >
        {isDownloading ? "Generating..." : "Download Receipt"}
      </button>
    </div>
  );
}
