import Header from "@/components/Header";
import EventSlideshow from "@/components/EventSlideshow";
import { getEvents } from "@/lib/supabase";

export default async function Gallery() {
  const events = await getEvents();
  console.log(events)

  return (
    <>
      <Header />
      <div className="bg-zinc-900/95 w-full">
        {events.map((event) => (
          <EventSlideshow key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}