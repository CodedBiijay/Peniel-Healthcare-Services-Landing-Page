
import { ServicePackage, ALaCarteService } from './types';

export const PACKAGES: ServicePackage[] = [
  {
    id: 'startup-essentials',
    name: 'Start-Up Essentials Package',
    headline: 'Building Your Foundation',
    price: 6000,
    description: 'Ideal for agencies that are just beginning from the ground up.',
    color: 'purple',
    features: [
      'Initial 2-hour consultation covering Business & Compliance',
      'Guidance on business registration (tools & requirements)',
      'Overview of state licensing requirements',
      'Basic policy & procedure checklist',
      'Brand Essentials',
      'Phone/Email support 30 days'
    ]
  },
  {
    id: 'license-compliance',
    name: 'License & Compliance Package',
    headline: 'State Approval Made Easy',
    price: 5000,
    description: 'Best for Agencies preparing for state approval.',
    color: 'green',
    features: [
      'Step-by-step licensing application guidance',
      'Customized policy & procedure manual (state-ready)',
      'Staff qualifications & onboarding structure',
      'Compliance checklist (IDOA / IDPH aligned)',
      'Quality assurance & documentation setup',
      'Two live consultation sessions',
      'Phone/Email support for 30 days'
    ]
  },
  {
    id: 'full-setup',
    name: 'Full Agency Setup',
    headline: 'Comprehensive Setup, Professional Launch',
    price: 15000,
    description: 'Best for owners who want direct professional setup.',
    color: 'purple',
    features: [
      'Complete agency startup strategy',
      'Full policy & procedure manual (customized)',
      'HR forms & staff training outline',
      'Mock survey & compliance readiness review',
      'Business operations workflow',
      '180 Branding support',
      'Live strategy sessions',
      'Priority support for 60 days'
    ]
  },
  {
    id: 'premium-mentorship',
    name: 'Premium Launch & Mentorship',
    headline: 'Long-Term Success & Guided Growth',
    price: 20000,
    description: 'Best for serious founders seeking long-term success.',
    color: 'green',
    features: [
      'End-to-end agency setup & launch support',
      'Full compliance & audit-ready documentation',
      'HR, payroll & operational systems guidance',
      'Marketing & referral strategy',
      'Ongoing mentorship & growth planning',
      'Quarterly check-ins and review',
      'Priority phone, email & text support for 12 months'
    ]
  }
];

export const ALACARTE_SERVICES: ALaCarteService[] = [
  { id: 'hourly', name: 'Hourly Consultation', price: '$150/hr' },
  { id: 'policy', name: 'Policy Manual Only', price: '$5,000' },
  { id: 'licensing', name: 'Licensing Review Only', price: '$2,500' },
  { id: 'audit', name: 'Compliance Audit', price: '$3,500' },
  { id: 'idoa', name: 'IDOA Licensing Application Only', price: '$15,000' }
];

export const CONTACT_INFO = {
  phone: '312-555-0199',
  email: 'info@penielhealthcareservices.com',
  location: 'Chicago, IL'
};
