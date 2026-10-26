export type SessionType = "speech" | "panel" | "breakout" | "launch" | "networking" | "ceremony";

export interface Session {
  id: string;
  start: string; // 24h "HH:MM", Africa/Lagos, 2026-10-31
  end: string;
  type: SessionType;
  title: string;
  people: { role?: "Moderator" | "Panelist" | "Speaker" | "Host"; name: string }[];
  notes: string;
  group?: string; // sessions sharing a group run concurrently
  org?: string;   // e.g. CJID, BudgIT
}

export const sessions: Session[] = [
  {
    id: "registration",
    start: "08:30",
    end: "09:30",
    type: "networking",
    title: "Registration & Networking",
    people: [{ name: "Programs Team", role: "Host" }],
    notes: "Delegate registration, conference materials, networking, media interviews and exhibition viewing."
  },
  {
    id: "opening",
    start: "09:30",
    end: "09:35",
    type: "ceremony",
    title: "Opening Ceremony",
    people: [{ name: "Eric Mobu", role: "Host" }],
    notes: "Welcome, conference protocol and housekeeping announcements."
  },
  {
    id: "welcome",
    start: "09:35",
    end: "09:45",
    type: "ceremony",
    title: "Welcome Address & Opening Remarks",
    people: [{ name: "Johnson Sanni", role: "Speaker" }],
    notes: "Setting the vision for CFA 2026 and introducing the theme ADVANCE, highlighting why Nigeria's next phase of reform must be grounded in liberty, innovation and citizen-led leadership."
  },
  {
    id: "speech-1",
    start: "09:45",
    end: "09:55",
    type: "speech",
    title: "Speech 1: ADVANCE: Reimagining Freedom and Reform for Africa's Future",
    people: [{ name: "Abdullah Tijani", role: "Speaker" }],
    notes: "A flagship address exploring the future of liberty in Africa, the changing global landscape, and why freedom remains the foundation for prosperity, innovation and human flourishing."
  },
  {
    id: "panel-1",
    start: "10:00",
    end: "10:40",
    type: "panel",
    title: "General Panel 1: The Price and Promise of Freedom in a Changing Africa",
    people: [
      { name: "Abiye Briggs", role: "Moderator" },
      { name: "Victor Ndechi", role: "Panelist" },
      { name: "Anna Suberu", role: "Panelist" }
    ],
    notes: "What does Africa stand to gain when individuals have greater freedom to think, create, trade and build?"
  },
  {
    id: "tea",
    start: "10:40",
    end: "11:10",
    type: "networking",
    title: "Tea Break & Networking",
    people: [{ name: "All Participants" }],
    notes: "Networking and media engagement."
  },
  {
    id: "speech-2",
    start: "11:15",
    end: "11:25",
    type: "speech",
    title: "Speech 2: AI & Human Freedom in Africa",
    people: [{ name: "Dipo Ige", role: "Speaker" }],
    notes: "Will technology make young Africans more independent and prosperous, or create new forms of privacy risk, control, and dependency?"
  },
  {
    id: "launch-magazine",
    start: "11:25",
    end: "11:35",
    type: "launch",
    title: "Launch: The Liberalist Africa Magazine (Issue 2)",
    people: [{ name: "Abdullah Tijani", role: "Speaker" }],
    notes: "Official unveiling of Issue 2 of The Liberalist Africa, showcasing fresh ideas, policy analysis and compelling stories advancing the freedom movement across Africa."
  },
  {
    id: "panel-2",
    start: "11:40",
    end: "12:10",
    type: "panel",
    title: "General Panel 2: Beyond Good Intentions: Why Freedom Must Shape Nigeria's Next Generation of Reforms",
    people: [
      { name: "Bukola Adimula", role: "Moderator" },
      { name: "Bayonle Fesobi", role: "Panelist" },
      { name: "Chike Donald", role: "Panelist" }
    ],
    notes: "Examining why many well-intentioned reforms continue to expand state power, and how policymakers, civil society and reform advocates can advance liberty-centred alternatives that produce lasting development outcomes."
  },
  {
    id: "partners",
    start: "12:15",
    end: "12:20",
    type: "networking",
    title: "Partners Recognition, Social Media Moment & Networking",
    people: [{ name: "Eric Mobu", role: "Host" }],
    notes: "Recognition of conference partners, sponsors and collaborators, followed by a coordinated digital engagement campaign to amplify conference conversations online."
  },
  {
    id: "breakout-a",
    start: "12:25",
    end: "13:25",
    type: "breakout",
    group: "breakouts",
    org: "CJID",
    title: "Breakout Session A: Sustaining the Right to Know Through Freedom of Information",
    people: [{ name: "Christiana Longe", role: "Moderator" }],
    notes: "Participants are introduced to the importance of the right to access information and the Freedom of Information (FOI) Act as a practical tool for transparency, accountability and civic action. The session will show participants how to identify information, draft and submit FOI requests, follow up on requests, and respond when information is withheld or denied."
  },
  {
    id: "breakout-b",
    start: "12:25",
    end: "13:25",
    type: "breakout",
    group: "breakouts",
    org: "BudgIT",
    title: "Breakout Session B: Tracking Public Funds for Accountability",
    people: [{ name: "Oludamilola Onemano", role: "Moderator" }],
    notes: "A practical session to equip participants with the skills to follow public money from budget allocation to expenditure and implementation, and use financial information to promote transparency and accountability."
  },
  {
    id: "lunch",
    start: "13:30",
    end: "14:30",
    type: "networking",
    title: "Lunch & Networking",
    people: [{ name: "All Participants" }],
    notes: "Buffet lunch, partner engagement, exhibitions and networking opportunities."
  },
  {
    id: "speech-3",
    start: "14:35",
    end: "14:45",
    type: "speech",
    title: "Speech 3: What to Do with Our Rule of Law?",
    people: [{ name: "Festus Ogun", role: "Speaker" }],
    notes: "An inspiring speech on the challenges facing the Nigerian justice system and finding a way forward towards a country with a sustainable rule of law."
  },
  {
    id: "visa-free",
    start: "14:50",
    end: "15:00",
    type: "panel",
    title: "Discussion — Policy Brief: The Case for a Visa-free Nigeria",
    people: [
      { name: "Abdullah Tijani", role: "Moderator" },
      { name: "Chike Donald", role: "Panelist" },
      { name: "Tolulope Gbenro", role: "Panelist" }
    ],
    notes: "A panel discussion on the nature of Nigeria's visa policy, and how an open border can boost the country's overall growth."
  },
  {
    id: "launch-finar",
    start: "14:50",
    end: "15:00",
    type: "launch",
    title: "Launch: Freedom in Africa Report (F[in]AR 2026)",
    people: [{ name: "Anna Suberu", role: "Speaker" }],
    notes: "Official presentation of the 2026 Freedom in Africa Report, highlighting emerging trends, policy insights and evidence shaping conversations on freedom, governance and prosperity across the continent."
  },
  {
    id: "fireside",
    start: "15:05",
    end: "15:40",
    type: "panel",
    title: "Fireside Civic Panel: What Would You Advance? Changing Perspectives From Citizen Frustration to Sustainable Solutions",
    people: [
      { name: "Leonard Ogunweide", role: "Moderator" },
      { name: "Hashimu Adamu", role: "Panelist" },
      { name: "Tolulope Gbenro", role: "Panelist" },
      { name: "Akewushola Khadijah", role: "Panelist" }
    ],
    notes: "If you could change one thing about Nigeria's governance, economy or civic environment, what would you change, and how would you make it happen? The facilitators will guide the participants to find local solutions to local problems."
  },
  {
    id: "closing",
    start: "16:00",
    end: "16:15",
    type: "ceremony",
    title: "Closing Remarks, CFA 2027 Updates & Your Feedback QR Code",
    people: [{ name: "Ruth Okim", role: "Speaker" }],
    notes: "Summary of conference insights, appreciation to partners, speakers and participants, and a call to continue advancing freedom beyond the conference."
  },
  {
    id: "photo",
    start: "16:15",
    end: "16:30",
    type: "networking",
    title: "Group Photograph & Media Interviews",
    people: [{ name: "All Participants" }],
    notes: "Official conference photographs, interviews and networking before departure."
  }
];
