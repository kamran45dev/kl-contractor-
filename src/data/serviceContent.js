// Extra page content for /services/<slug>: practical, general guidance. No prices, response
// times or guarantees here; those stay in the existing site copy. Used on the page and for FAQ schema.
export const serviceContent = {
  'emergency-plumbing': {
    signs: [
      'Water running from a burst pipe, ceiling or wall that will not stop',
      'A toilet or drain overflowing into the room',
      'No water at all, or brown water, from a sudden fault',
      'Water leaking near a water heater, power point or distribution board',
    ],
    before: [
      'Turn off the main water valve (usually near the meter or at the water tank outlet).',
      'If water is near sockets or the water heater, switch off the power at the main breaker, and only if it is safe to reach.',
      'Move furniture and electronics away from the water and put towels or a bucket under drips.',
      'Take a photo or short video of the leak. It helps us understand the problem before we arrive.',
    ],
    steps: [
      'Call or WhatsApp us and describe what is happening, with a photo if you can.',
      'We tell you what we think the cause is and what the repair involves.',
      'We stop the leak or blockage first, then repair the cause.',
      'We check that the fix holds and the area is dry, and explain what we did.',
    ],
    causes: [
      'Old or corroded pipes that finally split',
      'A loose or worn joint, valve or flexible hose',
      'High pressure that stresses weak pipework',
      'A blockage that backs up water into sinks, floor traps or toilets',
    ],
    faqs: [
      { q: 'What should I do while waiting for a plumber?', a: 'Turn off the main water valve, switch off the power if water is near electrical items and it is safe to do so, and move belongings away from the water. A photo of the leak helps us prepare.' },
      { q: 'Does a leak in my ceiling mean a pipe has burst?', a: 'Not always. Ceiling stains can come from a leaking pipe, a bathroom above, a roof leak or condensation. We trace the source before repairing so the problem does not return.' },
    ],
  },
  'pipe-repair-replacement': {
    signs: [
      'Damp patches, peeling paint or stains on walls and ceilings',
      'A water meter that keeps moving when every tap is off',
      'A sudden rise in your water bill without a change in use',
      'Discoloured water, or the sound of running water inside walls',
    ],
    steps: [
      'We look at where water is showing up and check the pipework around it.',
      'Where needed we trace concealed pipes to find the actual leak point.',
      'We explain whether a repair or a section replacement makes more sense, and quote before starting.',
      'We repair or replace the pipe, then test under pressure to confirm there is no leak.',
    ],
    causes: [
      'Age and corrosion, especially in older metal pipes',
      'Poor joints from earlier work',
      'Pipes damaged during renovation or drilling',
      'Excess water pressure that wears joints over time',
    ],
    faqs: [
      { q: 'Which pipe materials do you work with?', a: 'We work with PPR, PVC and copper pipes, including hidden pipes inside walls and ceilings.' },
      { q: 'Can a hidden leak be fixed without breaking a lot of the wall?', a: 'We try to locate the leak as precisely as possible first so that only the necessary section is opened. How much work is needed depends on where the pipe runs.' },
    ],
  },
  'toilet-repair-installation': {
    signs: [
      'A toilet that keeps running, or refills slowly after flushing',
      'Water pooling around the base of the toilet',
      'Weak flush, or a bowl that clogs often',
      'A cracked bowl, loose seat or wobbly toilet',
    ],
    steps: [
      'We check the flush system, fill valve, connections and bowl.',
      'We tell you whether a repair is enough or the toilet should be replaced.',
      'We fix or install it, seal the connections and check for leaks.',
      'We test flushing a few times before we finish.',
    ],
    causes: [
      'A worn flush valve, flapper or fill valve',
      'A loose or failed seal at the base',
      'Blockage further down the pipe',
      'Hard use over many years',
    ],
    faqs: [
      { q: 'Should I repair or replace my toilet?', a: 'If the fault is a worn part such as a flush valve or fill valve, repair is usually enough. A cracked bowl or repeated problems on an old unit usually point to replacement. We will tell you which fits your case.' },
      { q: 'Do you supply the new toilet?', a: 'We can install a toilet you have chosen or help you choose one that fits your bathroom. Ask when you call for a quote.' },
    ],
  },
  'drain-cleaning': {
    signs: [
      'Water draining slowly from the sink, basin or floor trap',
      'Gurgling sounds or bad smells from a drain',
      'Water backing up into another fixture when you use one',
      'Repeated blockages that come back after a few weeks',
    ],
    steps: [
      'We find where the blockage sits: the trap, the branch pipe or the main line.',
      'We choose the method: manual clearing, a drain rod, or high-pressure water jetting.',
      'We clear the blockage and flush the line to remove loosened debris.',
      'We test that water drains freely and tell you what caused it.',
    ],
    causes: [
      'Grease and food waste in kitchen drains',
      'Hair, soap and debris in bathroom drains',
      'Objects flushed down toilets',
      'Roots or damaged pipes in older lines',
    ],
    faqs: [
      { q: 'Can I use chemical drain cleaners?', a: 'We do not recommend using strong chemical cleaners often. They can damage pipes and rarely clear grease or solid blockages fully. A mechanical or jetting clean works better.' },
      { q: 'How can I stop my kitchen drain blocking again?', a: 'Wipe greasy pans before washing, use a sink strainer, and flush the drain with hot water now and then. If it keeps blocking, the line may need cleaning or a closer look.' },
    ],
  },
  'water-pressure': {
    signs: [
      'A weak shower or tap flow on some or all floors',
      'Pressure that drops when two fixtures run together',
      'Noisy pipes or sudden pressure spikes',
      'Water that arrives slowly into a tank or heater',
    ],
    steps: [
      'We ask when the problem happens: all day or at certain times, on one tap or the whole house.',
      'We check taps, filters, valves, the tank outlet and the pipework for restrictions.',
      'We separate a supply problem (low pressure from the mains) from a problem inside your property.',
      'We recommend a fix, such as cleaning, replacing a valve or fitting a booster pump.',
    ],
    causes: [
      'Blocked aerators, shower heads or filters',
      'Partly closed or faulty valves',
      'Scale or corrosion narrowing old pipes',
      'Low supply pressure, common on upper floors or at peak hours',
    ],
    faqs: [
      { q: 'Why is my water pressure low only at certain times?', a: 'This often points to the supply side: peak-hour demand, or a shared riser in a high-rise building. A tank with a booster pump can smooth this out.' },
      { q: 'Will a booster pump fix every low pressure problem?', a: 'No. A pump helps when the supply is weak, but it will not fix a blocked pipe or a faulty valve. That is why we check the cause first.' },
    ],
  },
  'water-heater': {
    signs: [
      'The water stays cold or only turns lukewarm',
      'The heater trips the power or the breaker',
      'Water leaking from the heater or its pipes',
      'Strange noises, or a heater that takes much longer than before',
    ],
    steps: [
      'We check the power supply, the heater and its connections safely.',
      'We tell you whether the fault is a part (element, thermostat, shower mixer) or the whole unit.',
      'We repair it, or install a new unit and connect it properly.',
      'We test the hot water and check for leaks and tripping before we finish.',
    ],
    causes: [
      'A worn heating element or thermostat',
      'Scale built up inside the tank',
      'Water leaking into electrical parts',
      'Poor wiring or a faulty switch',
    ],
    faqs: [
      { q: 'Is a leaking water heater dangerous?', a: 'It can be, because water and electricity do not mix. Switch off the heater at the isolator or breaker and call a plumber before using it again.' },
      { q: 'Do you work on electric, gas and solar heaters?', a: 'Yes, we install and repair electric, gas and solar water heaters for homes and businesses.' },
    ],
  },
  'booster-pump': {
    signs: [
      'Weak water flow on upper floors or at the end of the house',
      'Water that arrives slowly from a tank',
      'An existing pump that is noisy, cycles on and off, or does not start',
      'Pressure that varies a lot during the day',
    ],
    steps: [
      'We check your supply, tank, pipe sizes and where low pressure shows up.',
      'We recommend a pump size and position that suits your property and water use.',
      'We install the pump with the right valves, fittings and electrical connection.',
      'We test the flow and pressure at the taps and check the pump runs normally.',
    ],
    causes: [
      'Low mains pressure or a high-rise supply',
      'An undersized or partly blocked pipe',
      'A tank that sits too low or too far from the outlets',
      'An old pump that has lost performance',
    ],
    faqs: [
      { q: 'Do I need a water tank to use a booster pump?', a: 'In many Malaysian homes the pump draws from a tank. The right setup depends on how your supply is arranged, so we check this before recommending a pump.' },
      { q: 'Are booster pumps noisy?', a: 'A properly sized and installed pump runs fairly quietly. Noise usually points to the wrong size, air in the line or loose mounting, all of which can be corrected.' },
    ],
  },
  'waterproofing': {
    signs: [
      'Damp patches or stains on ceilings below a bathroom, balcony or roof',
      'Peeling paint or bubbling plaster near wet areas',
      'Water seeping into rooms after heavy rain',
      'Mould or a musty smell that returns after cleaning',
    ],
    steps: [
      'We find where the water is coming from and whether it is a surface or a structural problem.',
      'We prepare the surface: clean it, repair cracks and remove loose material.',
      'We apply the waterproofing system suited to the area, such as a toilet floor, balcony or roof.',
      'We check the coating has cured and, where possible, test that the area holds water.',
    ],
    causes: [
      'Worn or missing waterproofing under tiles',
      'Cracks in concrete slabs and screeds',
      'Poor sealing around pipes and drains',
      'Roof or balcony surfaces that have aged under sun and rain',
    ],
    faqs: [
      { q: 'Which areas of a house need waterproofing most?', a: 'Bathrooms and toilets, kitchens, balconies, car porches and flat roofs, because they get the most water and weather.' },
      { q: 'Will waterproofing fix a leaking pipe?', a: 'No. If the water comes from a pipe, the pipe needs repair first. Waterproofing is for water that enters through surfaces, not for pressurised leaks.' },
    ],
  },
  'sink-basin-shower': {
    signs: [
      'A dripping tap or mixer that will not stop',
      'A shower that sprays unevenly or loses pressure',
      'A sink or basin that is cracked, loose or slow to drain',
      'Water leaking under a cabinet or basin',
    ],
    steps: [
      'We check the fixture, the connections underneath and the drain.',
      'We confirm whether a repair or replacement fits your budget and the condition of the unit.',
      'We install or repair the fixture, connect water and drain lines and seal the joints.',
      'We run the water and check for leaks and proper draining.',
    ],
    causes: [
      'Worn washers, cartridges or seals in taps and mixers',
      'Loose or aged connectors under the basin',
      'Scale blocking shower heads',
      'Poor drainage setup from the original installation',
    ],
    faqs: [
      { q: 'Can you install a sink or shower I bought myself?', a: 'Yes, we can install fixtures you have already chosen. Share the model or a photo when you call so we can plan the work.' },
      { q: 'Why does my shower have weak flow?', a: 'It is often a blocked shower head or filter. If cleaning does not help, the cause may be low supply pressure or a partly closed valve, which we can check.' },
    ],
  },
  'kitchen-renovation': {
    signs: [
      'Cabinets that are damaged, swollen or no longer fit your needs',
      'Worktops, sinks or taps that are worn out',
      'Poor layout or too little storage',
      'Plumbing or wiring that needs moving as part of an upgrade',
    ],
    steps: [
      'We discuss what you want to change and look at the space.',
      'We explain the scope and give a written quote before work starts.',
      'We do the work in stages: removal, plumbing and electrical, installation and finishing.',
      'We check the plumbing, fittings and finish with you before we complete the job.',
    ],
    causes: [
      'Cabinets damaged by water or age',
      'Layouts that no longer suit how you cook',
      'Moving a sink or hob that needs new pipes',
      'Updating a kitchen before selling or renting',
    ],
    faqs: [
      { q: 'Do you handle the plumbing in a kitchen renovation?', a: 'Yes. Plumbing and electrical work is part of our kitchen renovation service, so one team can handle moving sinks, taps and water lines.' },
      { q: 'Can I renovate only part of the kitchen?', a: 'Yes. You can change only the cabinets, worktop, sink or tiles. We will explain what each option involves.' },
    ],
  },
  'house-painting': {
    signs: [
      'Peeling, flaking or faded paint',
      'Stains or mould patches after water damage',
      'Cracks in plaster that need patching before painting',
      'A refresh before moving in, renting out or selling',
    ],
    steps: [
      'We look at the surfaces and note repairs needed, such as cracks, damp or old paint.',
      'We agree the colours, paint type and areas to paint, and give a quote.',
      'We prepare the surfaces: protect floors and furniture, patch, sand and prime.',
      'We apply the coats and check the finish with you.',
    ],
    causes: [
      'Moisture from leaks or poor ventilation',
      'Sun and rain on exterior walls',
      'Poor surface preparation in earlier painting',
      'Normal wear over several years',
    ],
    faqs: [
      { q: 'Should I fix a leak before painting?', a: 'Yes. Painting over damp or a leak hides the problem for a short time and the paint will peel again. Fix the source first, let the wall dry, then paint.' },
      { q: 'Can you paint offices and shop lots?', a: 'Yes. We paint homes, apartments, condominiums, offices and shop lots, inside and outside.' },
    ],
  },
  'flooring-services': {
    signs: [
      'Cracked, hollow-sounding or loose tiles',
      'Worn, scratched or swollen wooden or laminate floors',
      'Floors that no longer match the rest of the room',
      'Damp or lifting flooring in wet areas',
    ],
    steps: [
      'We look at the floor, the subfloor and how the space is used.',
      'We recommend suitable materials, such as tile, vinyl, laminate or wood, and quote the job.',
      'We prepare the surface and lay the flooring.',
      'We finish edges and joints and check the result with you.',
    ],
    causes: [
      'Moisture from leaks under the floor',
      'Movement in the slab or poor original installation',
      'Heavy use in busy rooms',
      'Choosing a material that does not suit the room',
    ],
    faqs: [
      { q: 'Which flooring suits a bathroom or kitchen?', a: 'Tile and vinyl handle moisture best. Wood and some laminates can swell, so they suit dry rooms better.' },
      { q: 'Do you repair floors as well as replace them?', a: 'Yes. We can replace damaged tiles or boards, or lay a whole new floor, depending on the condition.' },
    ],
  },
}
