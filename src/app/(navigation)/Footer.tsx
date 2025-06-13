import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 mt-24">
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-primary">FacturePro</h3>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-sm">
            Plateforme de facturation moderne et intuitive pour les
            entrepreneurs et TPE marocains. Gagnez du temps et restez organisé.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary mb-4">
            Navigation
          </h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>
              <Link href="#problemes" className="hover:text-primary">
                Problématiques
              </Link>
            </li>
            <li>
              <Link href="#offres" className="hover:text-primary">
                Offres
              </Link>
            </li>
            <li>
              <Link href="#tarifs" className="hover:text-primary">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-primary">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary mb-4">
            Restez connectés
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Suivez-nous sur les réseaux pour ne rien manquer.
          </p>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="text-gray-500 hover:text-primary transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="text-gray-500 hover:text-primary transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="text-gray-500 hover:text-primary transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border border-b border-gray-300 mt-8"></div>
      <div className="mt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FacturePro. Tous droits réservés.
      </div>
    </footer>
  );
}
