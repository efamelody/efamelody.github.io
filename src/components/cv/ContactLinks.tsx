import { Globe2, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import type { ResumeContact, ResumeContactKind } from "@/types";

function ContactIcon({
  kind,
  size = 12,
}: {
  kind: ResumeContactKind;
  size?: number;
}) {
  switch (kind) {
    case "email":
      return <Mail size={size} />;
    case "location":
      return <MapPin size={size} />;
    case "github":
      return <Github size={size} />;
    case "linkedin":
      return <Linkedin size={size} />;
    case "website":
      return <Globe2 size={size} />;
  }
}

export default function ContactLinks({ contacts }: { contacts: ResumeContact[] }) {
  return (
    <ul className="space-y-2.5">
      {contacts.map((contact) => {
        const isExternal = contact.href?.startsWith("http");

        const content = (
          <>
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-pink-200/80 bg-white/70 text-pink-600"
              aria-hidden="true"
            >
              <ContactIcon kind={contact.kind} />
            </span>
            <span className="min-w-0 break-words text-[12px] leading-snug text-pink-950/80">
              <span className="sr-only">{contact.label}: </span>
              {contact.value}
            </span>
          </>
        );

        return (
          <li key={contact.label}>
            {contact.href ? (
              <a
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-2.5 rounded-md transition-colors hover:text-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                {content}
              </a>
            ) : (
              <div className="flex items-start gap-2.5">{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
