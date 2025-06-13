"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useState } from "react";

type Invoice = {
  id: string;
  client: string;
  date: string;
  status: "Payée" | "En attente" | "En retard";
  amount: number;
};

const invoicesData: Invoice[] = [
  {
    id: "INV001",
    client: "Entreprise ABC",
    date: "31/05/2025",
    status: "Payée",
    amount: 1200,
  },
  {
    id: "INV002",
    client: "Société XYZ",
    date: "15/05/2025",
    status: "En attente",
    amount: 850,
  },
  {
    id: "INV003",
    client: "Startup 123",
    date: "28/04/2025",
    status: "En retard",
    amount: 450,
  },
];

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInvoices = invoicesData.filter(({ id, client, status }) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      id.toLowerCase().includes(lowerSearch) ||
      client.toLowerCase().includes(lowerSearch) ||
      status.toLowerCase().includes(lowerSearch)
    );
  });

  const handleView = (id: string) => {
    console.log("Voir facture", id);
    // Ici tu pourrais router vers la page détail facture
  };

  const handleDownloadPDF = (id: string) => {
    console.log("Télécharger PDF facture", id);
  };

  const handleDelete = (id: string) => {
    if (confirm("Voulez-vous vraiment supprimer cette facture ?")) {
      console.log("Supprimer facture", id);
    }
  };

  const statusColors = {
    Payée: "bg-green-100 text-green-700",
    "En attente": "bg-yellow-100 text-yellow-700",
    "En retard": "bg-red-100 text-red-700",
  };

  return (
    <>
      <div className="max-w-7xl container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              📄 Vos Factures
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Gérez toutes vos factures : suivez les paiements, filtrez par
              client ou statut, et créez de nouvelles factures en un clic.
            </p>
          </div>
          <Button asChild>
            <Link href="/dashboard/invoices/new">+ Nouvelle facture</Link>
          </Button>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-4xl mx-auto my-4">
          <Input
            placeholder="Rechercher une facture, client ou numéro..."
            className="w-full"
            type="search"
            aria-label="Recherche factures"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Numéro</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Montant</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center p-6">
                    Aucune facture trouvée.
                  </TableCell>
                </TableRow>
              ) : (
                filteredInvoices.map(({ id, client, date, status, amount }) => (
                  <TableRow key={id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{id}</TableCell>
                    <TableCell>{client}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${statusColors[status]}`}
                      >
                        {status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {amount.toLocaleString()} MAD
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleView(id)}
                      >
                        Voir
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownloadPDF(id)}
                      >
                        PDF
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(id)}
                      >
                        Supprimer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
