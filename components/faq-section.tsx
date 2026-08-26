import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is the Conference of Freedom Advocates (CFA)?",
      answer:
        "CFA is the Liberalist Centre’s flagship annual gathering. It is a space for advocates, researchers, journalists, policymakers, civil society leaders, and entrepreneurs to discuss ideas, build relationships, and identify practical solutions to turn evidence and ideas into reform.",
    },
    {
      question: "When and where will CFA 2026 take place?",
      answer:
        "CFA 2026 will take place on Saturday, 31 October 2026. The conference will be held in Abuja, Nigeria. The venue will be shared with registered participants.",
    },
    {
      question: "Who can attend?",
      answer:
        "CFA is open to anyone committed to advancing freedom, human rights, and citizen-led reform in Nigeria and Africa. This includes civil society practitioners, student leaders, journalists, entrepreneurs, researchers, academics, and public-sector reformers.",
    },
    {
      question: "Is there a cost to attend?",
      answer:
        "No. Attendance is free, but registration is required. Space is limited, and we encourage you to register early to secure your seat.",
    },
    {
      question: "Will there be support for travel or accommodation?",
      answer:
        "CFA does not provide direct financial support for travel or accommodation. Participants are expected to cover their own expenses. However, limited registration subsidies may be available for students and advocates from outside Abuja; details will be shared with registered participants.",
    },
    {
      question: "How can my organisation partner with CFA 2026?",
      answer:
        "We welcome partnerships with think tanks, civil society organisations, foundations, private-sector entities, and media houses. If you would like to collaborate, please complete the 'Become a Partner' form or contact Eric Mobu at eric@liberalistcentre.org.",
    },
    {
      question: "Can I cover the conference as a journalist?",
      answer:
        "Yes. Media representatives are invited to apply for media accreditation. Please contact Eric Mobu at eric@liberalistcentre.org to request press credentials.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">Help</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-slate-800 rounded-2xl px-6 bg-slate-950/40 backdrop-blur-sm transition-all duration-300 hover:border-red-500/20"
            >
              <AccordionTrigger className="text-left font-sans font-bold text-base md:text-lg text-slate-200 hover:text-red-500 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
