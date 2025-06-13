import { Button } from "@/components/ui/button";
import { Ce_Que_Nous_Offrons, conflicts, PricingCardData } from "@/data/data";
import { ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import DigitalBilling from "../assets/2150062347-Photoroom.png";
import Footer from "./(navigation)/Footer";
import Header from "./(navigation)/Header";

import HomePageForm from "@/forms/HomePageForm";
import FaqSection from "./_components/FaqSection";
import PricingCard from "./_components/PricingCard";

export default function HomePage() {
  return (
    <div className="overflow-hidden selection:bg-gray-200">
      <div className="relative">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Header />
        <section className="relative  py-32">
          <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-6 md:px-0">
            <h1 className="text-5xl lg:text-7xl font-semibold text-gray-900 leading-tight max-w-4xl">
              Digitalisez votre entreprise
            </h1>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-semibold text-primary max-w-3xl">
              Choisissez l’élite de la facturation
            </h2>
            <p className="mt-6 max-w-2xl text-gray-600 text-lg sm:text-xl">
              Une facture en trois clics : rapidité, simplicité et organisation.
              La facturation n’a jamais été aussi facile !
            </p>

            <Button
              className="mt-10 py-6 text-lg cursor-pointer gap-3 bg-primary hover:bg-[#1669c1] text-white font-semibold rounded-lg shadow-lg transition"
              aria-label="Commencer"
            >
              Commencer
              <ArrowRightCircleIcon className="size-6" />
            </Button>

            <div className="mt-16 w-full max-w-4xl rounded-lg overflow-hidden">
              <Image
                src={DigitalBilling}
                alt="Illustration facturation"
                className="object-cover w-full h-auto"
                priority
                width={850}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container max-w-5xl mx-auto text-center px-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Les <span className="text-primary">Problématiques</span>{" "}
              fréquentes
            </h2>
          </div>

          <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            {conflicts.map(
              ({ title, description, icon: Icon, backgroundImage }, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row items-center sm:items-start bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="flex-shrink-0 w-full sm:w-48 h-48 rounded-2xl overflow-hidden shadow-inner">
                    <Image
                      src={backgroundImage?.src}
                      width={400}
                      height={400}
                      alt={title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="flex flex-col justify-center text-left mt-6 sm:mt-0 sm:ml-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E3F2FD] mb-4 shadow-sm">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-6 md:px-0 mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ce que nous{" "}
              <span className="text-primary underline underline-offset-8 decoration-4 decoration-primary/40">
                Offrons
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
              Découvrez nos services pensés pour simplifier la gestion de votre
              facturation avec efficacité et fiabilité.
            </p>
          </div>

          <div className="container max-w-7xl mx-auto px-6 md:px-0">
            <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Ce_Que_Nous_Offrons.map(
                ({ title, description, icon: Icon }, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-400 cursor-pointer"
                  >
                    <div
                      className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary 
                       transition-transform duration-300 group-hover:scale-110"
                    >
                      <Icon size={40} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        <section className="">
          <div className="container max-w-7xl mx-auto px-6 md:px-0 text-center">
            <h2 className="text-5xl font-bold mb-16 text-primary tracking-tight">
              Comment ça marche ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {[
                {
                  title: "Inscrivez-vous",
                  description:
                    "Créez un compte en quelques secondes et commencez gratuitement.",
                  icon: "📝",
                },
                {
                  title: "Créez vos factures",
                  description:
                    "Utilisez notre interface simple pour générer vos factures rapidement.",
                  icon: "📄",
                },
                {
                  title: "Suivez vos paiements",
                  description:
                    "Gardez un œil sur vos paiements et relancez vos clients facilement.",
                  icon: "💰",
                },
              ].map(({ title, description, icon }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
                  role="group"
                  aria-label={title}
                >
                  <div
                    className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/20 text-primary text-5xl"
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-xs">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection />

        <section className="py-10">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-center text-primary mb-4">
              Nos Tarifs
            </h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
              Choisissez le plan qui convient le mieux à votre entreprise.
              Simple, transparent, sans engagement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PricingCardData.map((data) => (
                <PricingCard key={data.name} {...data} />
              ))}
            </div>
          </div>
        </section>
        <HomePageForm />
      </div>

      <Footer />
    </div>
  );
}
