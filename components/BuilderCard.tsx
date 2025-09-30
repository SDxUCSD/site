import Image from 'next/image';
import Link from 'next/link';

interface BuilderCardProps {
  name: string;
  photoUrl: string;
  bullets: string[];
  building?: string;
  building_link?: string;
  link: string;
}

export default function BuilderCard({
  name,
  photoUrl,
  bullets,
  building,
  building_link,
  link
}: BuilderCardProps) {
  return (
    <div className="border border-zinc-500 rounded-lg p-6 flex gap-6 shadow-lg">
      <div className="flex-shrink-0">
        <Image
          src={photoUrl}
          alt={name}
          width={1000}
          height={1000}
          className="rounded-lg object-cover w-[150px] h-[180px]"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{name.toLowerCase()}</h3>
        {building && (
          <p className="text-sm text-gray-400 mb-3">
            building: {building.toLowerCase()}{' '}
            {building_link && (
              <>
                (
                <Link
                  href={building_link.startsWith('http') ? building_link : `https://${building_link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {building_link}
                </Link>
                )
              </>
            )}
          </p>
        )}
        <ul className="space-y-1 mb-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-300 flex items-start">
              <span className="mr-2">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors break-all"
        >
          {link}
        </Link>
      </div>
    </div>
  );
}