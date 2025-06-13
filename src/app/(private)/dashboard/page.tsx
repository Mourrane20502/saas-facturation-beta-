import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, DollarSign, FileText, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Factures totales",
      value: "12",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "Montant payé",
      value: "8 000 MAD",
      icon: <DollarSign className="w-5 h-5 text-green-600" />,
    },
    {
      label: "Montant dû",
      value: "3 200 MAD",
      icon: <CreditCard className="w-5 h-5 text-red-600" />,
    },
    {
      label: "Clients",
      value: "7",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Espace de travail</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-full">{stat.icon}</div>
              <div>
                <div className="text-lg font-semibold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <Button asChild>
          <Link href="/dashboard/invoices/new">+ Nouvelle facture</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard/clients">Voir les clients</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard/estimates">Voir les devis</Link>
        </Button>
      </div>
    </div>
  );
}
