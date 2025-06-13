"use client";
import { Button } from "@/components/ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { FileText, LogOut, PlusCircle, Settings, Users2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DashboardHeader() {
  const { user } = useUser();

  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background/95 ">
      <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        <Link href="/dashboard" className="text-xl font-semibold text-primary">
          Tableau de bord
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link
            href="/dashboard/invoices"
            className="hover:text-primary flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Factures
          </Link>
          <Link
            href="/dashboard/devis"
            className="hover:text-primary flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Devis
          </Link>
          <Link
            href="/dashboard/clients"
            className="hover:text-primary flex items-center gap-2"
          >
            <Users2 className="w-4 h-4" /> Clients
          </Link>
          <Link
            href="/dashboard/settings"
            className="hover:text-primary flex items-center gap-2"
          >
            <Settings className="w-4 h-4" /> Paramètres
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* <Button variant="outline" asChild>
            <Link
              href="/dashboard/invoices/new"
              className="flex items-center gap-1"
            >
              <PlusCircle className="w-4 h-4" />
              Nouvelle facture
            </Link>
          </Button> */}

          {user && (
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted-foreground hidden sm:block">
                {user.fullName}
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700 uppercase">
                {user.firstName?.[0]}
                {user.lastName?.[0]}
              </div>
              <SignOutButton>
                <Button variant="ghost" size="icon" title="Se déconnecter">
                  <LogOut className="w-5 h-5 text-gray-500" />
                </Button>
              </SignOutButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
