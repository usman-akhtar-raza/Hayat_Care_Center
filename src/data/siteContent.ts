export const contactDetails = {
  phoneHref: "tel:+11234567890",
  phoneLabel: "(123) 456-7890",
  email: "info@hayatcarecenter.com",
  address: "123 Care Boulevard, Springfield, IL 62701",
  hours: "Daily tours available from 9:00 AM - 6:00 PM",
  supportLine: "(123) 555-0199",
  supportHref: "tel:+11235550199",
} as const;

export const navGroups = [
  {
    label: "Community",
    href: "/about",
    links: [
      { label: "About Us", href: "/about", description: "Get to know Hayat, our setting, and our approach." },
      { label: "Our Facility", href: "/community/our-facility", description: "See the spaces, upgrades, and design that shape daily life." },
      { label: "Testimonials", href: "/testimonials", description: "Hear how residents and families describe the experience." },
    ],
  },
  {
    label: "Amenities & Services",
    href: "/amenities",
    links: [
      { label: "Benefits", href: "/benefits", description: "Meals, wellness, activities, and everything included." },
      { label: "Amenities", href: "/amenities", description: "Comforts and conveniences available each day." },
      { label: "Activities & Events", href: "/activities-events", description: "Social programs, outings, and daily gatherings." },
      { label: "Life Enrichment", href: "/wellness", description: "Wellness and engagement programs at Hayat." },
      { label: "Dining Experience", href: "/dining", description: "Meals, hospitality, and nutrition handled with care." },
      { label: "Weekly Meal Plan", href: "/meal-plan", description: "Seven day menu with breakfast lunch dinner and ingredients." },
    ],
  },
  {
    label: "Living Options",
    href: "/adult-care-center",
    links: [
      {
        label: "Adult Care Center",
        href: "/adult-care-center",
        description: "Structured daytime care with social engagement meals and supervision.",
      },
      {
        label: "Home Care Agency",
        href: "/home-care-agency",
        description: "Personalized in home support for routines personal care and companionship.",
      },
      {
        label: "Non-Medical Transportation",
        href: "/non-medical-transportation",
        description: "Scheduled rides for appointments errands and community visits.",
      },
    ],
  },
  {
    label: "Gallery & Floor Plans",
    href: "/floor-plans",
    links: [
      { label: "Floor Plans", href: "/floor-plans", description: "Browse suite layouts and compare footprints." },
      { label: "Photos", href: "/gallery/photos", description: "View our community spaces, suites, and grounds." },
      { label: "Videos", href: "/gallery/videos", description: "Watch walkthrough tours and community highlights." },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blog",
    links: [
      { label: "Blog", href: "/resources/blog", description: "Articles on senior wellness, lifestyle, and community." },
      { label: "Senior Living Guide", href: "/resources/senior-living-guide", description: "Helpful information for families exploring options." },
      { label: "FAQ", href: "/faq", description: "Common questions answered clearly." },
    ],
  },
  {
    label: "Contact & Careers",
    href: "/contact",
    links: [
      { label: "Contact Us", href: "/contact", description: "Schedule a tour or request a callback." },
      { label: "Careers", href: "/careers", description: "Join the Hayat Care Centers team." },
    ],
  },
] as const;

export const footerLinkGroups = [
  {
    title: "Community",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Facility", href: "/community/our-facility" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Benefits", href: "/benefits" },
      { label: "Amenities", href: "/amenities" },
      { label: "Activities & Events", href: "/activities-events" },
      { label: "Life Enrichment", href: "/wellness" },
      { label: "Dining Experience", href: "/dining" },
      { label: "Weekly Meal Plan", href: "/meal-plan" },
    ],
  },
  {
    title: "Living & Gallery",
    links: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Non-Medical Transportation", href: "/non-medical-transportation" },
      { label: "Floor Plans", href: "/floor-plans" },
      { label: "Photos", href: "/gallery/photos" },
      { label: "Videos", href: "/gallery/videos" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Senior Living Guide", href: "/resources/senior-living-guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
] as const;

export const communityStats = [
  { value: "2", label: "Care paths: Adult Care Center & Home Care Agency" },
  { value: "24/7", label: "Responsive coordination and family updates" },
  { value: "Daily", label: "Structured days at the center—or flexible visits at home" },
  { value: "1:1", label: "Plans built around preferences, safety, and dignity" },
] as const;

export const adultCareCenterSummary = {
  eyebrow: "Adult care center",
  title: "Daytime support that feels social, steady, and dignified",
  body:
    "Hayat’s adult care center is designed for older adults who benefit from supervised daytime engagement—meaningful activities, nourishing meals, and a calm rhythm—while family caregivers work or recharge. It is a community setting with attentive staff, clear communication, and a focus on comfort rather than a clinical feel.",
  bullets: [
    "Structured programming: movement, creativity, conversation, and rest built into the day",
    "Supervision and assistance with personal care needs as part of the plan",
    "Family partnership with practical updates and predictable routines",
  ],
} as const;

export const homeCareAgencySummary = {
  eyebrow: "Home care agency",
  title: "The help you need at home—personal care, companionship, and peace of mind",
  body:
    "When staying home is the goal, Hayat’s home care agency brings reliable caregivers for personal care, medication reminders, meal support, light housekeeping, transportation, and friendly companionship. Care plans are written around your schedule, your priorities, and what “independence with backup” should look like for your household.",
  bullets: [
    "Flexible scheduling—from a few hours a week to more comprehensive coverage",
    "Consistent staffing orientation so visits feel familiar, not fragmented",
    "Transparent communication with family members and care partners",
  ],
} as const;

/** Homepage: deeper comparison of the three service lines */
export const homeVerticalsDeepDive = {
  eyebrow: "Our verticals",
  title: "Three ways we serve—same standards, different settings",
  intro:
    "Hayat is built around three complementary verticals: daytime community care, private-duty home support, and non-medical transportation. Families often start with one and add others when schedules, health, or travel needs change. Below is how each vertical works day to day, and who it tends to fit best.",
  adult: {
    name: "Adult care center",
    tagline: "Structured daytime community care",
    fitFor:
      "Older adults who thrive with routine, social connection, and on-site support during the day—while still sleeping at home with family at night.",
    details: [
      "Arrival, welcome, and a predictable rhythm: meals, activities, rest, and personal care as outlined in the individual plan.",
      "On-site team for oversight, engagement, and gentle redirection when memory or mobility need extra attention.",
      "Family caregivers gain reliable daytime coverage so they can work, rest, or handle errands knowing their loved one is in a staffed environment.",
    ],
    outcomes: ["Supervised social setting", "Nutrition & hydration built into the day", "Transparent handoffs at pickup"],
  },
  home: {
    name: "Home care agency",
    tagline: "Private-duty care in the home you love",
    fitFor:
      "Individuals who want to remain at home with help for bathing, dressing, errands, companionship, or post-hospital recovery—on a schedule that matches your household.",
    details: [
      "Care plans spell out tasks, frequency, and goals; supervisors check in so quality stays consistent visit to visit.",
      "We prioritize caregiver continuity so clients see familiar faces, and we communicate early when a change is unavoidable.",
      "Home care can stand alone or pair with the center—for example, evenings and weekends at home after weekday programming.",
    ],
    outcomes: ["Flexible hours", "Privacy and familiarity of home", "Caregiver notes families can review"],
  },
  transport: {
    name: "Non-medical transportation",
    tagline: "Dependable rides for life outside the home",
    fitFor:
      "Older adults and clients who need safe, scheduled transportation to appointments, errands, or social visits—not emergency medical transport, but the everyday trips that keep independence possible.",
    details: [
      "Door-through-door or curb-to-curb options depending on mobility; drivers oriented to patience, pacing, and clear communication.",
      "Coordination with the center or home care team so pickup windows align with programming or visit schedules.",
      "Advance booking preferred; same-day requests handled when capacity allows.",
    ],
    outcomes: ["Predictable scheduling", "Trained, vetted drivers", "Works alongside center & home care plans"],
  },
} as const;

export const nonMedicalTransportationSummary = {
  eyebrow: "Non-medical transportation",
  title: "Rides that respect your time, mobility, and dignity",
  body:
    "Our non-medical transportation service helps clients get to medical appointments, therapy, the adult day center, shopping, and community events—without treating you like a number on a route. It is not ambulance or emergency care; it is reliable, courteous transport when driving yourself is no longer the best option.",
  bullets: [
    "Scheduled pickups aligned with your care plan and family preferences",
    "Vehicles and assistance levels matched to walkers, wheelchairs, or step-free needs when arranged in advance",
    "Clear communication if a delay happens—we call families, not the other way around",
  ],
} as const;

/** Single campus / location — paired with `contactDetails.address` on the homepage */
export const hayatPrimaryLocation = {
  name: "Main campus — Adult care center",
  area: "Springfield, IL",
  lines: [
    "Daytime programming, dining, activities, and supervised support—all from one welcoming building.",
    "Home care coordination and non-medical transportation are arranged through the same team, so families hear one clear plan.",
    "Tours and consults by appointment; we return calls the same day when you have an urgent question.",
  ],
  ctaLabel: "Plan a tour",
  href: "/contact",
} as const;

export const hayatLocationSectionIntro =
  "Hayat operates from one main campus in Springfield. Whether you need the adult care center, help at home, or ride coordination, you start here—same address, same people who know your name.";

/** Long-form testimonial blocks for the homepage */
export const homeTestimonialStories = [
  {
    quote:
      "The community feels calm, well cared for, and truly welcoming. My father settled in faster than we expected.",
    story:
      "We toured three places. Hayat was the only one where staff greeted people by name and the activity board looked like real life—not a brochure. Six weeks in, Dad is eating better and actually jokes with the dining team. The front desk texts us a quick update when something changes; that alone lowered our stress.",
    name: "Fatima A.",
    role: "Daughter of a center participant",
  },
  {
    quote:
      "What stood out was the balance between support and independence. Attentive without feeling clinical.",
    story:
      "My uncle did not want to feel babysat. The team figured out how much help he would accept and built from there. When he had a rough week, they adjusted without making it a big production. We finally sleep through the night again.",
    name: "Michael R.",
    role: "Family caregiver",
  },
  {
    quote:
      "From meals to activities, the day has structure again. My mother looks forward to going.",
    story:
      "Isolation was eating away at her mood. Having lunch with other people and a reason to get dressed has been as important as any medication change. Staff noticed when she was quieter than usual and called us—we caught a UTI early.",
    name: "Sara K.",
    role: "Daughter of a participant",
  },
  {
    quote:
      "Home care from Hayat let my parents stay in their house together—with real backup we could trust.",
    story:
      "We started with mornings and weekends, then added overnights after a fall scare. The coordinators explained every change in writing. When one aide was out sick, they did not leave us hanging; we always knew who was coming through the door.",
    name: "Daniel L.",
    role: "Son of home care clients",
  },
  {
    quote:
      "Staff know people personally—that shows in greetings, gentle redirection, and family updates.",
    story:
      "As guardian, I need documentation and clarity. Hayat’s notes are specific enough for court updates but still read human. I have fired agencies that treated us like a ticket number; here we feel partnered.",
    name: "Nadia H.",
    role: "Family guardian",
  },
  {
    quote:
      "There is always something happening—but I can still find quiet when I want it.",
    story:
      "I was afraid a center would be loud and chaotic. Hayat has busy hours and calm corners. I pick my level of social time. My family stops worrying because they know I am not home alone all day.",
    name: "Eleanor T.",
    role: "Adult care center participant",
  },
] as const;

export const homeQuickLinks = [
  {
    title: "Adult care center",
    href: "/#adult-day-center",
    description: "Daytime community care, activities, meals, and supervised support on the homepage overview.",
  },
  {
    title: "Home care agency",
    href: "/#home-care-agency",
    description: "Trusted caregivers at home for personal care, companionship, and daily routines.",
  },
  {
    title: "Non-medical transportation",
    href: "/#non-medical-transportation",
    description: "Scheduled rides for appointments and errands—not emergency medical transport.",
  },
  {
    title: "Amenities",
    href: "/amenities",
    description: "Shared spaces, dining, and everyday comforts that shape life at Hayat.",
  },
  {
    title: "Activities & events",
    href: "/activities-events",
    description: "Programs that add structure, joy, and social connection to the week.",
  },
  {
    title: "Center program page",
    href: "/adult-care-center",
    description: "Deeper look at daytime support, staffing, and what families can expect.",
  },
  {
    title: "Schedule a consult",
    href: "/contact",
    description: "Plan a tour, request an in-home assessment, or ask a question—we respond quickly.",
  },
] as const;

/** Short line under “Where to next” on the homepage. */
export const homeQuickPathsIntro =
  "Jump to a section of the site or open a full page—each path is written for families comparing options.";

export const homeFeatureCards = [
  {
    title: "Three ways to receive care",
    text: "Daytime care at the center, private-duty support at home, and non-medical transportation when you need dependable rides—use one or combine them as life changes.",
  },
  {
    title: "Plans that respect independence",
    text: "We match services to ability, preference, and family goals—never a one-size template.",
  },
  {
    title: "Warmth you can feel",
    text: "Hayat blends professional standards with hospitality: clear communication, dignified assistance, and reliable follow-through.",
  },
] as const;

export const trustPoints = [
  {
    title: "Center life with hospitality in mind",
    text: "Shared dining, comfortable lounges, and outdoor areas make the adult care center feel like a community—not an institution.",
  },
  {
    title: "Home care with consistency",
    text: "Predictable visits, respectful boundaries, and caregivers who understand your routines reduce stress for everyone at home.",
  },
  {
    title: "Families stay in the loop",
    text: "Practical updates, responsive coordination, and honest guidance when needs evolve.",
  },
  {
    title: "Safety and dignity together",
    text: "We plan for fall risk, medication routines, nutrition, and mobility—without sacrificing respect or autonomy.",
  },
] as const;

export const amenities = [
  {
    title: "Welcoming Great Room",
    description: "A central gathering area for social connection, casual conversation, and community events.",
  },
  {
    title: "Full-Service Dining Room",
    description: "Restaurant-style dining that brings residents together for chef-led meals and everyday hospitality.",
  },
  {
    title: "Quiet Library & Reading Nook",
    description: "Comfortable places to unwind, reflect, or enjoy time with visiting family members.",
  },
  {
    title: "Beauty & Grooming Space",
    description: "On-site personal care touches that help residents feel polished, comfortable, and confident.",
  },
  {
    title: "Fitness & Wellness Studio",
    description: "A flexible space for movement classes, balance work, and wellness-focused programming.",
  },
  {
    title: "Courtyard & Walking Paths",
    description: "Outdoor areas that encourage fresh air, gentle movement, and a peaceful daily routine.",
  },
  {
    title: "Housekeeping & Laundry Support",
    description: "Practical services that reduce daily burden and let residents focus on enjoying the community.",
  },
  {
    title: "Scheduled Transportation",
    description: "Transportation coordination for appointments, errands, and planned community outings.",
  },
] as const;

export const activityCategories = [
  {
    title: "Social Gatherings",
    text: "Coffee meetups, conversation circles, game afternoons, and hosted celebrations keep the calendar lively.",
  },
  {
    title: "Creative Programs",
    text: "Art, music, storytelling, and guided projects invite residents to stay curious and expressive.",
  },
  {
    title: "Movement & Balance",
    text: "Chair exercise, guided stretching, walking groups, and strength-building routines support confidence.",
  },
  {
    title: "Spiritual & Reflective Moments",
    text: "Residents can join devotionals, quiet reflection, and purpose-centered gatherings throughout the week.",
  },
  {
    title: "Seasonal Events",
    text: "Family socials, holiday celebrations, themed lunches, and visiting performers keep each month fresh.",
  },
  {
    title: "Community Outings",
    text: "Organized trips and local experiences give residents variety while preserving comfort and routine.",
  },
] as const;

export const wellnessPillars = [
  {
    title: "Personal Wellness Planning",
    description: "Each resident receives support that reflects mobility, medications, routines, and personal goals.",
  },
  {
    title: "Daily Living Support",
    description: "Residents can receive help with grooming, dressing, reminders, and other everyday tasks as needed.",
  },
  {
    title: "Strength, Balance & Mobility",
    description: "Movement programming focuses on confidence, safety, and staying active in a comfortable way.",
  },
  {
    title: "Cognitive Engagement",
    description: "Games, guided discussion, memory prompts, and structured activities help keep the mind active.",
  },
  {
    title: "Health Oversight",
    description: "The team monitors changing needs and coordinates with families so support remains consistent.",
  },
  {
    title: "Purposeful Routine",
    description: "A stable rhythm of care, meals, events, and rest helps residents feel grounded and secure.",
  },
] as const;

export const diningFeatures = [
  {
    title: "Chef-Guided Menus",
    text: "Meals are planned to feel familiar, nourishing, and enjoyable while still allowing variety.",
  },
  {
    title: "Flexible Dining Styles",
    text: "Residents can enjoy shared dining experiences, lighter options, and snacks throughout the day.",
  },
  {
    title: "Nutrition With Hospitality",
    text: "Dietary needs are handled with care so residents feel supported without sacrificing enjoyment.",
  },
  {
    title: "Celebration Meals",
    text: "Seasonal events, family meals, and themed dining moments add warmth and occasion to the calendar.",
  },
] as const;

export const services = [
  {
    title: "Personal care & grooming",
    description:
      "Respectful help with bathing, dressing, toileting, and grooming—at the center during the day or in the privacy of home.",
    icon: "M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 20a8 8 0 1 1 16 0",
  },
  {
    title: "Medication reminders & wellness cues",
    description:
      "Structured prompts, observation, and family communication so routines stay steady and changes are noticed early.",
    icon: "M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Zm0-10V7m-2 2h4",
  },
  {
    title: "Meals, hydration & nutrition support",
    description:
      "Hospitality-style dining at the center, or meal preparation and encouragement at home—always aligned with dietary needs.",
    icon: "M4 6h16M7 3v6m10-6v6M5 11h14v8H5z",
  },
  {
    title: "Companionship & engagement",
    description:
      "Friendly conversation, purposeful activities, and gentle motivation so days feel connected—not isolated.",
    icon: "M12 21c-4.42 0-8-3.58-8-8S7.58 5 12 5s8 3.58 8 8-3.58 8-8 8Zm-1-12v4l3 2",
  },
  {
    title: "Light housekeeping & homemaking",
    description:
      "Tidying, laundry help, and organization so energy goes toward health, rest, and time with loved ones.",
    icon: "M3 4h18M8 4v16m8-16v16M4 9h4m8 0h4M4 15h4m8 0h4",
  },
  {
    title: "Transportation & errands",
    description:
      "Escorts to appointments, pharmacy stops, and essential outings—planned with safety and pacing in mind.",
    icon: "M8 17h8M7 7h10l2 6H5l2-6Zm1 10a1 1 0 1 0 0 .01M16 17a1 1 0 1 0 0 .01",
  },
] as const;

export const livingOptionBenefits = [
  {
    title: "Comprehensive Support",
    text: "Residents receive practical help with daily living while preserving autonomy wherever possible.",
  },
  {
    title: "Inclusive Lifestyle Services",
    text: "Dining, programming, transportation, and hospitality services are built into the everyday experience.",
  },
  {
    title: "Experienced Wellness Team",
    text: "Families have peace of mind knowing resident needs are being observed and addressed consistently.",
  },
  {
    title: "Built-In Community Connection",
    text: "Residents benefit from shared experiences, welcoming spaces, and more chances for meaningful interaction.",
  },
  {
    title: "Independence With Backup",
    text: "Support is present when needed, allowing residents to stay confident and involved in their own routines.",
  },
] as const;

export const processSteps = [
  {
    step: "Step 1",
    title: "Schedule A Tour",
    detail: "Meet the community, ask questions, and see the suites, dining spaces, and daily lifestyle firsthand.",
  },
  {
    step: "Step 2",
    title: "Complete A Care Consultation",
    detail: "We review preferences, health routines, support needs, and the kind of living arrangement that fits best.",
  },
  {
    step: "Step 3",
    title: "Plan A Smooth Transition",
    detail: "Our team coordinates move-in details, orientation, and the first weeks of community life with care.",
  },
] as const;

export const coverageOptions = [
  "Private-pay guidance",
  "Move-in planning support",
  "Family consultation",
  "Personalized service review",
] as const;

export const floorPlans = [
  {
    title: "Willow Suite",
    layout: "Suite | One Bath",
    size: "340 sq. ft.",
    description: "A streamlined studio option designed for comfort, ease, and low-maintenance living.",
    features: ["Open sleeping area", "Accessible bath", "Ideal for simplified routines"],
  },
  {
    title: "Juniper One Bedroom",
    layout: "One Bed | One Bath",
    size: "485 sq. ft.",
    description: "A balanced layout with more separation between living and resting space for a home-like feel.",
    features: ["Dedicated bedroom", "Comfortable sitting area", "Great fit for quiet daily routines"],
  },
  {
    title: "Summit Companion",
    layout: "Two Bed | One Bath",
    size: "720 sq. ft.",
    description: "A larger shared layout for residents who value extra room, flexibility, or companion living.",
    features: ["Two sleeping areas", "Expanded living space", "Designed for flexibility"],
  },
] as const;

export const testimonials = [
  {
    quote: "The community feels calm, well cared for, and truly welcoming. My father settled in faster than we expected.",
    name: "Fatima A.",
    role: "Daughter of Resident",
  },
  {
    quote: "What stood out to us was the balance between support and independence. The team is attentive without making it feel clinical.",
    name: "Michael R.",
    role: "Family Caregiver",
  },
  {
    quote: "From the meals to the activities, everything gives the day structure. My mother looks forward to being involved again.",
    name: "Sara K.",
    role: "Resident Family Member",
  },
  {
    quote: "They made the transition easier by communicating clearly and handling the practical details with real patience.",
    name: "Daniel L.",
    role: "Son of Resident",
  },
  {
    quote: "The staff know residents personally, and that shows in how they greet people, redirect gently, and keep families updated.",
    name: "Nadia H.",
    role: "Family Guardian",
  },
  {
    quote: "I like that there is always something happening, but I can also find a quiet place when I want one.",
    name: "Resident Testimonial",
    role: "Community Resident",
  },
] as const;

export const facilitySpaces = [
  {
    title: "Welcome Lobby & Reception",
    description: "A bright, open entry area with comfortable seating, natural light, and a warm tone that sets the standard for the rest of the community.",
  },
  {
    title: "Great Room & Social Lounge",
    description: "A versatile gathering space used for events, casual conversations, family visits, and community celebrations throughout the week.",
  },
  {
    title: "Full-Service Dining Hall",
    description: "A restaurant-style dining room where residents enjoy chef-prepared meals in a relaxed, social atmosphere with table service.",
  },
  {
    title: "Activity & Enrichment Room",
    description: "A dedicated space for creative workshops, game sessions, guided programs, and group activities that keep the calendar full.",
  },
  {
    title: "Library & Quiet Retreat",
    description: "A peaceful reading nook with books, comfortable chairs, and a calm atmosphere for residents who enjoy downtime.",
  },
  {
    title: "Fitness & Wellness Studio",
    description: "An accessible fitness area designed for balance classes, chair exercises, stretching sessions, and wellness-focused routines.",
  },
  {
    title: "Courtyard & Garden Paths",
    description: "Landscaped outdoor areas with shaded seating, walking paths, and garden views that encourage fresh air and gentle movement.",
  },
  {
    title: "Beauty & Grooming Salon",
    description: "An on-site salon where residents can enjoy haircuts, styling, and personal care services in a comfortable setting.",
  },
] as const;

export const blogPosts = [
  {
    slug: "daily-routines-emotional-wellness-senior-living",
    title: "How Daily Routines Support Emotional Wellness In Senior Living",
    excerpt: "A consistent rhythm of meals, activities, and rest can help older adults feel more grounded, confident, and connected to their community.",
    readTime: "5 min",
    date: "March 28, 2026",
    category: "Wellness",
    author: "Hayat Care Team",
    image: "/images/home/gallery-comfortable-lounge.jpg",
    imageAlt: "Older adults enjoying a calm lounge routine at a care center",
    highlights: [
      "Why predictable schedules reduce anxiety and confusion",
      "Simple routines families can support at home",
    ],
    detail: {
      overview:
        "Routine is more than a timetable. For many older adults, it creates emotional safety, reduces stress, and gives each day a clear sense of direction.",
      sections: [
        {
          title: "Why predictability matters",
          content:
            "When morning, mealtimes, social time, and rest happen in a familiar rhythm, older adults can anticipate what comes next. That predictability lowers uncertainty and supports steadier mood.",
        },
        {
          title: "How routines build confidence",
          content:
            "Repeating meaningful daily actions, such as joining breakfast, attending activities, and taking short walks, helps residents feel capable and connected. Small wins throughout the day can improve overall emotional balance.",
        },
        {
          title: "How families can reinforce routine",
          content:
            "Families can align visits and calls with existing routines instead of disrupting them. Coordinating around known activity windows helps loved ones stay engaged and prevents exhaustion from over scheduling.",
        },
      ],
      actionSteps: [
        "Keep wake up and bedtime consistent most days",
        "Plan social activity during the time of day with best energy",
        "Use a visible schedule with simple language and cues",
        "Review and adjust routines as mobility or health needs change",
      ],
    },
  },
  {
    slug: "family-tour-checklist-assisted-living",
    title: "What Families Should Know Before Touring An Assisted Living Community",
    excerpt: "Knowing which questions to ask and what details to notice during a tour can help families make a more informed and confident decision.",
    readTime: "6 min",
    date: "March 15, 2026",
    category: "Family Guide",
    author: "Hayat Care Team",
    image: "/images/home/gallery-reception.jpg",
    imageAlt: "Family arriving at a welcoming reception area",
    highlights: [
      "Tour checklist for safety staffing and service quality",
      "How to compare communities beyond first impressions",
    ],
    detail: {
      overview:
        "A tour should answer practical questions about care quality, communication, and daily life. A structured checklist helps families compare communities fairly.",
      sections: [
        {
          title: "Observe the environment first",
          content:
            "Look at lighting, cleanliness, noise level, wayfinding, and how residents use common spaces. A strong environment should feel warm and active, not rushed or chaotic.",
        },
        {
          title: "Ask about staffing and communication",
          content:
            "Ask who coordinates care plans, how schedule changes are handled, and how families receive updates. Clear communication systems are often the difference between stress and confidence.",
        },
        {
          title: "Review daily programming and dining",
          content:
            "Request a real weekly activity calendar and sample menus. Programs should offer variety and resident choice while dining should reflect nutrition, flexibility, and social opportunity.",
        },
      ],
      actionSteps: [
        "Bring a written checklist and score each stop after the visit",
        "Ask for response times for urgent and non urgent requests",
        "Request to observe an active program, not only staged spaces",
        "Discuss transition support for the first 30 to 60 days",
      ],
    },
  },
  {
    slug: "social-connection-healthy-aging",
    title: "The Role Of Social Connection In Healthy Aging",
    excerpt: "Research consistently shows that regular social interaction improves cognitive health, mood, and overall quality of life for seniors.",
    readTime: "4 min",
    date: "March 3, 2026",
    category: "Health",
    author: "Hayat Care Team",
    image: "/images/home/gallery-dining-social.jpg",
    imageAlt: "Residents sharing a social meal and conversation",
    highlights: [
      "Evidence linking social activity to cognitive outcomes",
      "Group programs that encourage daily participation",
    ],
    detail: {
      overview:
        "Healthy aging is strongly linked to belonging and regular interaction. Social connection supports emotional resilience and can reduce isolation related decline.",
      sections: [
        {
          title: "Connection supports brain health",
          content:
            "Conversations, shared activities, and group participation activate attention, recall, and language. Consistent social contact gives the brain frequent opportunities to stay engaged.",
        },
        {
          title: "Mood improves with meaningful interaction",
          content:
            "Daily social moments, including meals, games, and creative classes, can reduce loneliness and improve outlook. Even short repeated interactions build stronger emotional stability over time.",
        },
        {
          title: "Designing participation for different personalities",
          content:
            "Not every resident prefers large groups. A good program mix includes both lively events and smaller circles so people can participate at a comfortable pace.",
        },
      ],
      actionSteps: [
        "Offer both group events and one to one social moments",
        "Track participation trends and adjust programs monthly",
        "Encourage family involvement in selected social events",
        "Pair new residents with welcoming peers for easier onboarding",
      ],
    },
  },
  {
    slug: "independent-vs-assisted-living-differences",
    title: "Understanding The Difference Between Independent And Assisted Living",
    excerpt: "Choosing the right level of support starts with understanding what each option includes and how it matches your loved one's daily needs.",
    readTime: "7 min",
    date: "February 20, 2026",
    category: "Senior Living",
    author: "Hayat Care Team",
    image: "/images/home/hero-community-care.jpg",
    imageAlt: "Community lifestyle setting with guided care support",
    highlights: [
      "Care level differences and who each model is for",
      "Questions to ask when planning the next care step",
    ],
    detail: {
      overview:
        "Independent living and assisted living serve different care profiles. Matching the right environment to current needs helps families avoid unnecessary disruption.",
      sections: [
        {
          title: "Independent living at a glance",
          content:
            "Independent living is designed for older adults who can manage daily routines with minimal support and primarily want convenience, social access, and reduced home responsibilities.",
        },
        {
          title: "Assisted living at a glance",
          content:
            "Assisted living includes support with daily activities such as medication reminders, mobility, hygiene, and care coordination. The goal is to increase safety while preserving dignity and autonomy.",
        },
        {
          title: "How to decide between options",
          content:
            "Start with real daily patterns, not ideal assumptions. If missed medications, fall concerns, caregiver burnout, or isolation are increasing, assisted living may offer a more stable and sustainable model.",
        },
      ],
      actionSteps: [
        "List all weekly support tasks currently handled by family",
        "Assess safety risks in the current home routine",
        "Compare service scope and staffing model in each community",
        "Plan for expected care changes over the next 12 months",
      ],
    },
  },
  {
    slug: "nutrition-tips-for-senior-energy",
    title: "Nutrition Tips That Help Seniors Stay Energized Throughout The Day",
    excerpt: "Small adjustments to meal timing, hydration, and nutrient balance can make a noticeable difference in how active and alert older adults feel.",
    readTime: "5 min",
    date: "February 8, 2026",
    category: "Nutrition",
    author: "Hayat Care Team",
    image: "/images/home/gallery-wellness-programs.jpg",
    imageAlt: "Nutritious wellness focused meal planning for seniors",
    highlights: [
      "Balanced plate examples for breakfast lunch and dinner",
      "Hydration habits that support energy and focus",
    ],
    detail: {
      overview:
        "Energy and focus in older adults are closely tied to consistent nutrition and hydration. Small meal planning improvements can produce meaningful day to day results.",
      sections: [
        {
          title: "Prioritize balanced meals",
          content:
            "Each meal should combine protein, fiber rich carbohydrates, healthy fats, and colorful produce. Balanced plates help maintain energy without sharp highs and lows.",
        },
        {
          title: "Use meal timing to prevent fatigue",
          content:
            "Long gaps between meals can lead to low energy and irritability. Consistent breakfast, lunch, dinner, and optional light snacks help maintain steadier stamina.",
        },
        {
          title: "Hydration and practical habits",
          content:
            "Older adults may not always feel thirst early. Keeping water visible, serving hydrating foods, and using regular reminders can improve hydration and support cognitive clarity.",
        },
      ],
      actionSteps: [
        "Include protein at each major meal",
        "Offer fruits and vegetables in easy to eat formats",
        "Track hydration goals across the full day",
        "Review medications and appetite patterns with care staff",
      ],
    },
  },
  {
    slug: "creative-activities-healthy-aging-mind",
    title: "How Creative Activities Keep The Mind Sharp With Age",
    excerpt: "Art, music, storytelling, and hands-on projects engage memory and focus in ways that support long-term cognitive health.",
    readTime: "5 min",
    date: "January 25, 2026",
    category: "Wellness",
    author: "Hayat Care Team",
    image: "/images/home/gallery-compassionate-care.jpg",
    imageAlt: "Creative and compassionate activity session for older adults",
    highlights: [
      "Why creative work helps memory attention and mood",
      "Programs families can encourage during the week",
    ],
    detail: {
      overview:
        "Creative engagement is a powerful tool for healthy aging. It activates memory, attention, language, and emotional expression in a way that feels enjoyable and purposeful.",
      sections: [
        {
          title: "Creative work strengthens cognition",
          content:
            "Painting, music, and storytelling require planning, recall, sequencing, and interpretation. These repeated mental actions can help preserve cognitive flexibility over time.",
        },
        {
          title: "Mood and confidence benefits",
          content:
            "Creative sessions can lower stress and provide visible accomplishment. Sharing completed work with peers and family often improves confidence and social engagement.",
        },
        {
          title: "Building a practical weekly plan",
          content:
            "A successful program rotates creative formats and skill levels. Short, frequent sessions are often more sustainable than occasional long events.",
        },
      ],
      actionSteps: [
        "Schedule at least three creative sessions each week",
        "Mix solo and group creative formats",
        "Celebrate participation not perfection",
        "Involve families in monthly showcase moments",
      ],
    },
  },
] as const;

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const seniorLivingGuideTopics = [
  {
    title: "When Is The Right Time To Consider Senior Living?",
    description: "Recognizing the signs that a loved one may benefit from a community setting, including safety concerns, social isolation, and increasing care needs.",
  },
  {
    title: "Types Of Senior Living Communities Explained",
    description: "A clear breakdown of independent living, assisted living, memory care, and skilled nursing so families can compare options with confidence.",
  },
  {
    title: "What To Expect During A Community Tour",
    description: "A practical checklist of things to look for, questions to ask, and details to observe when visiting a senior living community.",
  },
  {
    title: "How To Talk To A Parent About Senior Living",
    description: "Tips for starting a respectful conversation about transitioning to a community, including how to address concerns and set realistic expectations.",
  },
  {
    title: "Financial Planning For Assisted Living",
    description: "An overview of typical costs, payment options, and planning strategies that help families prepare for the financial side of senior care.",
  },
  {
    title: "Making The Transition Smooth And Comfortable",
    description: "Guidance on what to pack, how to personalize a new suite, and ways to help a loved one feel at home during the first weeks.",
  },
] as const;

export const careerOpenings = [
  {
    title: "Certified Nursing Assistant (CNA)",
    type: "Full-Time",
    description: "Provide hands-on daily support to residents with compassion, dignity, and attention to individual care plans.",
  },
  {
    title: "Activities Coordinator",
    type: "Full-Time",
    description: "Plan and lead enrichment programs, social events, and creative workshops that keep residents engaged and connected.",
  },
  {
    title: "Dining Services Associate",
    type: "Part-Time",
    description: "Support meal preparation, table service, and dining room hospitality for residents and their guests.",
  },
  {
    title: "Housekeeping Team Member",
    type: "Full-Time",
    description: "Maintain clean, welcoming living spaces and common areas that reflect the community's standard of care.",
  },
  {
    title: "Front Desk & Reception",
    type: "Part-Time",
    description: "Welcome visitors, coordinate schedules, and serve as a friendly first point of contact for families and residents.",
  },
] as const;

export const careerBenefits = [
  "Competitive pay and shift flexibility",
  "Paid training and professional development",
  "Health, dental, and vision insurance options",
  "Supportive team culture and mentorship",
  "Meaningful work that makes a daily difference",
  "Opportunities for career advancement",
] as const;

export const photoCategories = [
  {
    title: "Exterior & Grounds",
    count: 8,
    description: "Building facades, landscaped pathways, and outdoor seating areas that define the community's curb appeal.",
  },
  {
    title: "Common Areas & Lounges",
    count: 10,
    description: "The lobby, great room, library, and social spaces where residents gather, relax, and connect.",
  },
  {
    title: "Dining Spaces",
    count: 6,
    description: "The main dining hall and private dining areas where meals and celebrations take place.",
  },
  {
    title: "Activity & Wellness Rooms",
    count: 6,
    description: "Fitness studio, enrichment room, and creative spaces designed for daily programming.",
  },
  {
    title: "Suite Interiors",
    count: 10,
    description: "Sample layouts of studio, one-bedroom, and companion suites showing finishes and natural light.",
  },
  {
    title: "Outdoor Living",
    count: 6,
    description: "Courtyards, garden paths, and patio areas that bring nature into the daily routine.",
  },
] as const;

export const videoHighlights = [
  {
    title: "Community Walkthrough Tour",
    description: "A guided tour through the lobby, common areas, dining room, activity spaces, and model suites at Hayat Care Centers.",
    duration: "4:30",
  },
  {
    title: "A Day In The Life At Hayat",
    description: "See how residents spend a typical day, from morning routines and meals to activities, social time, and evening wind-down.",
    duration: "3:15",
  },
  {
    title: "Meet The Hayat Team",
    description: "Hear from the care team, dining staff, and activity coordinators about what makes the Hayat community special.",
    duration: "2:45",
  },
] as const;

export const faqs = [
  {
    q: "Who is Hayat Care Centers for?",
    a: "Hayat serves older adults and families through two offerings: an adult care center for structured daytime support, and a home care agency for personalized help at home. Many families use one service first and add the other later as needs change.",
  },
  {
    q: "What support is available?",
    a: "Depending on the path you choose, Hayat can provide personal care, medication reminders, meals and nutrition support, companionship, light housekeeping, transportation, and clear family communication—always guided by a written plan.",
  },
  {
    q: "Can families tour before making a decision?",
    a: "Yes. We encourage families to visit, see the community atmosphere in person, and speak directly with the Hayat team before moving forward.",
  },
  {
    q: "Are there different suite layouts?",
    a: "Yes. We offer multiple suite styles so families can compare space, routine, and budget preferences before making a selection.",
  },
  {
    q: "How do you help with the move-in process?",
    a: "We walk families through the tour, consultation, paperwork, care planning, and transition timeline so move-in feels organized rather than overwhelming.",
  },
  {
    q: "What makes the community feel active instead of institutional?",
    a: "Hayat emphasizes shared dining, thoughtful amenities, a full activity calendar, wellness-led routines, and a hospitality-first environment that keeps daily life engaging.",
  },
] as const;

/* ──────────────── Benefits page ──────────────── */

export const benefitsHero = {
  eyebrow: "Benefits",
  title: "Everything That Comes With Being Part Of Hayat",
  subtitle:
    "From nourishing meals and wellness programming to companionship and family peace of mind—here is what residents and their families actually receive.",
} as const;

export const benefitHighlights = [
  {
    stat: "3",
    label: "Chef-prepared meals daily",
    description:
      "Breakfast, lunch, and dinner crafted with seasonal ingredients, dietary accommodations, and the warmth of shared dining.",
    lucideIcon: "UtensilsCrossed",
    image: "/images/home/gallery-dining-social.jpg",
  },
  {
    stat: "7",
    label: "Days of structured activities",
    description:
      "Social gatherings, creative workshops, movement classes, and outings fill every day of the week—not just weekdays.",
    lucideIcon: "CalendarHeart",
    image: "/images/home/gallery-wellness-programs.jpg",
  },
  {
    stat: "24/7",
    label: "Attentive care coordination",
    description:
      "Round-the-clock oversight, medication reminders, and responsive communication so families never feel out of the loop.",
    lucideIcon: "HeartHandshake",
    image: "/images/home/gallery-compassionate-care.jpg",
  },
  {
    stat: "1:1",
    label: "Personalized wellness plans",
    description:
      "Every resident receives a tailored plan built around mobility, preferences, health goals, and family input—never a one-size template.",
    lucideIcon: "ClipboardCheck",
    image: "/images/home/gallery-comfortable-lounge.jpg",
  },
] as const;

export const mealBenefits = [
  {
    title: "Seasonal, Chef-Guided Menus",
    text: "Rotating menus inspired by seasonal produce, cultural traditions, and resident favorites—planned by a dedicated culinary team.",
  },
  {
    title: "Dietary Accommodations",
    text: "Low-sodium, diabetic-friendly, soft-texture, vegetarian, halal, and allergy-aware options handled with care—not as afterthoughts.",
  },
  {
    title: "Snacks & Hydration Stations",
    text: "Fresh fruit, light bites, tea, coffee, and water stations available throughout the day so no one waits until the next meal.",
  },
  {
    title: "Social Dining Atmosphere",
    text: "Restaurant-style table service, themed dining events, and family meal invitations that turn eating into a highlight of the day.",
  },
] as const;

export const lifestyleBenefits = [
  {
    title: "Creative Workshops",
    text: "Art, music, storytelling, and hands-on projects that keep the mind active and give residents something to look forward to.",
    lucideIcon: "Palette",
  },
  {
    title: "Fitness & Balance Programs",
    text: "Chair yoga, guided stretching, walking groups, and strength routines designed for confidence and safe movement.",
    lucideIcon: "Dumbbell",
  },
  {
    title: "Outings & Community Trips",
    text: "Organized excursions to parks, cultural venues, local shops, and seasonal events that add variety and joy.",
    lucideIcon: "MapPinned",
  },
  {
    title: "Spiritual & Reflective Time",
    text: "Devotionals, quiet reflection spaces, and purpose-centered gatherings for residents who find meaning in spiritual practice.",
    lucideIcon: "Sparkles",
  },
  {
    title: "Companionship & Connection",
    text: "Conversation circles, game afternoons, buddy programs, and visiting volunteers so no resident feels isolated.",
    lucideIcon: "UsersRound",
  },
  {
    title: "Family Peace of Mind",
    text: "Transparent updates, responsive coordination, and honest guidance when needs evolve—families stay partners, not bystanders.",
    lucideIcon: "ShieldCheck",
  },
] as const;

export const benefitsCta = {
  title: "Ready to see the difference?",
  text: "Schedule a tour, meet the team, and experience firsthand what makes Hayat feel like home.",
} as const;
