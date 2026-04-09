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
      { label: "Amenities", href: "/amenities", description: "Comforts and conveniences available each day." },
      { label: "Activities & Events", href: "/activities-events", description: "Social programs, outings, and daily gatherings." },
      { label: "Life Enrichment", href: "/wellness", description: "Wellness and engagement programs at Hayat." },
      { label: "Dining Experience", href: "/dining", description: "Meals, hospitality, and nutrition handled with care." },
    ],
  },
  {
    label: "Living Options",
    href: "/services",
    links: [
      { label: "Assisted Living", href: "/services", description: "Personalized care, daily support, and wellness oversight." },
      { label: "Move-In Process", href: "/enrollment", description: "Consultation, assessment, and transition steps." },
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
      { label: "Careers", href: "/careers", description: "Join the Hayat Care Center team." },
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
      { label: "Amenities", href: "/amenities" },
      { label: "Activities & Events", href: "/activities-events" },
      { label: "Life Enrichment", href: "/wellness" },
      { label: "Dining Experience", href: "/dining" },
    ],
  },
  {
    title: "Living & Gallery",
    links: [
      { label: "Assisted Living", href: "/services" },
      { label: "Move-In Process", href: "/enrollment" },
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
  { value: "24/7", label: "Team presence and family communication" },
  { value: "3", label: "Distinct suite styles to compare" },
  { value: "Daily", label: "Programs, dining, and wellness routines" },
  { value: "1:1", label: "Care planning tailored to each resident" },
] as const;

export const homeQuickLinks = [
  {
    title: "Amenities",
    href: "/amenities",
    description: "Warm gathering spaces, concierge-style support, and everyday comforts.",
  },
  {
    title: "Activities & Events",
    href: "/activities-events",
    description: "A calendar built around movement, connection, and meaningful routines.",
  },
  {
    title: "Dining Experience",
    href: "/dining",
    description: "Hospitality-led meals with flexible options and thoughtful nutrition.",
  },
  {
    title: "Assisted Support",
    href: "/services",
    description: "Care that balances independence with practical help and oversight.",
  },
  {
    title: "Floor Plans",
    href: "/floor-plans",
    description: "Studio, one-bedroom, and companion-style layouts to review.",
  },
  {
    title: "Schedule A Tour",
    href: "/contact",
    description: "Talk with our team and plan a visit that fits your family.",
  },
] as const;

export const homeFeatureCards = [
  {
    title: "Hospitality-Led Living",
    text: "Residents step into a calm, well-appointed setting where service, comfort, and daily rhythms feel intentional.",
  },
  {
    title: "Personalized Assistance",
    text: "Support plans are built around health routines, personal preferences, and the level of help each resident wants.",
  },
  {
    title: "Connection Every Day",
    text: "Meals, social gatherings, enrichment programs, and shared spaces encourage genuine community life.",
  },
] as const;

export const trustPoints = [
  {
    title: "Thoughtfully Designed Community Spaces",
    text: "Lounges, dining rooms, quiet corners, and welcoming outdoor areas make it easier to relax and connect.",
  },
  {
    title: "Care With Clear Communication",
    text: "Families receive practical updates and direct access to a team that understands the value of clarity.",
  },
  {
    title: "Wellness Without A Clinical Feel",
    text: "Residents receive support and oversight in an environment designed to feel bright, social, and uplifting.",
  },
  {
    title: "Programs That Give Shape To The Day",
    text: "Movement, creative activities, conversation, and dining create a steady routine residents can look forward to.",
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
    title: "Personal Care Assistance",
    description: "Support with bathing, dressing, grooming, and other daily tasks is delivered with respect and consistency.",
    icon: "M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 20a8 8 0 1 1 16 0",
  },
  {
    title: "Medication & Wellness Support",
    description: "Residents benefit from reminders, observation, and communication that keeps routines on track.",
    icon: "M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Zm0-10V7m-2 2h4",
  },
  {
    title: "Housekeeping Coordination",
    description: "Clean, orderly living spaces and practical day-to-day support help reduce stress for residents and families.",
    icon: "M3 4h18M8 4v16m8-16v16M4 9h4m8 0h4M4 15h4m8 0h4",
  },
  {
    title: "Dining & Nutrition",
    description: "Meals, snacks, and hydration are woven into the day with attention to comfort and individual needs.",
    icon: "M4 6h16M7 3v6m10-6v6M5 11h14v8H5z",
  },
  {
    title: "Transportation Planning",
    description: "Scheduled transportation and appointment coordination make daily logistics easier to manage.",
    icon: "M8 17h8M7 7h10l2 6H5l2-6Zm1 10a1 1 0 1 0 0 .01M16 17a1 1 0 1 0 0 .01",
  },
  {
    title: "Family Partnership",
    description: "The Hayat team keeps families informed, involved, and confident in the support being provided.",
    icon: "M12 21c-4.42 0-8-3.58-8-8S7.58 5 12 5s8 3.58 8 8-3.58 8-8 8Zm-1-12v4l3 2",
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
    title: "How Daily Routines Support Emotional Wellness In Senior Living",
    excerpt: "A consistent rhythm of meals, activities, and rest can help older adults feel more grounded, confident, and connected to their community.",
    readTime: "5 min",
    date: "March 28, 2026",
    category: "Wellness",
  },
  {
    title: "What Families Should Know Before Touring An Assisted Living Community",
    excerpt: "Knowing which questions to ask and what details to notice during a tour can help families make a more informed and confident decision.",
    readTime: "6 min",
    date: "March 15, 2026",
    category: "Family Guide",
  },
  {
    title: "The Role Of Social Connection In Healthy Aging",
    excerpt: "Research consistently shows that regular social interaction improves cognitive health, mood, and overall quality of life for seniors.",
    readTime: "4 min",
    date: "March 3, 2026",
    category: "Health",
  },
  {
    title: "Understanding The Difference Between Independent And Assisted Living",
    excerpt: "Choosing the right level of support starts with understanding what each option includes and how it matches your loved one's daily needs.",
    readTime: "7 min",
    date: "February 20, 2026",
    category: "Senior Living",
  },
  {
    title: "Nutrition Tips That Help Seniors Stay Energized Throughout The Day",
    excerpt: "Small adjustments to meal timing, hydration, and nutrient balance can make a noticeable difference in how active and alert older adults feel.",
    readTime: "5 min",
    date: "February 8, 2026",
    category: "Nutrition",
  },
  {
    title: "How Creative Activities Keep The Mind Sharp With Age",
    excerpt: "Art, music, storytelling, and hands-on projects engage memory and focus in ways that support long-term cognitive health.",
    readTime: "5 min",
    date: "January 25, 2026",
    category: "Wellness",
  },
] as const;

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
    description: "A guided tour through the lobby, common areas, dining room, activity spaces, and model suites at Hayat Care Center.",
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
    q: "Who is the right fit for Hayat Care Center?",
    a: "Hayat is designed for older adults who would benefit from a supportive community setting, daily hospitality services, and practical assistance with routines or wellness oversight.",
  },
  {
    q: "What support is available?",
    a: "Residents can receive help with daily living tasks, reminders, mobility support, dining, housekeeping coordination, transportation planning, and ongoing wellness communication.",
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
