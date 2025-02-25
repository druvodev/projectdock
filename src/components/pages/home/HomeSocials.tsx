import { Separator } from "@/components/ui/separator";
import socialIcons, { SocialIcon } from "@/config/icons/social-icons";
import { Link as LinkType } from "@/types/common.type";
import Link from "next/link";

type Props = {
  links: LinkType<SocialIcon>[];
};

const HomeSocials = ({ links }: Props) => {
  return (
    <section className="flex items-center py-5">
      <Separator className="flex-1" />
      {links ? (
        <ul className="icon-list h-fit border rounded-full px-3 py-0">
          {links.map((link) => {
            const Icon = socialIcons[link.icon];
            if (!Icon) return null;
            return (
              <li key={link.id} className="flex items-center">
                <Link
                  href={link.path}
                  className="icon-list_icon"
                  target="_blank"
                  title={link.title}
                >
                  <Icon />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      <Separator className="flex-1" />
    </section>
  );
};

export default HomeSocials;
