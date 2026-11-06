// Services content. Yell lists the business as a car wash / car valeting business. The service names and
// "what's included" lists are typical for a UK hand car wash – CONFIRM with the owner, and add prices if wanted
// (set `price: 'From £10'` on any service and it will show on the card).
module.exports = [
  { id: 'hand-wash', icon: 'drop', img: 'hand-wash-foam', alt: 'Car covered in foam being hand washed', title: 'Exterior Hand Wash', price: '',
    intro: 'A proper hand wash that is gentle on your paintwork, unlike automatic brushes.',
    points: ['Snow foam pre-wash', 'Two-bucket hand wash', 'Wheels and tyres cleaned', 'Rinse and hand dry', 'Exterior windows cleaned'] },
  { id: 'inside-out', icon: 'car', img: 'clean-polo', alt: 'Clean blue hatchback', title: 'Inside & Out', price: '',
    intro: 'Our everyday favourite: a full hand wash outside and a quick tidy inside.',
    points: ['Everything in the exterior hand wash', 'Interior hoovered', 'Dashboard and console wiped', 'Inside windows cleaned', 'Mats hoovered'] },
  { id: 'mini-valet', icon: 'sparkle', img: 'clean-hatchback', alt: 'Shiny red hatchback', title: 'Mini Valet', price: '',
    intro: 'A step up when the car needs more than a wash, but not a full valet.',
    points: ['Hand wash and dry', 'Full interior hoover, including boot', 'Plastics and door panels wiped', 'Windows inside and out', 'Tyre dressing'] },
  { id: 'full-valet', icon: 'award', img: 'clean-coupe', alt: 'Gleaming blue coupé', title: 'Full Valet', price: '',
    intro: 'Our most thorough clean, ideal before selling the car, after a long trip or once in a while.',
    points: ['Everything in the mini valet', 'Seats and carpets shampooed', 'Door shuts and sills cleaned', 'Interior plastics dressed', 'Hand polish or wax finish'] },
  { id: 'interior-valet', icon: 'seat', img: 'interior-seats', alt: 'Clean leather car seats', title: 'Interior Deep Clean', price: '',
    intro: 'For kids, pets, muddy boots and coffee spills. We get the inside of the car back to fresh.',
    points: ['Deep hoover of seats and carpets', 'Fabric seats shampooed', 'Leather cleaned', 'Dashboard, vents and console', 'Mats deep cleaned'] },
  { id: 'vans-4x4', icon: 'engine', img: 'black-4x4', alt: 'Clean black 4x4', title: 'Vans, 4x4s & MPVs', price: '',
    intro: 'Bigger vehicle? No problem. We wash and valet vans, 4x4s, SUVs and people carriers too.',
    points: ['Hand wash for larger vehicles', 'Roof and high panels (where reachable)', 'Interior valet options', 'Work vans welcome', 'Ask about regular washes'] },
];
