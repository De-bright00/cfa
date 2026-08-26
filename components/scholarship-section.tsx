"use client"

import { Button } from "@/components/ui/button"

export function ScholarshipSection() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans text-center text-white">Scholarships</h2>

            <p className="text-lg leading-relaxed mb-6 text-center text-gray-100">
              We are committed to ensuring that passionate reformers and young leaders from across Nigeria can attend
              the Conference of Freedom Advocates (CFA). To make this possible, limited scholarships are available to
              cover participation costs for selected applicants.
            </p>

            <p className="text-lg mb-8 text-center text-gray-100">Apply now</p>

            <div className="text-center">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
                onClick={() => window.open("https://forms.gle/RWNTtB31NU7XcG166", "_blank")}
              >
                Apply for Scholarship
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
