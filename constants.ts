export type EventType = "hackathon" | "talk" | "demo day";

export interface Event {
  id: string;
  name: string;
  type: EventType;
  description: string;
  images: string[];
  event_link: string;
  image_urls: string[];
  event_date: string;
}

export interface Project {
  id: string
  name: string;
  project_link: string;
  description: string;
  founder_name: string;
  founder_link: string;
  founder_photo_url: string;
  image_urls: string[];
}

