export interface Builder {
  name: string;
  photoUrl: string;
  bullets: string[];
  building?: string;
  building_link?: string;
  link: string;
}

export const builders: Builder[] = [
  {
    name: "Alexander Hamidi",
    photoUrl: "/images/builders/alex.png",
    bullets: [
      "interested in browsers, personal AI hardware, and post-training",
      "sold startup to the government last spring",
      "left amazon to build SoTA people search"
    ],
    building: "This club :)",
    building_link: "https://sdxucsd.com",
    link: "https://ahamidi.me"
  },
  
  
];