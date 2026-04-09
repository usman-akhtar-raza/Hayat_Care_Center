import Image from "next/image";
import Link from "next/link";
import { contactDetails, footerLinkGroups } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="mt-14 bg-[var(--brand-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr_0.9fr]">
        <div >
          <Image
            src="/hayat-logo.jpg"
            alt="Hayat Care Center"
            width={220}
            height={80}
            className="h-auto w-[180px] rounded-2xl bg-white "
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
            Hayat Care Center brings together assisted support, life enrichment,
            hospitality, and family peace of mind in one welcoming community.
          </p>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-blue-100">
              {group.links.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            <li>{contactDetails.address}</li>
            <li>
              <a href={contactDetails.phoneHref} className="hover:text-white">
                {contactDetails.phoneLabel}
              </a>
            </li>
            <li>
              <a href={contactDetails.supportHref} className="hover:text-white">
                {contactDetails.supportLine}
              </a>
            </li>
            <li>{contactDetails.email}</li>
            <li>{contactDetails.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-blue-200 sm:flex-row">
          <p>© {new Date().getFullYear()} Hayat Care Center. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
