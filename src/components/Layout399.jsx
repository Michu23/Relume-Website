"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout399() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">How we work</h2>
            <p className="text-medium">
              Four simple steps from call to completion
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="text-small mb-2 font-semibold">One</p>
                <h3 className="heading-h5 mb-2 font-bold">
                  Request your repair
                </h3>
                <p>Call us or book online with details</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="text-small mb-2 font-semibold">Two</p>
                <h3 className="heading-h5 mb-2 font-bold">
                  Schedule your appointment
                </h3>
                <p>We confirm same-day or next available slot</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="text-small mb-2 font-semibold">Three</p>
                <h3 className="heading-h5 mb-2 font-bold">
                  Our technician arrives and works
                </h3>
                <p>Licensed, insured, and ready to solve it</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="text-small mb-2 font-semibold">Four</p>
                <h3 className="heading-h5 mb-2 font-bold">
                  Guaranteed satisfaction and warranty
                </h3>
                <p>One year labour warranty on all repairs</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Done"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Done
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
