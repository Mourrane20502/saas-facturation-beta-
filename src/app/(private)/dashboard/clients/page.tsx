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

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}

const MOCK_CLIENTS: Client[] = [
  {
    id: "1",
    name: "Alice Dupont",
    email: "alice@example.com",
    phone: "0612345678",
    company: "Entreprise A",
  },
  {
    id: "2",
    name: "Bob Martin",
    email: "bob@example.com",
    phone: "0698765432",
    company: "Entreprise B",
  },
  {
    id: "3",
    name: "Clara Weiss",
    email: "clara@example.com",
    phone: "0654321876",
    company: "Entreprise C",
  },
  {
    id: "4",
    name: "David Morel",
    email: "david@example.com",
    phone: "0687654321",
    company: "Entreprise D",
  },
  {
    id: "5",
    name: "Eva Laurent",
    email: "eva@example.com",
    phone: "0678123456",
    company: "Entreprise E",
  },
];

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filteredClients = useMemo(() => {
    const lower = search.toLowerCase();
    return MOCK_CLIENTS.filter(
      (c) =>
        c.name.toLowerCase().includes(lower) ||
        c.email.toLowerCase().includes(lower) ||
        c.phone.includes(lower) ||
        c.company.toLowerCase().includes(lower)
    );
  }, [search]);

  const paginatedClients = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredClients.slice(start, start + perPage);
  }, [filteredClients, page]);

  const totalPages = Math.ceil(filteredClients.length / perPage);

  function handlePrevPage() {
    setPage((p) => Math.max(1, p - 1));
  }

  function handleNextPage() {
    setPage((p) => Math.min(totalPages, p + 1));
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          👥 Vos Clients
        </h2>
        <Input
          type="search"
          placeholder="Rechercher un client..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="max-w-sm"
          aria-label="Recherche clients"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Téléphone</TableHead>
            <TableHead>Société</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedClients.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                Aucun client trouvé.
              </TableCell>
            </TableRow>
          )}

          {paginatedClients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium">{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.company}</TableCell>
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

      {/* Pagination */}
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
