"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookingButton from "../ui/bookingbutton";

const Hero05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Dein Barbershop in Flawil
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Professionelle Haarschnitte und Bartpflege. Ohne Schnickschnack,
            dafür mit Leidenschaft und Können.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <BookingButton />
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <Link href="/services">Preise</Link>
            </Button>
          </div>
        </div>
        <div className="w-full -z-1 relative aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen rounded-xl lg:rounded-none">
          <Image
            src="/heropic.jpg"
            alt="Barbershop"
            fill
            className="object-cover rounded-xl m-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero05;
