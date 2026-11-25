// FAQs shown on /faq. `schema: false` keeps an answer out of the FAQPage structured data
// (claims about licensing, response time and warranty are not repeated there until they are verified).
export const faqs = [
  {
    q: 'Do you offer 24/7 emergency plumbing service?',
    a: 'Yes. Our emergency plumbing team is available 24 hours a day, 7 days a week across Kuala Lumpur and Selangor for burst pipes, leaks, and blocked drains.',
    schema: true,
  },
  {
    q: 'Are your plumbers licensed and insured?',
    a: 'Yes, we are an SSM registered business and all our technicians are licensed and insured, so you can trust the work being done in your home or business.',
    schema: false,
  },
  {
    q: 'How fast can you respond to an emergency call?',
    a: 'For most areas in KL and Selangor, our team can be on-site within 30-60 minutes of your call, depending on traffic and location.',
    schema: false,
  },
  {
    q: 'Do you give a quote before starting work?',
    a: 'Yes, we explain the work and give you a quote before it begins, and no work starts without your approval. There are no hidden charges.',
    schema: true,
  },
  {
    q: 'What areas do you service?',
    a: 'We cover Kuala Lumpur, Mont Kiara, Damansara, Sentul, Kepong, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Ampang, and Bukit Jalil.',
    schema: true,
  },
  {
    q: 'What services do you offer besides plumbing?',
    a: 'Beyond plumbing, we offer kitchen renovation, house painting, flooring, and waterproofing services for homes and commercial spaces.',
    schema: true,
  },
  {
    q: 'Do you offer any warranty on your work?',
    a: 'Yes, every job is backed by our satisfaction guarantee. If an issue related to our work arises, we will make it right.',
    schema: false,
  },
]
