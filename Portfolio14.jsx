"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Work we've completed
          </h2>
          <p className="text-medium">
            Before and after jobs across the Denver metro area
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Kitchen tap replacement</a>
              </h3>
              <p>Leaking tap fixed in under an hour</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Plumbing</a>
                </Badge>
                <Badge>
                  <a href="#">Quick fix</a>
                </Badge>
                <Badge>
                  <a href="#">Arvada</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Basement wall repair</a>
              </h3>
              <p>Water damage restoration and fresh paint</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Carpentry</a>
                </Badge>
                <Badge>
                  <a href="#">Restoration</a>
                </Badge>
                <Badge>
                  <a href="#">Denver</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Interior wall painting</a>
              </h3>
              <p>Two-bedroom apartment refreshed in one day</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Painting</a>
                </Badge>
                <Badge>
                  <a href="#">Interior</a>
                </Badge>
                <Badge>
                  <a href="#">Lakewood</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Deck staining and sealing</a>
              </h3>
              <p>Weathered wood restored to new condition</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Carpentry</a>
                </Badge>
                <Badge>
                  <a href="#">Outdoor</a>
                </Badge>
                <Badge>
                  <a href="#">Littleton</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Gutter cleaning and repair</a>
              </h3>
              <p>Clogged gutters cleared and sealed</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Maintenance</a>
                </Badge>
                <Badge>
                  <a href="#">Exterior</a>
                </Badge>
                <Badge>
                  <a href="#">Westminster</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Furniture assembly and TV mounting</a>
              </h3>
              <p>Entertainment centre built and secured</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Assembly</a>
                </Badge>
                <Badge>
                  <a href="#">Installation</a>
                </Badge>
                <Badge>
                  <a href="#">Boulder</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
