"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftCircle, Trash2Icon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function NewInvoicePage() {
  const [items, setItems] = useState([
    { description: "", quantity: 1, unitPrice: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, unitPrice: 0 }]);
  };

  const updateItem = (index, key, value) => {
    const newItems = [...items];
    newItems[index][key] = value;
    setItems(newItems);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );
  const taxRate = 0.2;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const GoToPreviousTab = () => {
    redirect("/dashboard/invoices");
  };

  return (
    <>
      <div className="left-10 top-24 z-60 fixed">
        <Button onClick={GoToPreviousTab} asChild size="icon" variant="ghost">
          <ArrowLeftCircle className="size-10" />
        </Button>
      </div>
      <div className="max-w-5xl mt-6 mx-auto container p-6">
        <h2 className="text-primary text-center md:text-4xl font-bold mb-8">
          Créer votre facture rapidement et efficacement
        </h2>

        <section className="mb-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold">
              Logo de l’entreprise
            </label>
            <Input type="file" accept="image/*" className="w-[240px]" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Nom de l’entreprise
            </label>
            <Input type="text" placeholder="Ex: Mon entreprise SARL" />
            <label className="block mt-4 mb-1 font-semibold">Adresse</label>
            <Input type="text" placeholder="Adresse complète" />
            <label className="block mt-4 mb-1 font-semibold">
              Téléphone / Email
            </label>
            <Input type="text" placeholder="Téléphone ou Email" />
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Informations client</h3>
          <Input
            type="text"
            placeholder="Nom du client ou entreprise"
            className="mb-4"
          />
          <Input type="text" placeholder="Adresse client" className="mb-4" />
          <Input type="text" placeholder="Email / Téléphone client" />
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Détails de la facture</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">
                    Description
                  </th>
                  <th className="border border-gray-300 p-2 text-center w-24">
                    Quantité
                  </th>
                  <th className="border border-gray-300 p-2 text-center w-32">
                    Prix unitaire (MAD)
                  </th>
                  <th className="border border-gray-300 p-2 text-center w-32">
                    Total (MAD)
                  </th>
                  <th className="border border-gray-300 p-2 text-center w-32">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 p-2">
                      <Input
                        type="text"
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) =>
                          updateItem(i, "description", e.target.value)
                        }
                      />
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <Input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(i, "quantity", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <Input
                        type="number"
                        min={0}
                        step={0.01}
                        value={item.unitPrice}
                        onChange={(e) =>
                          updateItem(i, "unitPrice", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {(item.quantity * item.unitPrice).toFixed(2)}
                    </td>
                    <td className="flex items-center justify-center h-12">
                      <Trash2Icon className="size-8 cursor-pointer text-red-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button className="mt-4" onClick={addItem}>
            + Ajouter un article
          </Button>
        </section>

        <section className="mb-8 text-right">
          <p>
            Sous-total: <strong>{subtotal.toFixed(2)} MAD</strong>
          </p>
          <p>
            TVA (20%): <strong>{tax.toFixed(2)} MAD</strong>
          </p>
          <p className="text-lg font-bold">
            Total à payer: {total.toFixed(2)} MAD
          </p>
        </section>

        <div className="text-center">
          <Button size="lg" className="w-full md:w-auto">
            Enregistrer la facture
          </Button>
        </div>
      </div>
    </>
  );
}
