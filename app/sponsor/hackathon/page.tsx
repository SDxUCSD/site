import Image from "next/image";

export default function HackathonSponsor() {
	return (
		<div className="w-full h-screen flex items-center justify-center bg-black">
			<Image
				src="/hack.png"
				alt="Hackathon Sponsor"
				width={1920}
				height={1080}
				className="max-w-full max-h-full object-contain"
				priority
			/>
		</div>
	);
}
