export type DeveloperType = {
  id: number;
  type: string[];
  title: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  price: string;
  images: string[];
};

export type NormalizeDeveloperType = {
  id: number;
  type: string[];
  title: string;
  description: string;
  price: string;
  images: string[];
};
