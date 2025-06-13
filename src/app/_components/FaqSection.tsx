import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/data";

import React from "react";

export default function FaqSection() {
  return (
    <div>
      <section className="py-20 ">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Foire aux <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Retrouvez les réponses aux questions les plus fréquentes concernant
            notre service de facturation.
          </p>

          <Accordion type="multiple" className="w-full text-left space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      ;
    </div>
  );
}
