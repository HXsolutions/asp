import { Facebook, Twitter, Linkedin, Briefcase, ShieldCheck, Landmark, Store, FileText } from "lucide-react";

export const primaryNav = [
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Packages', href: '/packages' },
  { title: 'Resources', href: '/resources' },
  { title: 'Contact', href: '/contact' },
];

export const servicesNav = [
  {
    title: 'Business Formation',
    icon: Briefcase,
    items: [
      { title: 'USA LLC Formation', href: '/business-formation/usa-llc', description: 'Form an LLC in any US state.' },
      { title: 'UK Company Formation', href: '/business-formation/uk-company', description: 'Establish your business in the UK.' },
      { title: 'Canada Corporation', href: '/business-formation/canada-corporation', description: 'Incorporate your company in Canada.' },
      { title: 'France Company Formation', href: '/business-formation/france-company', description: 'Register a company in France.' },
      { title: 'Registered Agent', href: '/registered-agent', description: 'Fulfill legal requirements for a US address.'},
    ],
  },
  {
    title: 'Legal & IP Protection',
    icon: ShieldCheck,
    items: [
      { title: 'Trademark Registration', href: '/trademark-registration', description: 'Protect your brand name and logo.' },
      { title: 'Patent Filing', href: '/patent-filing', description: 'Secure exclusive rights for your invention.' },
      { title: 'Brand Protection', href: '/brand-protection', description: 'Monitor and enforce your IP rights.' },
      { title: 'Compliance Services', href: '/compliance', description: 'Navigate complex business regulations.' },
    ],
  },
  {
    title: 'Tax & Accounting',
    icon: Landmark,
    items: [
      { title: 'Tax Services Hub', href: '/tax-services', description: 'All tax solutions in one place.' },
      { title: 'EIN Registration', href: '/ein-registration', description: 'Get your Federal Tax ID number.' },
      { title: 'ITIN Application', href: '/itin-application', description: 'Apply for an Individual Taxpayer ID Number.' },
      { title: 'Bookkeeping', href: '/bookkeeping', description: 'Keep your finances in perfect order.' },
      { title: 'Annual Tax Filing', href: '/annual-tax-filing', description: 'File your annual business tax returns.' },
    ],
  },
  {
    title: 'Amazon Solutions',
    icon: Store,
    items: [
      { title: 'Account Setup', href: '/amazon-account-setup', description: 'Get your Amazon seller account running.' },
      { title: 'Brand Registry', href: '/amazon-brand-registry', description: 'Enroll and protect your brand.' },
      { title: 'Account Management', href: '/amazon-account-management', description: 'Full-service management for your store.' },
      { title: '1-on-1 Consultation', href: '/amazon-consultation', description: 'Get expert advice for your challenges.' },
    ],
  },
];

export const footerNav = [
    {
      title: 'Services',
      items: [
        { title: 'USA LLC Formation', href: '/business-formation/usa-llc' },
        { title: 'UK Company Formation', href: '/business-formation/uk-company' },
        { title: 'Canada Corporation', href: '/business-formation/canada-corporation' },
        { title: 'France Company Formation', href: '/business-formation/france-company' },
        { title: 'Trademark Registration', href: '/trademark-registration' },
        { title: 'Patent Filing', href: '/patent-filing' },
      ],
    },
    {
      title: 'Company',
      items: [
        { title: 'About Us', href: '/about' },
        { title: 'Blog', href: '/blog' },
        { title: 'Contact Us', href: '/contact' },
        { title: 'Packages', href: '/packages' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { title: 'FAQ', href: '/faq' },
        { title: 'Support', href: '/support' },
        { title: 'Sitemap', href: '/sitemap' },
        { title: 'AI Compliance Tool', href: '/compliance-ai' },
      ],
    },
  ];
  
  export const socialLinks = [
    { name: 'Facebook', url: '#', icon: Facebook },
    { name: 'Twitter', url: '#', icon: Twitter },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
  ];

  export const faqData = [
    {
      question: 'What is Amazon Solutions Pro?',
      answer: 'Amazon Solutions Pro is an all-in-one platform that helps entrepreneurs launch and grow their businesses, particularly on Amazon. We offer services from business formation and legal protection to tax accounting and Amazon-specific solutions.',
    },
    {
      question: 'How long does it take to form a company?',
      answer: 'The timeline varies by country and state. For a US LLC, it typically takes 45 days. A UK company can be formed in 20 days, a Canadian corporation in 35 days, and a French company in 40 days. Our platform streamlines the process to be as fast as possible.',
    },
    {
      question: 'Do I need a trademark to sell on Amazon?',
      answer: 'While not strictly required to start, registering a trademark is highly recommended. It is required to enroll in Amazon\'s Brand Registry, which offers powerful tools to protect your brand from counterfeiters and enhance your listings with A+ Content and a Brand Store.',
    },
    {
      question: 'What is an ITIN and why would I need one?',
      answer: 'An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS for foreign nationals who need to file a US tax return but are not eligible for a Social Security Number. It is often required for non-resident Amazon sellers to comply with US tax law.',
    },
    {
      question: 'Can you manage my Amazon store for me?',
      answer: 'Yes! We offer comprehensive Amazon Account Management services, where our experts handle everything from listing optimization and PPC campaigns to customer service and inventory management.',
    },
    {
        question: 'Which state is best for forming a US LLC for a non-resident?',
        answer: 'For most non-resident e-commerce sellers, Wyoming is the top choice. It offers low fees, strong privacy protection (anonymous LLCs), and no state income tax. Delaware is another good option, especially for businesses seeking venture capital.'
    },
    {
        question: 'What is the difference between an LLC and a Corporation?',
        answer: 'An LLC (Limited Liability Company) is simpler to manage and offers pass-through taxation, meaning profits are passed to the owners and taxed on their personal returns. A C-Corporation is a separate tax entity with a more complex structure, which can be better for raising capital. We can help you choose the right one for your goals.'
    }
  ];
