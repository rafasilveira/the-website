import Image from "next/image";

type Network = "email" | "github" | "linkedin" | "whatsapp";
type NetworkData = { href: string; icon: string };

const networksMap: Record<Network, NetworkData> = {
  email: { href: "mailto:rafaelbs159@gmail.com", icon: "/img/icon/email.png" },
  github: {
    href: "https://github.com/rafasilveira",
    icon: "/img/icon/github.png",
  },
  linkedin: {
    href: "https://linkedin.com/in/bsrafael",
    icon: "/img/icon/linkedin.png",
  },
  whatsapp: {
    href: "https://wa.me/5554996830505",
    icon: "/img/icon/whatsapp.png",
  },
};

export function SocialNetwork({ kind }: { kind: Network }) {
  const { href, icon } = networksMap[kind];

  return (
    <a
      href={href}
      className="relative rounded-full p-4 mx-2 transition hover:bg-stone-950 dark:hover:bg-stone-150"
    >
      <Image
        src={icon}
        width="24"
        height="24"
        alt={kind}
        className="dark:invert"
      />
    </a>
  );
}
