import Image from "next/image";
import { SocialNetwork } from "./ui/SocialNetwork";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center sm:justify-center sm:p-8 dark:bg-stone-950 bg:stone-150">
      <div className="w-full h-36 sm:h-1/3 object-center-top fixed top-0 left-0">
        <Image
          src="/img/copacabana.jpg"
          alt="Copacabana Beach, by Nathana Rebouças on Unsplash"
          objectFit="cover"
          objectPosition="center 90%"
          fill
        />
      </div>
      <article className="flex flex-col bg-stone-100 dark:bg-stone-900 rounded-t-none rounded-b-md shadow-stone-100 relative z-1 w-full sm:shadow-sm md:rounded-md sm:max-w-sm pt-12 mx-4 sm:mx-0 grow sm:grow-0">
        <div className="rounded-full w-20 h-20 mx-auto mb-2 border-2 overflow-hidden absolute -top-10 left-1/2 -translate-x-1/2">
          <Image src="/img/me.jpg" alt="Me!" fill />
        </div>

        <div className="w-full border-b border-stone-500/50 p-4">
          <h1 className="text-center mb-1 font-semibold text-2xl">
            Rafa Silveira
          </h1>
          <h2 className="text-center font-thin text-xl">Software engineer</h2>
        </div>

        <div className="w-full border-b border-stone-500/50 p-4 grow">
          <p className="font-thin mb-2">
            Software engineer with 6+ years of web development experience.
            Specialized in crafting intuitive front-end solutions, including
            data visualization tools and brochure websites.
          </p>
          <p className="font-thin mb-2">
            Proficient in JavaScript/TypeScript and the React ecosystem, as well
            as Node.JS. Proven track record collaborating with global startups
            in fast-paced environments, including 1.5+ years of teams
            distributed through Europe, LatAm and the US.
          </p>
          <p className="font-thin">
            Dedicated to continuous learning and comfortable experimenting with
            diverse technologies; adept in Python, PHP, and Java.
          </p>
        </div>

        <div className="w-full p-4 flex justify-center">
          <SocialNetwork kind="linkedin" />
          <SocialNetwork kind="github" />
          <SocialNetwork kind="whatsapp" />
          <SocialNetwork kind="email" />
        </div>
      </article>
    </main>
  );
}
