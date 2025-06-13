"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function SettingsPage() {
  const [username, setUsername] = useState("Mohamed Mourrane");
  const [email, setEmail] = useState("mohamed@example.com");
  const [password, setPassword] = useState("");

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    console.log({ username, email, password });
    alert("Paramètres sauvegardés !");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Paramètres du compte</h1>

      <form
        onSubmit={handleSave}
        className="space-y-6 bg-white p-6 rounded shadow"
      >
        <div>
          <label htmlFor="username" className="block font-medium mb-1">
            Nom d’utilisateur
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Adresse email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Nouveau mot de passe
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Laissez vide pour garder le mot de passe actuel.
          </p>
        </div>

        <Button type="submit">Sauvegarder</Button>
      </form>
    </div>
  );
}
