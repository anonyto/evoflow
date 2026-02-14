import {
  Shield, Lock, Eye, FileSearch, AlertTriangle, Server,
  ClipboardCheck, TrendingUp, FileText, Scale, Users, Target,
  Bot, Workflow, Zap, Brain, Cpu, BarChart3,
} from "lucide-react";
import { translations } from "../i18n/translations";

export interface SubService {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  subServices: SubService[];
  features: ServiceFeature[];
  benefits: string[];
}

export const getServices = (language: "en" | "fr" = "en"): ServiceCategory[] => {
  const t = translations[language];
  const sd = t.serviceDetails;

  return [
    {
      id: "cyber",
      slug: "cyber-security",
      title: sd.cyber.title,
      subtitle: sd.cyber.subtitle,
      tagline: sd.cyber.tagline,
      description: sd.cyber.description,
      longDescription: sd.cyber.longDescription,
      icon: Shield,
      subServices: sd.cyber.subServices.map((sub, idx) => ({
        icon: [Lock, Eye, FileSearch, AlertTriangle, Server, Shield][idx] || Shield,
        title: sub.title,
        description: sub.description,
      })),
      features: sd.cyber.features,
      benefits: sd.cyber.benefits,
    },
    {
      id: "digital",
      slug: "digital-transformation",
      title: sd.digital.title,
      subtitle: sd.digital.subtitle,
      tagline: sd.digital.tagline,
      description: sd.digital.description,
      longDescription: sd.digital.longDescription,
      icon: ClipboardCheck,

      subServices: sd.digital.subServices.map((sub, idx) => ({
        icon: [TrendingUp, FileText, Scale, Users, Target, BarChart3][idx] || ClipboardCheck,
        title: sub.title,
        description: sub.description,
      })),
      features: sd.digital.features,
      benefits: sd.digital.benefits,
    },
    {
      id: "ai",
      slug: "ai-automation",
      title: sd.ai.title,
      subtitle: sd.ai.subtitle,
      tagline: sd.ai.tagline,
      description: sd.ai.description,
      longDescription: sd.ai.longDescription,
      icon: Bot,

      subServices: sd.ai.subServices.map((sub, idx) => ({
        icon: [Brain, Bot, Workflow, Zap, Cpu, BarChart3][idx] || Bot,
        title: sub.title,
        description: sub.description,
      })),
      features: sd.ai.features,
      benefits: sd.ai.benefits,
    },
  ];
};

export const services = getServices("en");

export const getServiceBySlug = (slug: string, language: "en" | "fr" = "en") => {
  const allServices = getServices(language);
  return allServices.find((s) => s.slug === slug);
};
