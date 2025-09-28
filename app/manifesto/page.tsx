import Header from "@/components/Header";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <div className={`mx-auto px-6 pt-32 pb-20 max-w-4xl ${spaceMono.className}`}>
        <div className="space-y-8 text-base leading-relaxed">

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3 className="text-lg font-bold mt-12">History</h3>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>

          <h3 className="text-lg font-bold mt-12">Ok But what do you actually do?</h3>

          <p>
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>
          <p>
checj out the <a href="https://sdxucsd.com" className="text-blue-500">website</a> for more info.

       </p>
          <h3 className="text-lg font-bold mt-12">And who can join?</h3>

          <p>

Any UCSD students interested in technology. only requirement is that you're actively building something. Can be anything - a side project, a small business, an organization, a startup. 
       </p>
        </div>
      </div>
    </div>
  );
}