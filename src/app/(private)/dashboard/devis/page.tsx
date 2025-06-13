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
import React, { useMemo, useState } from "react";

interface Devis {
  id: string;
  numero: string;
  client: string;
  date: string;
  statut: "Envoyé" | "Accepté" | "Refusé" | "En attente";
  montant: number;
}

const MOCK_DEVIS: Devis[] = [
  {
    id: "1",
    numero: "DEV001",
    client: "Entreprise ABC",
    date: "31/05/2025",
    statut: "Envoyé",
    montant: 5000,
  },
  {
    id: "2",
    numero: "DEV002",
    client: "Société XYZ",
    date: "28/05/2025",
    statut: "Accepté",
    montant: 12000,
  },
  {
    id: "3",
    numero: "DEV003",
    client: "Client DEF",
    date: "15/05/2025",
    statut: "En attente",
    montant: 7500,
  },
];

export default function DevisPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filteredDevis = useMemo(() => {
    const lower = search.toLowerCase();
    return MOCK_DEVIS.filter(
      (d) =>
        d.numero.toLowerCase().includes(lower) ||
        d.client.toLowerCase().includes(lower) ||
        d.statut.toLowerCase().includes(lower)
    );
  }, [search]);

  const paginatedDevis = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredDevis.slice(start, start + perPage);
  }, [filteredDevis, page]);

  const totalPages = Math.ceil(filteredDevis.length / perPage);

  function handlePrevPage() {
    setPage((p) => Math.max(1, p - 1));
  }

  function handleNextPage() {
    setPage((p) => Math.min(totalPages, p + 1));
  }

  function statutBadgeColor(statut: Devis["statut"]) {
    switch (statut) {
      case "Accepté":
        return "bg-green-100 text-green-700";
      case "Envoyé":
        return "bg-blue-100 text-blue-700";
      case "Refusé":
        return "bg-red-100 text-red-700";
      case "En attente":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "";
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">📄 Vos Devis</h2>
        <Input
          type="search"
          placeholder="Rechercher un devis, client, statut..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="max-w-sm"
          aria-label="Recherche devis"
        />
      </div>

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
          {paginatedDevis.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                Aucun devis trouvé.
              </TableCell>
            </TableRow>
          )}

          {paginatedDevis.map((devis) => (
            <TableRow key={devis.id}>
              <TableCell className="font-medium">{devis.numero}</TableCell>
              <TableCell>{devis.client}</TableCell>
              <TableCell>{devis.date}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${statutBadgeColor(
                    devis.statut
                  )}`}
                >
                  {devis.statut}
                </span>
              </TableCell>
              <TableCell className="text-right">
                {devis.montant.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "MAD",
                })}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button size="sm" variant="outline">
                  Voir
                </Button>
                <Button size="sm" variant="outline">
                  Éditer
                </Button>
                <Button size="sm" variant="destructive">
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 mt-6">
          <Button onClick={handlePrevPage} disabled={page === 1}>
            Précédent
          </Button>
          <span>
            Page {page} sur {totalPages}
          </span>
          <Button onClick={handleNextPage} disabled={page === totalPages}>
            Suivant
          </Button>
        </div>
      )}
    </div>
  );
}
