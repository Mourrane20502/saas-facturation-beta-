export const NavLinks = [
  {
    label: "Accueil",
    href: "accueil",
  },
  {
    label: "À propos",
    href: "a-propos",
  },
  {
    label: "Fonctionnalités",
    href: "fonctionnalites",
  },
  {
    label: "Tarifs",
    href: "tarifs",
  },
  {
    label: "Contact",
    href: "contact",
  },
];

import {
  BarChart2,
  FileArchive,
  Headphones,
  Lock,
  LucideIcon,
  ShieldCheck,
  Smartphone,
  Upload,
  Users,
} from "lucide-react";

export const Ce_Que_Nous_Offrons = [
  {
    title: "Gestion Simplifiée des Factures",
    description:
      "Créez, modifiez et envoyez des factures conformes aux normes marocaines en quelques clics.",
    icon: FileArchive,
  },
  {
    title: "Conformité Fiscale Garantie",
    description:
      "Respect automatique des règles fiscales marocaines, incluant TVA, retenues à la source, et autres obligations.",
    icon: ShieldCheck,
  },
  {
    title: "Suivi des Paiements & Relances Automatisées",
    description:
      "Suivez les paiements reçus et envoyez des rappels personnalisés aux clients en retard.",
    icon: Clock,
  },
  {
    title: "Gestion des Clients & Produits",
    description:
      "Organisez facilement vos contacts et cataloguez vos produits ou services pour facturation rapide.",
    icon: Users,
  },
  {
    title: "Export & Reporting",
    description:
      "Générez des rapports détaillés et exportez vos données comptables pour faciliter la déclaration fiscale.",
    icon: BarChart2,
  },
  {
    title: "Interface Intuitive & Mobile Friendly",
    description:
      "Utilisez votre application partout grâce à une interface fluide, responsive et adaptée aux mobiles.",
    icon: Smartphone,
  },
  {
    title: "Sécurité et Confidentialité",
    description:
      "Vos données sont protégées grâce à un chiffrement robuste et des pratiques de sécurité avancées.",
    icon: Lock,
  },
  {
    title: "Support Technique et Mise à Jour",
    description:
      "Bénéficiez d’un support réactif et de mises à jour régulières selon l’évolution de la législation.",
    icon: Headphones,
  },
];

import { AlertTriangle, Clock, X } from "lucide-react";
import { StaticImageData } from "next/image";
import documents from "../assets/documents.jpg";
import wasteoftime from "../assets/wasteoftime.jpg";
export type Conflict = {
  title: string;
  description: string;
  icon: LucideIcon;
  backgroundImage: StaticImageData;
};
export const conflicts: Conflict[] = [
  {
    title: "Perte de Temps",
    description:
      "La gestion manuelle des factures ralentit votre activité et consomme un temps précieux.",
    icon: Clock,
    backgroundImage: wasteoftime,
  },
  {
    title: "Documents Égarés",
    description:
      "Les factures et documents importants se perdent facilement sans un système centralisé.",
    icon: Upload,
    backgroundImage: documents,
  },
  {
    title: "Erreurs Fréquentes",
    description:
      "Les erreurs humaines dans la facturation engendrent des retards et des conflits avec vos clients.",
    icon: X,
    backgroundImage: documents,
  },
  {
    title: "Non-conformité",
    description:
      "Le non-respect des normes légales peut entraîner des pénalités et compliquer votre comptabilité.",
    icon: AlertTriangle,
    backgroundImage: wasteoftime,
  },
];

export type PricingCardType = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  isPopular: boolean;
};
export const PricingCardData: PricingCardType[] = [
  {
    name: "Gratuit",
    price: "0 MAD",
    features: [
      "Gestion de 5 clients",
      "Création de 5 factures par mois",
      "Téléchargement des factures en PDF",
      "Accès à 1 modèle de facture",
      "Support par email (48h)",
      "Interface en français",
      "Facturation en dirhams (MAD)",
    ],
    cta: "Commencer gratuitement",
    isPopular: false,
  },
  {
    name: "Standard",
    price: "199 MAD/mois",
    features: [
      "Clients illimités",
      "Factures illimitées",
      "Personnalisation du logo et des couleurs",
      "Plus de 5 modèles de factures",
      "Rappels de paiement automatiques",
      "Exportation CSV/Excel",
      "Support prioritaire par email (24h)",
      "Ajout de TVA et timbre fiscal",
      "Historique des paiements",
      "Interface en français et arabe",
    ],
    cta: "Choisir Standard",
    isPopular: true,
  },
  {
    name: "Premium",
    price: "299 MAD/mois",
    features: [
      "Toutes les fonctionnalités du plan Standard",
      "Accès multi-utilisateurs (équipe)",
      "Tableau de bord personnalisé",
      "Statistiques de performance",
      "Archivage légal des factures",
      "Signature électronique",
      "Sauvegarde automatique dans le cloud",
      "Support téléphonique dédié",
      "Connexion avec systèmes comptables (API)",
      "Mode hors ligne (mobile/PWA)",
    ],
    cta: "Choisir Premium",
    isPopular: false,
  },
];
export type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: "Comment créer ma première facture ?",
    answer:
      "Après inscription, rendez-vous dans la section “Créer une facture”, remplissez les champs obligatoires, ajoutez vos produits/services, et cliquez sur “Enregistrer”.",
  },
  {
    question: "Quels moyens de paiement puis-je accepter ?",
    answer:
      "Notre plateforme supporte les paiements par carte bancaire, virement bancaire, et paiement mobile. Vous pouvez configurer vos préférences dans “Paramètres > Paiement”.",
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer:
      "Oui, nous utilisons des protocoles de sécurité avancés (SSL/TLS, chiffrement des données) pour garantir la confidentialité et la protection de vos informations.",
  },
  {
    question: "Puis-je exporter mes factures ?",
    answer:
      "Absolument, vous pouvez exporter vos factures en PDF ou CSV depuis la section “Mes factures” pour votre comptabilité.",
  },
  {
    question: "Y a-t-il une période d’essai gratuite ?",
    answer:
      "Oui, nous offrons une période d’essai gratuite de 14 jours pour tester toutes les fonctionnalités sans engagement.",
  },
];
