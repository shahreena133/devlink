export type Resource = {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  docsUrl: string;
  pricing: string;
  installCommand: string;
  relatedTools: string[];
};