/**
 * Portfolio data. This file is the single place to edit case studies.
 *
 * CONFIDENTIALITY RULES (do not break):
 * - Never name enterprise clients (or show their logos) anywhere on the site.
 * - Never add a result, budget, rate or testimonial that is not verified.
 * - Illustrative examples must stay labelled as illustrative.
 */

export type StatusLabel = "Real Project" | "In Progress" | "Illustrative Example";
export type Category = "Paid Acquisition" | "Customer Engagement" | "Growth Strategy";

export type Metric = {
  label: string;
  /** Leave as null until a real, verified figure is available. */
  value: string | null;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  category: Category;
  statuses: StatusLabel[];
  illustrative: boolean;
  /** Only real projects carry these. */
  client?: string;
  role?: string;
  year?: string;
  statusLine: string;
  challenge: string[];
  approach: string[];
  role_responsibilities: string[];
  execution: { title: string; body: string; note?: string }[];
  measurement: string[];
  outcomes: {
    statusText: string;
    metrics?: Metric[];
  };
  learning: string;
  skills?: string[];
};

/**
 * UiPath disclosure gate.
 * Turned on 17 Oct 2026 at Vinod's request. Set back to false to hide the
 * UiPath case study on the live site (it stays visible on previews).
 */
export const UIPATH_DISCLOSURE_APPROVED = true;

export const ILLUSTRATIVE_NOTICE =
  "Illustrative case study: demonstrates my consulting approach. Not a representation of a verified client engagement or measured result.";

const caseStudies: CaseStudy[] = [
  {
    slug: "uipath-automate-campus-quest",
    title: "UiPath Automate Campus Quest: Student Growth Campaign",
    summary:
      "Driving international student awareness and qualified traffic for a free automation challenge with a fixed deadline and a constrained budget.",
    category: "Paid Acquisition",
    statuses: ["Real Project", "In Progress"],
    illustrative: false,
    client: "Edlerhub, on behalf of UiPath",
    role: "Growth Marketing Consultant",
    year: "2026",
    statusLine: "Campaign in progress; results pending verification.",
    challenge: [
      "The campaign aimed to attract students worldwide to Automate Campus Quest, a free student challenge requiring participants to build and submit a workflow by 31 October 2026.",
      "It had a fixed deadline, a constrained budget, and an international audience requirement that excluded India.",
      "The objective was to build awareness, attract qualified landing-page traffic, and establish a pathway towards registrations.",
    ],
    approach: [
      "A phased paid campaign across Meta (Facebook and Instagram) and LinkedIn, with cost-per-acquisition estimates planned for each phase.",
      "Disciplined budget allocation, guided by cost per landing-page view across ad sets.",
      "Deadline-led creative to build urgency as the submission date approached.",
      "University and ecosystem partnerships to reach students beyond paid media.",
      "A clear path from traffic to measurable registrations through conversion tracking.",
    ],
    role_responsibilities: [
      "Growth strategy and paid media planning",
      "Meta Ads and LinkedIn Campaign Manager management",
      "Audience and geographic targeting",
      "Creative strategy and messaging",
      "University and community outreach",
      "Conversion tracking strategy",
    ],
    execution: [
      {
        title: "Growth strategy and paid media planning",
        body: "Developed a phased paid campaign across Meta platforms, including Facebook and Instagram, and LinkedIn. Planned cost-per-acquisition estimates for campaign phases and incorporated Instagram audience growth into the broader campaign plan.",
      },
      {
        title: "Paid campaign optimisation",
        body: "Managed Meta traffic campaigns and LinkedIn Campaign Manager activity. Compared cost per landing-page view across ad sets, identified weaker-performing campaigns, and planned budget reallocation towards better-performing alternatives to reduce wasted spend.",
      },
      {
        title: "International audience targeting",
        body: "Configured geographic targeting to exclude India and focus on the intended international student audience. Planned a transition towards a lead-generation objective, with Meta Pixel implementation and signup conversion tracking subject to landing-page access and technical implementation.",
      },
      {
        title: "Creative strategy",
        body: "Developed deadline-led advertising concepts designed to create urgency as the submission deadline approached. The messaging focused on learning automation, building a practical solution, joining a free challenge, and having a chance to win rewards.",
      },
      {
        title: "University and ecosystem outreach",
        body: "Conducted outreach to universities and innovation organisations in Ghana, including the University of Ghana, GCTU, Central University, Methodist University, Innohub, and Mobile Web Ghana. The outreach proposed a free workshop to introduce students to automation and encourage participation in the challenge.",
      },
      {
        title: "Hands-on product experimentation",
        body: "Working on a practical Maestro workflow concept: an AI-powered lost-and-found matching solution.",
        note: "Workflow prototype in progress",
      },
    ],
    measurement: [
      "Cost per landing-page view, compared across ad sets and platforms",
      "Landing-page-to-registration conversion rate",
      "Cost per registration",
      "Total registrations and countries reached",
      "University and community outreach responses",
      "Signup conversion tracking via Meta Pixel (planned, subject to landing-page access)",
    ],
    outcomes: {
      statusText: "Campaign in progress — performance results pending.",
      // Fill each value only with verified figures. Leave null until then.
      metrics: [
        { label: "Total registrations", value: null },
        { label: "Cost per registration", value: null },
        { label: "Cost per landing-page view", value: null },
        { label: "Landing-page-to-registration conversion rate", value: null },
        { label: "Countries reached", value: null },
        { label: "University and community outreach responses", value: null },
        { label: "Budget allocated and spent", value: null },
      ],
    },
    learning:
      "Effective growth marketing requires more than running ads. It combines audience strategy, creative testing, disciplined budget allocation, ecosystem partnerships, and reliable conversion measurement.",
    skills: [
      "International growth marketing",
      "Meta Ads and LinkedIn campaign management",
      "Paid acquisition planning",
      "Geographic audience targeting",
      "Conversion tracking strategy",
      "University and community outreach",
      "Education and B2B marketing",
      "Campaign creative development",
      "Hands-on workflow prototyping",
    ],
  },
  {
    slug: "improving-paid-acquisition-efficiency",
    title: "Improving Paid Acquisition Efficiency",
    summary:
      "A growing business spends across several paid channels but has no consistent way to decide which campaigns deserve more budget.",
    category: "Paid Acquisition",
    statuses: ["Illustrative Example"],
    illustrative: true,
    statusLine: "Illustrative example. Methodology only.",
    challenge: [
      "A growing business is spending across multiple paid channels but lacks a consistent framework for deciding which campaigns deserve more budget.",
    ],
    approach: [
      "Audit campaign structure and audience segmentation.",
      "Compare cost per qualified visit and conversion.",
      "Develop a structured creative-testing plan.",
      "Prioritise campaigns based on business value.",
      "Define a budget reallocation framework.",
      "Establish a reporting dashboard.",
    ],
    role_responsibilities: [
      "Lead the campaign audit and channel analysis",
      "Design the testing and reallocation framework",
      "Define KPIs and reporting with the internal team",
    ],
    execution: [
      { title: "Campaign audit", body: "A structured review of campaign setup, audiences and spend by channel." },
      { title: "Experimentation roadmap", body: "A prioritised plan of creative and audience tests." },
      { title: "Channel-level KPI framework", body: "Shared definitions of a qualified visit, lead and conversion for every channel." },
      { title: "Optimisation recommendations", body: "Clear rules for when to scale, hold or cut a campaign." },
    ],
    measurement: [
      "Cost per qualified lead",
      "Conversion rate",
      "Acquisition cost",
      "Incremental contribution",
    ],
    outcomes: {
      statusText: "Illustrative example. No measured results are claimed.",
    },
    learning:
      "Budget decisions are only as good as the definition of a qualified outcome. Agree on that first, then let the data move the money.",
  },
  {
    slug: "omnichannel-customer-engagement-strategy",
    title: "Designing an Omnichannel Customer Engagement Strategy",
    summary:
      "A business talks to customers on several channels but has no connected journey and no consistent way to measure it.",
    category: "Customer Engagement",
    statuses: ["Illustrative Example"],
    illustrative: true,
    statusLine: "Illustrative example. Methodology only.",
    challenge: [
      "A business communicates through multiple channels but lacks a connected customer journey and consistent measurement.",
    ],
    approach: [
      "Map customer lifecycle stages.",
      "Identify gaps in onboarding, engagement, and retention.",
      "Evaluate WhatsApp, email, SMS, and other relevant channels.",
      "Define communication triggers and audience segments.",
      "Design channel fallback and frequency-management principles.",
      "Establish a measurement framework.",
    ],
    role_responsibilities: [
      "Lead lifecycle mapping workshops",
      "Recommend the channel mix and journey design",
      "Define the measurement plan and rollout phases",
    ],
    execution: [
      { title: "Customer journey map", body: "Every lifecycle stage, trigger and touchpoint in one view." },
      { title: "Channel strategy", body: "Which channel does which job, with fallback and frequency rules." },
      { title: "Campaign framework", body: "Reusable journey templates for onboarding, engagement and retention." },
      { title: "Measurement plan and phased roadmap", body: "What to track at each stage, and the order to build in." },
    ],
    measurement: ["Delivery rate", "Engagement rate", "Conversion rate", "Repeat activity", "Opt-out rate"],
    outcomes: {
      statusText: "Methodology example. No measured results are claimed.",
    },
    learning:
      "Customers do not experience channels. They experience one brand. The journey should be designed first and the channels chosen to serve it.",
  },
  {
    slug: "growth-experimentation-system",
    title: "Building a Growth Experimentation System",
    summary:
      "A marketing team launches campaigns often but has no repeatable process for prioritising tests and learning from them.",
    category: "Growth Strategy",
    statuses: ["Illustrative Example"],
    illustrative: true,
    statusLine: "Illustrative example. Methodology only.",
    challenge: [
      "A marketing team launches campaigns regularly but lacks a repeatable process for prioritising and learning from experiments.",
    ],
    approach: [
      "Identify funnel bottlenecks.",
      "Develop a prioritised hypothesis backlog.",
      "Score experiments by impact, confidence, and effort.",
      "Define test designs and success criteria.",
      "Create a performance review cadence.",
      "Document learning and scaling decisions.",
    ],
    role_responsibilities: [
      "Facilitate funnel and hypothesis workshops",
      "Set up the prioritisation and review process",
      "Coach the team to run the cadence on its own",
    ],
    execution: [
      { title: "Experiment backlog", body: "A living list of hypotheses tied to funnel bottlenecks." },
      { title: "Prioritisation framework", body: "Impact, confidence and effort scoring, applied the same way every time." },
      { title: "Test plans and KPI dashboard requirements", body: "Success criteria agreed before a test starts." },
      { title: "Quarterly growth roadmap", body: "What to scale, what to stop and what to test next." },
    ],
    measurement: [
      "Experiment velocity",
      "Conversion performance",
      "Learning cycles",
      "Validated business impact",
    ],
    outcomes: {
      statusText: "Illustrative example. No measured results are claimed.",
    },
    learning:
      "A failed test with a clear lesson is progress. A test with no success criteria is just activity.",
  },
];

/** True when unapproved real projects may be shown (local dev and Vercel previews only). */
function draftsVisible() {
  return (
    process.env.NODE_ENV === "development" ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
  );
}

function isVisible(cs: CaseStudy) {
  if (cs.slug === "uipath-automate-campus-quest") {
    return UIPATH_DISCLOSURE_APPROVED || draftsVisible();
  }
  return true;
}

export function getCaseStudies() {
  return caseStudies.filter(isVisible);
}

export function getCaseStudy(slug: string) {
  return getCaseStudies().find((cs) => cs.slug === slug);
}
