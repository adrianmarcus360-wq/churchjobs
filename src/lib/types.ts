// Core domain types for the church hiring platform

export interface Church {
  id: string;
  name: string;
  slug: string;
  website?: string;
  city: string;
  state: string;
  denomination?: string;
  logoUrl?: string;
  description?: string;
  createdAt: string;
}

export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  church: Church;
  category: JobCategory;
  location: JobLocation;
  employmentType: EmploymentType;
  description: string;
  responsibilities?: string;
  qualifications?: string;
  compensationMin?: number;
  compensationMax?: number;
  compensationType?: "YEARLY" | "MONTHLY" | "HOURLY";
  applicationUrl?: string;
  applicationEmail?: string;
  status: JobStatus;
  datePosted: string;
  validThrough: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobLocation {
  city: string;
  state: string;
  stateCode: string;
  remote: boolean;
}

export type JobCategory =
  | "pastor"
  | "worship-leader"
  | "youth-ministry"
  | "childrens-ministry"
  | "student-ministry"
  | "executive-pastor"
  | "administrative"
  | "operations"
  | "communications"
  | "missions"
  | "discipleship"
  | "other";

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "TEMPORARY"
  | "INTERN";

export type JobStatus =
  | "draft"
  | "pending_review"
  | "live"
  | "expired"
  | "filled"
  | "archived";

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: "monthly" | "annual" | "one-time";
  description: string;
  features: string[];
  highlighted: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "unlimited-monthly",
    name: "Unlimited Monthly",
    price: 99,
    interval: "monthly",
    description: "Post unlimited church jobs with one simple subscription.",
    features: [
      "Unlimited job postings",
      "All roles and categories",
      "Structured for Google for Jobs eligibility",
      "Dedicated job pages with SEO optimization",
      "Employer dashboard",
      "Email support",
      "Cancel anytime",
    ],
    highlighted: false,
  },
  {
    id: "unlimited-annual",
    name: "Unlimited Annual",
    price: 499,
    interval: "annual",
    description:
      "Same unlimited access — save over 50% with annual billing.",
    features: [
      "Everything in Monthly, plus:",
      "Save over $689/year vs monthly",
      "Lock in your rate for 12 months",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    id: "single-post",
    name: "Single 90-Day Listing",
    price: 299,
    interval: "one-time",
    description:
      "One job listing, live for 90 days. Best when you truly only need one posting.",
    features: [
      "One job posting",
      "Live for 90 days",
      "Structured for Google for Jobs eligibility",
      "Dedicated job page",
      "Email support",
    ],
    highlighted: false,
  },
];

export const JOB_CATEGORIES: { value: JobCategory; label: string }[] = [
  { value: "pastor", label: "Pastor / Senior Pastor" },
  { value: "executive-pastor", label: "Executive Pastor" },
  { value: "worship-leader", label: "Worship Leader / Music" },
  { value: "youth-ministry", label: "Youth Ministry" },
  { value: "student-ministry", label: "Student Ministry" },
  { value: "childrens-ministry", label: "Children's Ministry" },
  { value: "administrative", label: "Administrative / Office" },
  { value: "operations", label: "Operations / Facilities" },
  { value: "communications", label: "Communications / Media" },
  { value: "missions", label: "Missions / Outreach" },
  { value: "discipleship", label: "Discipleship / Groups" },
  { value: "other", label: "Other" },
];

export const US_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
];
