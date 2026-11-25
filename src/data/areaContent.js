// Extra content for /areas/<slug>: practical tips by property type plus two FAQs per area.
// Kept general so it stays true; no response-time or price claims.
const faq = (name, nearby) => [
  { q: `Do you provide plumbing services in ${name}?`, a: `Yes. We serve ${name} and nearby areas including ${nearby}, for leaks, blocked drains, toilets, water heaters, pumps and installations.` },
  { q: `How do I get a quote for plumbing work in ${name}?`, a: `Call or WhatsApp us on +60 16-678 5404, describe the problem and send a photo if you can. We will give you a free quote before any work starts.` },
]

export const areaContent = {
  'mont-kiara': {
    tips: [
      'In a condominium, a leak that stains a neighbour\'s ceiling is urgent. Turn off the water to your unit and tell management.',
      'Low pressure on a high floor is common. Check if it happens at peak hours, which points to supply rather than your pipes.',
      'Many condo bathrooms hide pipes behind tiles and ceilings, so leak tracing before opening anything saves repair work.',
    ],
    faqs: faq('Mont Kiara', 'Sri Hartamas, Segambut and Bukit Damansara'),
  },
  damansara: {
    tips: [
      'In older landed houses, check exposed pipes and taps for corrosion or slow drips every few months.',
      'For shop lots, a blocked grease trap or floor drain can close a kitchen. Regular cleaning helps avoid it.',
      'If the toilet keeps running, a worn flush or fill valve is the usual cause and is a quick repair.',
    ],
    faqs: faq('Damansara', 'Mont Kiara, Petaling Jaya and Kepong'),
  },
  sentul: {
    tips: [
      'Older terrace houses often have ageing pipes. Brown or rusty water usually means corrosion.',
      'Slow drains in a ground-floor bathroom can come from the main line, not just the trap, so check other fixtures too.',
      'Newer condominiums may need a pressure check if showers are weak on upper floors.',
    ],
    faqs: faq('Sentul', 'Kepong, Mont Kiara and Ampang'),
  },
  kepong: {
    tips: [
      'Terrace houses with concealed pipes: a damp patch on a wall or an unexplained rise in your water bill suggests a hidden leak.',
      'Clean kitchen drains regularly. Grease buildup is a common cause of blockages in family homes.',
      'If a roof tank overflows, the float valve is usually worn. It is cheap to replace compared with the water it wastes.',
    ],
    faqs: faq('Kepong', 'Sentul, Damansara and Mont Kiara'),
  },
  'petaling-jaya': {
    tips: [
      'Older homes may still have original pipes. If you renovate, it is a good time to replace ageing sections.',
      'Water heaters that trip the power should be switched off and checked before further use.',
      'A ceiling stain is not always a pipe leak. It can also come from the bathroom above or the roof, so trace the source first.',
    ],
    faqs: faq('Petaling Jaya', 'Subang Jaya, Damansara and Shah Alam'),
  },
  'subang-jaya': {
    tips: [
      'If your water heater is not heating, check that the isolator is on and the breaker has not tripped. If it keeps tripping, call a plumber.',
      'Kitchen sinks in terrace homes block often from grease. A sink strainer reduces the problem.',
      'Dripping taps waste a surprising amount of water. Replacing the washer or cartridge is usually a short job.',
    ],
    faqs: faq('Subang Jaya', 'Petaling Jaya, Shah Alam and Puchong'),
  },
  'shah-alam': {
    tips: [
      'In bigger houses, long pipe runs make hidden leaks harder to spot. A water meter that moves with every tap off is a sign.',
      'Roof tanks and pumps need an occasional check: float valves, overflow pipes and the pump\'s start and stop.',
      'If the pump runs but flow is weak, the problem may be a blocked pipe or filter, not the pump itself.',
    ],
    faqs: faq('Shah Alam', 'Subang Jaya, Petaling Jaya and Puchong'),
  },
  puchong: {
    tips: [
      'In condominiums and townhouses, low pressure on upper floors is often a supply issue that a booster pump can solve.',
      'Shop units with busy kitchens should have floor drains and grease traps cleaned on a schedule.',
      'Before replacing a leaking tap or toilet connection, check whether the isolator valve behind it still shuts off fully.',
    ],
    faqs: faq('Puchong', 'Subang Jaya, Bukit Jalil and Shah Alam'),
  },
  ampang: {
    tips: [
      'Older bungalows and terraces often have mixed pipe materials. A leak at a joint between different pipes is common.',
      'In condominiums, check for water stains on bathroom ceilings below as early signs of a leak.',
      'If the shower heater smells or trips, switch it off and have it checked rather than resetting it repeatedly.',
    ],
    faqs: faq('Ampang', 'Sentul, Bukit Jalil and Mont Kiara'),
  },
  'bukit-jalil': {
    tips: [
      'In newer apartments, small leaks at toilet connections and taps are the most common early faults.',
      'Weak water pressure may come from a partly closed valve or a blocked aerator before it needs a pump.',
      'If your water heater is a new installation and still gives problems, check the wiring and connection first.',
    ],
    faqs: faq('Bukit Jalil', 'Puchong, Ampang and Subang Jaya'),
  },
}
