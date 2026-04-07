// Sample job data for development and demo purposes

import { JobPosting, Church } from "@/lib/types";

const churches: Church[] = [
  {
    id: "ch-1",
    name: "Grace Community Church",
    slug: "grace-community-church",
    website: "https://gracecommunity.org",
    city: "Dallas",
    state: "Texas",
    denomination: "Non-denominational",
    description: "A vibrant multi-campus church in the heart of Dallas serving over 5,000 members.",
    createdAt: "2026-01-15",
  },
  {
    id: "ch-2",
    name: "Redeemer Fellowship",
    slug: "redeemer-fellowship",
    website: "https://redeemerfellowship.org",
    city: "Nashville",
    state: "Tennessee",
    denomination: "Baptist",
    description: "A growing church in Nashville focused on community and discipleship.",
    createdAt: "2026-02-01",
  },
  {
    id: "ch-3",
    name: "Harvest Bible Chapel",
    slug: "harvest-bible-chapel",
    website: "https://harvestbiblechapel.org",
    city: "Phoenix",
    state: "Arizona",
    denomination: "Non-denominational",
    description: "A Bible-centered church with multiple locations across the Phoenix metro.",
    createdAt: "2026-02-10",
  },
  {
    id: "ch-4",
    name: "New Life Assembly",
    slug: "new-life-assembly",
    website: "https://newlifeassembly.org",
    city: "Atlanta",
    state: "Georgia",
    denomination: "Assemblies of God",
    description: "One of the largest AG churches in the Southeast, with a heart for missions.",
    createdAt: "2026-03-01",
  },
  {
    id: "ch-5",
    name: "Cornerstone Presbyterian",
    slug: "cornerstone-presbyterian",
    website: "https://cornerstonepresby.org",
    city: "Charlotte",
    state: "North Carolina",
    denomination: "PCA",
    description: "A reformed church committed to gospel-centered worship and community.",
    createdAt: "2026-03-05",
  },
  {
    id: "ch-6",
    name: "The Bridge Church",
    slug: "the-bridge-church",
    website: "https://thebridgechurch.com",
    city: "Austin",
    state: "Texas",
    denomination: "Non-denominational",
    description: "A creative, modern church reaching young professionals in downtown Austin.",
    createdAt: "2026-03-10",
  },
];

export const sampleJobs: JobPosting[] = [
  {
    id: "job-1",
    slug: "worship-leader-grace-community-church-dallas-tx",
    title: "Worship Leader",
    church: churches[0],
    category: "worship-leader",
    location: { city: "Dallas", state: "Texas", stateCode: "TX", remote: false },
    employmentType: "FULL_TIME",
    description: `Grace Community Church is looking for a passionate Worship Leader to lead our congregation in authentic, Christ-centered worship across our Sunday services and special events.

This role oversees all musical and creative elements of our worship services, leads a team of volunteer musicians and vocalists, and collaborates closely with the senior pastor to align worship themes with sermon series.

We're looking for someone who combines genuine spiritual maturity with strong musical skills and team leadership.`,
    responsibilities: `- Lead weekend worship services (2-3 services each Sunday)
- Recruit, train, and shepherd volunteer worship team members
- Plan and arrange music selections in coordination with the teaching calendar
- Oversee audio/visual production team
- Lead midweek rehearsals
- Manage worship ministry budget
- Coordinate special event worship (Easter, Christmas, conferences)`,
    qualifications: `- 3+ years of worship leadership experience in a church of 500+ members
- Proficiency in guitar and/or keys; ability to lead vocally
- Experience with modern worship and hymn arrangements
- Strong team leadership and mentoring skills
- Theological alignment with our church's statement of faith
- Bachelor's degree in music, worship arts, or related field preferred`,
    compensationMin: 55000,
    compensationMax: 72000,
    compensationType: "YEARLY",
    applicationUrl: "https://gracecommunity.org/apply",
    status: "live",
    datePosted: "2026-03-20",
    validThrough: "2026-06-20",
    createdAt: "2026-03-20",
    updatedAt: "2026-03-20",
  },
  {
    id: "job-2",
    slug: "youth-pastor-redeemer-fellowship-nashville-tn",
    title: "Youth Pastor",
    church: churches[1],
    category: "youth-ministry",
    location: { city: "Nashville", state: "Tennessee", stateCode: "TN", remote: false },
    employmentType: "FULL_TIME",
    description: `Redeemer Fellowship is seeking a Youth Pastor to lead our student ministry serving 6th-12th graders. You'll build a program that helps students own their faith through engaging teaching, meaningful relationships, and fun community.

This is a senior staff role reporting directly to the Lead Pastor.`,
    responsibilities: `- Develop and lead weekly youth group gatherings (Wednesday nights)
- Teach or oversee Sunday morning student classes
- Plan annual retreats, mission trips, and summer camps
- Build and lead a volunteer leadership team (15-20 adults)
- Provide pastoral care and mentoring to students and families
- Manage youth ministry budget and resources`,
    qualifications: `- 2+ years in youth or student ministry
- Strong Bible teaching and communication skills
- Heart for adolescent discipleship
- Ability to recruit and develop volunteer leaders
- MDiv or related seminary degree preferred but not required`,
    compensationMin: 48000,
    compensationMax: 60000,
    compensationType: "YEARLY",
    applicationEmail: "jobs@redeemerfellowship.org",
    status: "live",
    datePosted: "2026-03-25",
    validThrough: "2026-06-25",
    createdAt: "2026-03-25",
    updatedAt: "2026-03-25",
  },
  {
    id: "job-3",
    slug: "childrens-ministry-director-harvest-bible-chapel-phoenix-az",
    title: "Children's Ministry Director",
    church: churches[2],
    category: "childrens-ministry",
    location: { city: "Phoenix", state: "Arizona", stateCode: "AZ", remote: false },
    employmentType: "FULL_TIME",
    description: `Harvest Bible Chapel is hiring a Children's Ministry Director to lead programming for birth through 5th grade across our three Phoenix-area campuses. This is a high-impact role shaping the next generation's foundation of faith.`,
    responsibilities: `- Oversee all children's ministry programming (Sunday, midweek, VBS)
- Develop age-appropriate curriculum and teaching materials
- Recruit, train, and manage 100+ volunteers across three campuses
- Implement and maintain child safety/check-in protocols
- Coordinate with campus pastors for multi-site consistency
- Manage children's ministry budget ($150K annually)`,
    qualifications: `- 5+ years children's ministry leadership
- Multi-site or large church experience strongly preferred
- Background in child development or education a plus
- Excellent organizational and project management skills
- Must pass background check and child safety training`,
    compensationMin: 58000,
    compensationMax: 75000,
    compensationType: "YEARLY",
    applicationUrl: "https://harvestbiblechapel.org/careers",
    status: "live",
    datePosted: "2026-03-28",
    validThrough: "2026-06-28",
    createdAt: "2026-03-28",
    updatedAt: "2026-03-28",
  },
  {
    id: "job-4",
    slug: "executive-pastor-new-life-assembly-atlanta-ga",
    title: "Executive Pastor",
    church: churches[3],
    category: "executive-pastor",
    location: { city: "Atlanta", state: "Georgia", stateCode: "GA", remote: false },
    employmentType: "FULL_TIME",
    description: `New Life Assembly is searching for an Executive Pastor to serve as the chief operating officer of our church, overseeing staff, budget, facilities, and strategic initiatives. This role partners directly with the Senior Pastor to execute the church's vision.`,
    responsibilities: `- Oversee daily church operations and staff management (25+ employees)
- Manage church budget ($4M+ annually)
- Lead strategic planning and goal-setting processes
- Supervise facilities and campus development projects
- Serve as elder/board liaison
- Handle HR functions including hiring, reviews, and team development`,
    qualifications: `- 7+ years senior church leadership or executive pastor experience
- Strong financial and operational management background
- MBA, MDiv, or equivalent advanced degree
- Demonstrated ability to lead large teams
- Alignment with Assemblies of God theology and governance`,
    compensationMin: 85000,
    compensationMax: 110000,
    compensationType: "YEARLY",
    applicationUrl: "https://newlifeassembly.org/executive-pastor-search",
    status: "live",
    datePosted: "2026-04-01",
    validThrough: "2026-07-01",
    createdAt: "2026-04-01",
    updatedAt: "2026-04-01",
  },
  {
    id: "job-5",
    slug: "church-administrator-cornerstone-presbyterian-charlotte-nc",
    title: "Church Administrator",
    church: churches[4],
    category: "administrative",
    location: { city: "Charlotte", state: "North Carolina", stateCode: "NC", remote: false },
    employmentType: "FULL_TIME",
    description: `Cornerstone Presbyterian is looking for a Church Administrator to handle the day-to-day operational needs of our growing congregation. You'll be the organizational backbone of the church office.`,
    responsibilities: `- Manage church office operations and staff scheduling
- Handle accounts payable/receivable and financial reporting
- Coordinate facility usage and maintenance schedules
- Oversee church management software (Planning Center)
- Support event logistics and communications
- Manage vendor relationships and contracts`,
    qualifications: `- 3+ years administrative or office management experience
- Familiarity with church management software (Planning Center, Shelby, etc.)
- Strong bookkeeping and financial reporting skills
- Excellent communication and multitasking abilities
- Member or regular attendee of a PCA or reformed church preferred`,
    compensationMin: 42000,
    compensationMax: 52000,
    compensationType: "YEARLY",
    applicationEmail: "office@cornerstonepresby.org",
    status: "live",
    datePosted: "2026-04-02",
    validThrough: "2026-07-02",
    createdAt: "2026-04-02",
    updatedAt: "2026-04-02",
  },
  {
    id: "job-6",
    slug: "creative-director-the-bridge-church-austin-tx",
    title: "Creative Director",
    church: churches[5],
    category: "communications",
    location: { city: "Austin", state: "Texas", stateCode: "TX", remote: false },
    employmentType: "FULL_TIME",
    description: `The Bridge Church is hiring a Creative Director to lead our visual identity, content production, and overall creative strategy. If you love Jesus and design, this is your role.`,
    responsibilities: `- Lead creative direction for all church communications
- Oversee social media content strategy and production
- Design sermon series branding, event graphics, and print materials
- Produce and edit video content for services and online
- Manage a small creative team (2 designers, 1 videographer)
- Develop the church's brand standards and visual identity`,
    qualifications: `- 3+ years creative direction or design leadership
- Proficiency in Adobe Creative Suite and video editing tools
- Portfolio demonstrating strong visual storytelling
- Understanding of social media platforms and content strategy
- Experience in a church or nonprofit environment preferred`,
    compensationMin: 52000,
    compensationMax: 68000,
    compensationType: "YEARLY",
    applicationUrl: "https://thebridgechurch.com/careers",
    status: "live",
    datePosted: "2026-04-03",
    validThrough: "2026-07-03",
    createdAt: "2026-04-03",
    updatedAt: "2026-04-03",
  },
  {
    id: "job-7",
    slug: "worship-leader-redeemer-fellowship-nashville-tn",
    title: "Associate Worship Leader",
    church: churches[1],
    category: "worship-leader",
    location: { city: "Nashville", state: "Tennessee", stateCode: "TN", remote: false },
    employmentType: "PART_TIME",
    description: `Redeemer Fellowship is adding an Associate Worship Leader to support our growing music ministry. This part-time role assists the Worship Pastor in leading services and developing team members.`,
    responsibilities: `- Lead worship for one Sunday service weekly
- Assist with midweek rehearsals and team development
- Help arrange and chart music for the worship team
- Fill in as primary worship leader when needed
- Mentor newer musicians joining the worship team`,
    qualifications: `- 1+ year worship team experience
- Strong vocalist with proficiency in guitar or keys
- Heart for team collaboration and mentorship
- Flexible schedule for Sunday mornings and Wednesday evenings`,
    compensationMin: 20000,
    compensationMax: 28000,
    compensationType: "YEARLY",
    applicationEmail: "worship@redeemerfellowship.org",
    status: "live",
    datePosted: "2026-04-04",
    validThrough: "2026-07-04",
    createdAt: "2026-04-04",
    updatedAt: "2026-04-04",
  },
  {
    id: "job-8",
    slug: "operations-manager-grace-community-church-dallas-tx",
    title: "Operations Manager",
    church: churches[0],
    category: "operations",
    location: { city: "Dallas", state: "Texas", stateCode: "TX", remote: false },
    employmentType: "FULL_TIME",
    description: `Grace Community Church needs an Operations Manager to oversee facilities, technology, and event logistics across our main campus and two satellite locations.`,
    responsibilities: `- Manage facilities team and maintenance schedules
- Oversee AV/technology infrastructure and upgrades
- Coordinate logistics for Sunday services and special events
- Manage vendor contracts and procurement
- Lead campus safety and security initiatives
- Support multi-campus operational consistency`,
    qualifications: `- 4+ years operations or facilities management
- Experience managing budgets of $500K+
- Strong project management and vendor negotiation skills
- Tech-savvy with AV and church technology systems
- Comfortable working in a fast-paced church environment`,
    compensationMin: 55000,
    compensationMax: 70000,
    compensationType: "YEARLY",
    applicationUrl: "https://gracecommunity.org/apply",
    status: "live",
    datePosted: "2026-04-05",
    validThrough: "2026-07-05",
    createdAt: "2026-04-05",
    updatedAt: "2026-04-05",
  },
];

export function getJobBySlug(slug: string): JobPosting | undefined {
  return sampleJobs.find((job) => job.slug === slug);
}

export function getJobsByCategory(category: string): JobPosting[] {
  return sampleJobs.filter((job) => job.category === category && job.status === "live");
}

export function getJobsByState(stateCode: string): JobPosting[] {
  return sampleJobs.filter((job) => job.location.stateCode.toLowerCase() === stateCode.toLowerCase() && job.status === "live");
}

export function getJobsByCity(city: string): JobPosting[] {
  return sampleJobs.filter((job) => job.location.city.toLowerCase().replace(/\s+/g, "-") === city.toLowerCase() && job.status === "live");
}

export function getJobsByChurch(churchSlug: string): JobPosting[] {
  return sampleJobs.filter((job) => job.church.slug === churchSlug && job.status === "live");
}

export function getLiveJobs(): JobPosting[] {
  return sampleJobs.filter((job) => job.status === "live");
}
