import Header from "@/components/Header";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <div className="mx-auto px-6 pt-32 max-w-4xl">
        <div className="w-full" style={{ height: '800px', background: 'zinc-900'}}>
          <iframe
            src="https://luma.com/embed/calendar/cal-KkffVW3dzHMQmAx/events?lt=dark"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ borderRadius: '15px'}}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}