export const services = [
  {
    title: "Nursing Supervision",
    description:
      "On-site nurses support medication management, vitals monitoring, and day-to-day wellness.",
    icon: "M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Zm0-10V7m-2 2h4",
  },
  {
    title: "Daily Living Support",
    description:
      "Respectful assistance with grooming, mobility, hygiene, and personalized routines.",
    icon: "M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 20a8 8 0 1 1 16 0",
  },
  {
    title: "Cognitive & Memory Activities",
    description:
      "Structured games, movement, and mental fitness activities designed for active aging.",
    icon: "M12 3v2m5.66 2.34-1.42 1.42M21 12h-2m-2.76 6.24-1.42-1.42M12 21v-2m-4.24-.76-1.42 1.42M5 12H3m2.34-4.66 1.42 1.42M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
  },
  {
    title: "Meals & Nutrition",
    description:
      "Balanced meals and snacks with accommodations for personal and medical dietary needs.",
    icon: "M3 4h18M8 4v16m8-16v16M4 9h4m8 0h4M4 15h4m8 0h4",
  },
  {
    title: "Transportation Coordination",
    description:
      "Door-to-door planning and dependable transportation support for members and families.",
    icon: "M8 17h8M7 7h10l2 6H5l2-6Zm1 10a1 1 0 1 0 0 .01M16 17a1 1 0 1 0 0 .01",
  },
  {
    title: "Family Respite Support",
    description:
      "Reliable daytime care that gives families confidence and breathing room in their routine.",
    icon: "M12 21c-4.42 0-8-3.58-8-8S7.58 5 12 5s8 3.58 8 8-3.58 8-8 8Zm-1-12v4l3 2",
  },
] as const;

export const processSteps = [
  {
    step: "Step 1",
    title: "Share Care Needs",
    detail:
      "Tell us about medical, social, and schedule needs so we can recommend the right plan.",
  },
  {
    step: "Step 2",
    title: "Assessment & Eligibility",
    detail:
      "We guide your family through eligibility, accepted coverage, and an in-person center tour.",
  },
  {
    step: "Step 3",
    title: "Begin Personalized Care",
    detail:
      "Your loved one starts with a tailored day program and a care plan that evolves over time.",
  },
] as const;

export const trustPoints = [
  {
    title: "Individualized Care Plans",
    text: "Each member receives a plan aligned with physical, social, and emotional goals.",
  },
  {
    title: "Clear Family Communication",
    text: "Routine updates, transparent expectations, and easy access to our staff.",
  },
  {
    title: "Safety & Compliance Focus",
    text: "Rights-focused care and standards families expect when choosing a center.",
  },
  {
    title: "Care Team You Can Trust",
    text: "Background-checked staff trained in respectful support and engagement.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Hayat gave my mother structure, companionship, and joy again. We saw the difference in the first week.",
    name: "Fatima A.",
    role: "Daughter of Member",
  },
  {
    quote:
      "Their team helped us through enrollment and insurance questions quickly. The process felt simple and respectful.",
    name: "Michael R.",
    role: "Family Caregiver",
  },
  {
    quote:
      "The activities are meaningful and the staff are professional. I can work knowing my father is in good hands.",
    name: "Sara K.",
    role: "Family Member",
  },
  {
    quote:
      "Transportation and schedule coordination made everything easier for our family from day one.",
    name: "Daniel L.",
    role: "Son of Member",
  },
  {
    quote:
      "The staff know every member by name and actually care about progress, not just attendance.",
    name: "Nadia H.",
    role: "Family Guardian",
  },
  {
    quote:
      "I feel safer and happier here. I made friends and look forward to activities each week.",
    name: "Member Testimonial",
    role: "Program Member",
  },
] as const;

export const faqs = [
  {
    q: "Who is a good fit for Hayat Care Center?",
    a: "Adults who need daytime supervision, social engagement, nursing support, or structured routines are often a strong fit.",
  },
  {
    q: "How long does enrollment take?",
    a: "Most families complete intake and eligibility review within 5-7 business days depending on documentation and coverage.",
  },
  {
    q: "Can family or caregivers join the first visit?",
    a: "Yes. We encourage family participation during the tour and assessment so everyone feels informed and confident.",
  },
  {
    q: "What information should we prepare?",
    a: "Bring basic identification, insurance details, medication list, and any relevant care or mobility notes.",
  },
  {
    q: "Do you assist with insurance and coverage questions?",
    a: "Yes. Our team helps families understand accepted plans, paperwork, and eligibility steps.",
  },
  {
    q: "Can members attend part-time schedules?",
    a: "Yes. Flexible schedules are available depending on care needs and program capacity.",
  },
] as const;

export const stats = [
  { value: "10+", label: "Years serving families" },
  { value: "500+", label: "Members supported" },
  { value: "98%", label: "Family satisfaction target" },
  { value: "24/7", label: "Care coordination support" },
] as const;

export const coverageOptions = [
  "Medicaid Support",
  "Medicare Guidance",
  "Managed Care Plans",
  "Referral Assistance",
] as const;

export const contactDetails = {
  phoneHref: "tel:+11234567890",
  phoneLabel: "(123) 456-7890",
  email: "info@hayatcarecenter.com",
  address: "123 Care Boulevard, Springfield, IL 62701",
  hours: "Mon-Fri 7:00 AM - 6:00 PM",
} as const;
