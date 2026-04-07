import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Enrollment", href: "/enrollment" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-14 bg-[var(--brand-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Image
            src="/logo.jpg"
            alt="Hayat Adult Daycare and Community Center"
            width={220}
            height={26}
            className="h-min:[60px] w-30 rounded-lg bg-white p-2"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
            Compassionate adult daycare that supports health, independence, and
            social connection for every member and peace of mind for families.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            <li>123 Care Boulevard, Springfield, IL 62701</li>
            <li>
              <a href="tel:+11234567890" className="hover:text-white">
                (123) 456-7890
              </a>
            </li>
            <li>info@hayatcarecenter.com</li>
            <li>Mon-Fri 7:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-blue-200 sm:flex-row">
          <p>© {new Date().getFullYear()} Hayat Care Center. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
