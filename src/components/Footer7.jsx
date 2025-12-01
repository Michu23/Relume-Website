"use client";

import React from "react";

export function Footer7() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
          <a href="#" className="mb-8">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
              className="inline-block"
            />
          </a>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <a href="#">Book online</a>
            </li>
            <li className="font-semibold">
              <a href="#">Our services</a>
            </li>
            <li className="font-semibold">
              <a href="#">Pricing rates</a>
            </li>
            <li className="font-semibold">
              <a href="#">Past work</a>
            </li>
            <li className="font-semibold">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-center justify-between pt-6 pb-4 text-center md:flex-row md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of service</a>
            </li>
            <li className="underline">
              <a href="#">Cookie settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
