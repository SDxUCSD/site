export type EventType = "hackathon" | "talk" | "demo day";

export interface Event {
  name: string;
  type: EventType;
  description: string;
  images: string[];
  event_link: string;
}

export const events: Event[] = [
  {
    name: "Opennote Founders",
    type: "talk",
    event_link: "https://luma.com/4n0szb1p",
    description: "Opennote Founders discuss their journey from a hackathon project to a YC startup with 50k users",
    images: ["on1.png", "on2.png"]
  },
  {
    name: "Eliam Medina",
    type: "talk",
    event_link: "https://luma.com/pt2s467k",
    description: "Eliam Medina, Founder of Willing and Telora, shares his story and advice on building startups",
    images: ["eliam.png"]
  },
  {
    name: "Perplexity Hack Day",
    type: "hackathon",
    event_link: "https://luma.com/o6649x57i",
    description: "Hackathon sponsored by Perplexity with a $200 prize pool for UCSD students. Hackers built agents for geospatial modeling, a platform to deep research startup ideas, and a brainrot generator",
    images: ["plex1.png", "plex2.png", "plex3.png"]
  },
];
