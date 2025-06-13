"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import rightsideForm from "../assets/Trial balance sheet and example.jpeg";

const schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  need: z.enum(["facturation", "devis", "suivi clients", "autre"]),
});

export default function HomePageForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      need: "facturation",
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    toast.success("Form Submitted");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="ro overflow-hidden flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8">
          <h3 className="text-3xl text-primary font-bold mb-6 text-center md:text-left">
            Commencez gratuitement
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>Nom complet</Label>
                    <FormControl>
                      <Input
                        placeholder="Ex: Mohamed Mourrane"
                        {...field}
                        className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>Email</Label>
                    <FormControl>
                      <Input
                        placeholder="Ex: contact@entreprise.ma"
                        {...field}
                        type="email"
                        className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="company"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>Entreprise (facultatif)</Label>
                    <FormControl>
                      <Input
                        placeholder="Nom de l'entreprise"
                        {...field}
                        className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="need"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>Quel est votre besoin ?</Label>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Sélectionnez un besoin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="facturation">
                            Facturation
                          </SelectItem>
                          <SelectItem value="devis">
                            Édition de devis
                          </SelectItem>
                          <SelectItem value="suivi clients">
                            Suivi clients
                          </SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full py-3 text-lg font-semibold"
              >
                Envoyer
              </Button>
            </form>
          </Form>
        </div>

        <div className="hidden md:block md:w-1/2">
          <Image
            width={500}
            height={500}
            src={rightsideForm.src}
            alt="Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
