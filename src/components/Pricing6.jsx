"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Rates</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">Simple pricing</h1>
          <p className="text-medium">
            No surprises, just honest rates for honest work
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Call-out
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Hourly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="container max-w-md data-[state=active]:animate-tabs"
          >
            <Card className="h-full px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <h6 className="heading-h6 font-bold">Call-out fee</h6>
                <h1 className="heading-h1 my-2 font-bold">$35</h1>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>One-time visit charge</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Covers diagnosis and setup</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Licensed technician dispatch</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Same-day availability included</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Materials billed at cost</p>
                </div>
              </div>
              <Button title="Book now" className="w-full">
                Book now
              </Button>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="container max-w-md data-[state=active]:animate-tabs"
          >
            <Card className="h-full px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <h6 className="heading-h6 font-bold">Hourly rate</h6>
                <h1 className="heading-h1 my-2 font-bold">$50</h1>
                <p className="mt-2 font-medium">
                  Twenty percent off the next hour
                </p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>First hour at standard rate</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Discount applies automatically</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Half-day and full-day options</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Materials billed separately</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>One-year labour warranty</p>
                </div>
              </div>
              <Button title="Book now" className="w-full">
                Book now
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
