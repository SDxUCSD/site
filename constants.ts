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
    description: "An intensive day of hacking and innovation",
    images: ["on1.png", "on2.png"]
  },
  {
    name: "Eliam Medina",
    type: "talk",
    event_link: "https://luma.com/pt2s467k",
    description: "Inspiring talks from industry leaders",
    images: ["eliam.png"]
  },
  {
    name: "Perplexity Hack Day",
    type: "hackathon",
    event_link: "https://luma.com/o6649x57",
    description: "Showcasing groundbreaking projects",
    images: ["plex1.png", "plex2.png", "plex3.png"]
  },
];
