export interface Speaker {
  id: string
  name: string
  honorific?: string
  role: string
  organization: string
  badge: string
  image: string
  excerpt: string
  bioParagraphs: string[]
  tags: string[]
  links?: { label: string; url: string }[]
  dateText?: string
  locationText?: string
}

export const speakers: Speaker[] = [
  {
    id: "abdullah-tijani",
    name: "Abdullah Tijani",
    role: "Managing Editor & Executive Director",
    organization: "The Liberalist / Liberalist Centre",
    badge: "Executive Director, Liberalist Centre",
    image: "/images/speakers/abdullah-tijani.jpg",
    excerpt:
      "Nigerian journalist and legal professional working at the intersection of media, technology, and human rights. Executive Director of the Liberalist Centre and Managing Editor of The Liberalist.",
    bioParagraphs: [
      "Abdullah Tijani is a Nigerian journalist and legal professional working at the intersection of media, technology, and human rights. He is currently the Managing Editor of The Liberalist and Executive Director of the Liberalist Centre, where he leads editorial strategies and campaigns aimed at promoting liberty, free markets, and prosperity across Africa.",
      "Abdullah complements his investigative journalism with a robust background in law and emerging tech regulation. His work critically examines AI and tech policy, digital regulation, and data compliance, advocating for a balance between technological innovation and human freedom."
    ],
    tags: ["Media & Journalism", "AI & Tech Policy", "Human Rights", "Digital Regulation"],
    links: [
      { label: "The Liberalist", url: "https://theliberalist.org" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "leonard-ogunweide",
    name: "Leonard Ogunweide",
    role: "Author, Speaker & Product Leader",
    organization: "Face of Liberty International",
    badge: "Founder, Face of Liberty International",
    image: "/images/speakers/leonard-ogunweide.jpg",
    excerpt:
      "Nigerian author, speaker, product leader and institution builder working at the intersection of leadership, economic freedom, entrepreneurship, public policy and human development.",
    bioParagraphs: [
      "Leonard Ogunweide is a Nigerian author, speaker, product leader and institution builder working at the intersection of leadership, economic freedom, entrepreneurship, public policy and human development. He is Co-Founder of The Economic Freedom Initiative, Founder of Face of Liberty International and TEDxSangotedo Licensee. Through fellowships, public education, media, speaking and institution building, Leonard develops systems that help emerging African leaders translate ideas into disciplined action and lasting impact."
    ],
    tags: ["Leadership", "Economic Freedom", "Entrepreneurship", "Public Policy"],
    links: [
      { label: "Face of Liberty", url: "https://faceoflibertyinternational.org" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "dipo-ige",
    name: "Dipo Ige",
    role: "Legal Practitioner & Privacy Consultant",
    organization: "LawDigits",
    badge: "Legal Practitioner & Team Lead, LawDigits",
    image: "/images/speakers/dipo-ige.jpg",
    excerpt:
      "Legal practitioner and entrepreneur specialized academically in Data Protection/Privacy Law, Cybersecurity and Artificial Intelligence Governance with vast experience in privacy litigations.",
    bioParagraphs: [
      "Dipo Ige is a legal practitioner and entrepreneur specialized academically in Data Protection/Privacy Law, Cybersecurity and Artificial Intelligence Governance with vast experience in privacy litigations, data protection assessments, analysis, research as well as responsible AI development and deployment. He is an expert in rendering regulatory consultation services to both public and private actors on complex data matters, delivering privacy-driven strategic solutions and training. Over the years, Dipo has participated and headlined major privacy and personal data related cases involving data breach/leak, cyberattacks, cybercrime as a Partner in Equibridge Attorneys (EBA). He has also litigated matters involving the legal critique of data protection legislations and the role of regulators in the privacy space. Dipo holds a master’s degree in international human Rights Law with specialization in privacy rights and has vast experience as an implementer of the ISO 27001, ISO 42001, ISO 42005, NIST Framework, EU AI Act, Cybersecurity laws and the NDP-GAID 2025.",
      "He is currently the Team Lead at LawDigits, a consultancy firm specialised in Privacy, Cybersecurity and Artificial Intelligence governance and also doubles as the Director of Policy & Advocacy of the Data Privacy Lawyers Association of Nigeria (DPLAN), an organisation of privacy lawyers in Nigeria. Through his platform, Dipo has partnered with international organisations on complex data related projects as well as inventions pertaining to data localisation, data centre management and implementation of Privacy-Enhancing Technologies. He has also participated in multiple AI projects involving the health and financial sector.",
      "Currently, Dipo is working on multiple AI-Innovative projects with his team at Sentient Innovation Lab. You can check out the innovative work of the team at www.sentientinnovationlab.com or connect with Dipo directly on Linkedin."
    ],
    tags: ["Data Privacy", "Cybersecurity", "AI Governance", "ISO Standards"],
    links: [
      { label: "Sentient Innovation Lab", url: "http://www.sentientinnovationlab.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/search/results/all/?keywords=Dipo+Ige" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "khadijat-akewushola",
    name: "Akewushola Khadijat",
    role: "Public Policy & Governance Specialist",
    organization: "Nigerian Economic Summit Group (NESG)",
    badge: "Public Policy & Governance Specialist",
    image: "/images/speakers/khadijat-akewushola.jpg",
    excerpt:
      "Lawyer and public policy professional working at the intersection of law, governance, and economic reform. Leading subnational legislative reform work at the Nigerian Economic Summit Group.",
    bioParagraphs: [
      "Khadijat Akewushola is a lawyer and public policy professional working at the intersection of law, governance, and economic reform. She holds a law degree from Usmanu Danfodiyo University and graduated with a First Class from the Nigerian Law School, where she received the Director General’s Prize in recognition of her outstanding academic performance.",
      "She began her legal career at a leading commercial law firm, where she worked across the international trade, tax, and intellectual property practice areas. Her experience included advising multinational and domestic clients on complex regulatory and transactional matters, as well as providing legal insights on regional trade frameworks such as the African Continental Free Trade Area.",
      "Khadijat currently leads subnational legislative reform work at the Nigerian Economic Summit Group. In this role, she works closely with state legislatures, policymakers, and stakeholders to design and advance legislative reforms that strengthen the business environment across Nigerian states and support economic growth.",
      "Alongside her policy work, she serves as a Legal Consultant at ABE Legal Practitioners, where she provides advisory services on regulatory, governance, and commercial law matters. She was also a Policy Writing Fellow at Agora Policy, where she conducted research on the legal framework for effective mining governance in Nigeria, contributing to policy conversations on resource governance and institutional reform. She is a co-author of a UK Funded Baseline Report on Priority Legislative Actions for an enabling business environment in Nigeria. Khadijat is deeply committed to leveraging law and public policy to strengthen governance institutions and advance sustainable development in Nigeria and across Africa."
    ],
    tags: ["Public Policy", "Subnational Reform", "Economic Governance", "Trade & Tax Law"],
    links: [
      { label: "NESG", url: "https://nesgroup.org" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "oluwabukola-adimula",
    name: "Oluwabukola Adimula",
    role: "African Liberty Programs Associate",
    organization: "Students For Liberty",
    badge: "Programs Associate, African Liberty",
    image: "/images/speakers/oluwabukola-adimula.jpg",
    excerpt:
      "Researcher, writer, and communications professional working at the intersection of public policy, economic freedom, gender equality, and civic participation in Africa.",
    bioParagraphs: [
      "Oluwabukola Adimula is a researcher, writer, and communications professional working at the intersection of public policy, economic freedom, gender equality, and civic participation in Africa. She currently serves as an African Liberty Programs Associate at Students For Liberty, where she works on programmes that support young Africans through research, writing, policy engagement, and public discourse on freedom, prosperity, and good governance.",
      "Oluwabukola has been involved in youth development, policy advocacy, and civic engagement for several years. Her work has taken her to conferences and events across Africa, where she has spoken on issues relating to Technology, public policy, economic freedom, democracy, and civic participation. In 2023, she presented findings from From Protest to Action, a nationwide youth engagement project, at the 4th Commonwealth Conference on Youth Workers in the United Kingdom. The project, which contributed to the report A Nigeria for the Many, Not the Few, captured the views and aspirations of young people across 24 Nigerian states and involved more than 18,000 participants.",
      "Oluwabukola is an alumna of the African Liberty Writing Fellowship and a former Young Voices Contributor. Her writing focuses on public policy, free markets, economic freedom, and gender equality in Africa, and has appeared in publications including The Guardian, TheCable, International Affairs Forum, and RealClearWorld.",
      "She is a 2025 graduate of the School of Politics, Policy and Governance (SPPG), founded by Dr Obiageli “Oby” Ezekwesili. She is also currently undertaking the short course “Political Economy: African Debt and Economic Justice programme” at the University of Johannesburg."
    ],
    tags: ["Civic Participation", "Economic Freedom", "Youth Leadership", "African Liberty"],
    links: [
      { label: "African Liberty", url: "https://www.africanliberty.org" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "bayonle-fesobi",
    name: "Bayonle Fesobi",
    role: "Director of Research",
    organization: "Ominira Initiative",
    badge: "Director of Research, Ominira Initiative",
    image: "/images/speakers/bayonle-fesobi.jpg",
    excerpt:
      "Researcher, policy analyst, political scientist and leadership enthusiast. Director of Research at Ominira Initiative for Economic Advancement, advancing economic freedom and enterprise.",
    bioParagraphs: [
      "Bayonle Fesobi is a researcher, policy analyst, political scientist and leadership enthusiast. He is the Director of Research at Ominira Initiative for Economic Advancement, a non-profit organisation working to advance economic freedom, enterprise and good governance through research, engagement and policy advocacy. At Ominira, he leads research on economic freedom, business environment reform, property rights, trade and development.",
      "His professional and leadership experience spans more than a decade, including work across Guinea, Guinea-Bissau, Cape Verde, Sierra Leone, Tanzania, Kenya, Ghana, Ethiopia, Liberia and Benin Republic. In the last three years, he has led the production of five major groundbreaking research publications, including Essential Reforms for Economic Growth: An Economic Freedom Audit of Nigeria.",
      "Beyond research and policy, Bayonle has spoken at international conferences, panels and workshops. He has also conducted training programmes on leadership, capacity building, professional communication, personal branding, youth participation in politics, professional and spiritual development, and nonprofit management. When he is not writing, reading or serving in his local church, Bayonle enjoys travelling and playing the piano."
    ],
    tags: ["Economic Freedom", "Property Rights", "Policy Research", "Governance Reform"],
    links: [
      { label: "Ominira Initiative", url: "https://ominirainitiative.org" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "festus-ogun",
    name: "Festus Ogun",
    role: "Managing Partner & Human Rights Lawyer",
    organization: "FOLEGAL & Foundation for Digital Justice",
    badge: "Managing Partner, FOLEGAL",
    image: "/images/speakers/festus-ogun.jpg",
    excerpt:
      "Human rights lawyer and dispute resolution expert with extensive experience in human rights, civil liberties, and commercial litigation. Managing Partner of FOLEGAL and Founder of FDJ.",
    bioParagraphs: [
      "Festus Ogun is a human rights lawyer and dispute resolution expert with extensive experience in human rights, civil liberties, and commercial litigation. He is the Managing Partner of FOLEGAL, a specialist dispute resolution law firm with offices in Lagos and Abuja. In this capacity, he regularly appears before trial and appellate courts, the National Industrial Court, and arbitral tribunals. His practice encompasses civil liberties and human rights, commercial and corporate disputes, labour and employment, banking and finance, arbitration, electoral and constitutional matters, as well as privacy and digital rights litigation.",
      "Beyond his private practice, Festus is the Founder and Executive Director of the Foundation for Digital Justice (FDJ), a non-profit organisation advancing access to justice, human rights, digital freedom, justice-system reform, and sustainable development in Nigeria. He leads the organisation’s strategic litigation, public-interest advocacy, and legal reform initiatives, with a particular focus on protecting fundamental rights in Nigeria’s digital age.",
      "Festus is a member of several professional bodies, including the Nigerian Bar Association, International Bar Association, NBA Section on Business Law, Employment and Labour Lawyers Association of Nigeria, Nigerian Institute of Chartered Arbitrators, Young ICCA, and International Association of Constitutional Law. He also serves on the National Civil Liberties Committee of the Nigerian Bar Association. He is a frequent speaker at national and international forums on human rights, constitutional law, digital rights, dispute resolution, and justice reform. His work has received several recognitions, including a nomination among the Most Outstanding Young Persons in Legal Practice at the Lagos Youths Award (2022), finalist in the Under 30 CEOs Awards – Lawyers Category (2023)."
    ],
    tags: ["Human Rights", "Digital Justice", "Dispute Resolution", "Civil Liberties"],
    links: [
      { label: "FOLEGAL", url: "https://folegal.net" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "chike-donald",
    name: "Chike Donald Ibewuike",
    role: "Executive Director & Founder",
    organization: "Simplefix Nigeria",
    badge: "Executive Director, Simplefix Nigeria",
    image: "/images/speakers/chike-donald.jpg",
    excerpt:
      "Writer, community organiser and policy analyst. Founder & Executive Director at Simplefix Nigeria, Cato Institute intern, and author of policy briefs before the Nigerian House and Senate.",
    bioParagraphs: [
      "Chike Donald Ibewuike is a writer, community organiser and policy analyst. Chike founded the Cleaner FUTO Initiative in 2018, interned at the Cato Institute, and is a 2021 Pioneer alumnus of the #FixPolitics School of Politics, Policy and Governance. He has authored policy briefs tabled before the Nigerian House and Senate on student loans, state policing and local government autonomy.",
      "He holds a Master's in Research and Public Policy from the University of Lagos, with a dissertation building an original Strategic Readiness Index across 54 African countries. His writing has appeared in Business Day, The Republic Journal and African Qiraat. He is the founder & Executive Director at Simplefix Nigeria."
    ],
    tags: ["Policy Analysis", "Community Organizing", "Governance", "Public Policy"],
    links: [
      { label: "Simplefix Nigeria", url: "https://simplefix.org.ng" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "theresa-gbenro",
    name: "Theresa Tolulope Gbenro",
    role: "President & Social Impact Consultant",
    organization: "Grow with D Oracle Empowerment Foundation",
    badge: "President, Grow with D Oracle Empowerment Foundation",
    image: "/images/speakers/theresa-gbenro.jpg",
    excerpt:
      "Award-winning social impact consultant, President of Grow with D Oracle Empowerment Foundation, empowering 6000+ youth, AU-EU Youth Action Lab board member and Eco Champions winner.",
    bioParagraphs: [
      "Theresa Tolulope Gbenro is an award-winning social impact consultant with almost a decade of experience. She is the President of Grow with D Oracle Empowerment Foundation. Through flagship initiatives like Hone NYSC she has empowered 6000+ young people to live purposefully during the gap year.",
      "Tolulope sits on various global advisory boards like the AU-EU Youth Action Lab, ZenGuardian among others. Her work spans climate action, renewable energy, women's empowerment and youth governance. Tolulope has gained recognition by CEO Network Africa, ELOY and Future Africa Award for her impact. She is also a 2025 recipient of the Eco Champions Spark funding by SOS Children’s Village, 2022/2023 Nigerian Youth Futures Fund Leadership Grant and a 2023 International Climate Policy Competition Winner.",
      "She is an alumna of Enactus, MCN, Hult Prize, Leap Africa among other organizations. Tolulope holds a B.Sc in Industrial Physics-Applied Geophysics from Covenant University and has undergone specialized training in Climate Negotiation from IDEP. She is also a published author and has been featured on numerous media platforms."
    ],
    tags: ["Social Impact", "Youth Governance", "Women Empowerment", "Climate Action"],
    links: [
      { label: "Grow with D Oracle", url: "https://growwithdoracle.org" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "oludamilola-onemano",
    name: "Oludamilola Onemano",
    role: "Gender & Research Analyst",
    organization: "BudgIT",
    badge: "Gender & Research Analyst, BudgIT",
    image: "/images/speakers/oludamilola-onemano.jpg",
    excerpt:
      "Economist with over 7 years of experience driving fiscal governance reforms and sustainable development, leading analytical frameworks evaluating Nigerian fiscal health at BudgIT.",
    bioParagraphs: [
      "Oludamilola Onemano is an economist with over 7 years of experience driving fiscal governance reforms and sustainable development, and proven expertise in designing and leading analytical frameworks for evaluating Nigeria’s federal and subnational fiscal health.",
      "Plays a lead role in providing politically informed analysis to support the design and delivery of policies, programmes, and reforms providing actionable insights to inform policy reforms and fiscal governance improvements. Skilled in integrating economic analysis, policy research, and stakeholder engagement to advance equitable and sustainable public finance systems.",
      "Strong expertise in translating complex fiscal data into strategic recommendations that support transparency and accountability. She is the Gender & Research Analyst at BudgIT."
    ],
    tags: ["Fiscal Governance", "Economic Analysis", "Public Finance", "Accountability"],
    links: [
      { label: "BudgIT", url: "https://yourbudgit.com" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  },
  {
    id: "hashimu-adamu",
    name: "Hashimu Adamu",
    role: "Chairperson & Policy Researcher",
    organization: "AU–EU Youth Voices Lab & Voices and Data for Policy",
    badge: "Chairperson, AU-EU Youth Voices Lab & Advisory Board",
    image: "/images/speakers/hashimu-adamu.jpg",
    excerpt:
      "Youth leader, policy researcher and development professional. Chairperson of the AU–EU Youth Voices Lab Youth Advisory Board and Executive Lead of Voices & Data for Policy and Development Initiative.",
    bioParagraphs: [
      "Hashimu Adamu is a youth leader, policy researcher and development professional. He currently serves as Chairperson of the AU–EU Youth Voices Lab Youth Advisory Board and Executive Lead of Voices & Data for Policy and Development Initiative, a civic organisation advancing research, citizen participation and evidence-informed advocacy.",
      "Hashimu is a Commonwealth Scholar and a Fellow of the Legislative Mentorship Initiative (LMI), Nigerian Prize for Leadership, and Friedrich-Ebert-Stiftung Open Minds Young Voices, among others. He is also a Chatham House Common Futures Conversations (CFC) member.",
      "His work focuses on strengthening youth participation and civic engagement, and on using research and evidence to inform public policy and influence decision-making. He has contributed to national, continental and international platforms on youth leadership, governance, development and citizen participation."
    ],
    tags: ["Youth Leadership", "Policy Research", "Civic Participation", "Citizen Engagement"],
    links: [
      { label: "AU-EU Youth Voices Lab", url: "https://www.eeas.europa.eu" }
    ],
    dateText: "Sat 31st Oct 2026",
    locationText: "Abuja, Nigeria"
  }
]
