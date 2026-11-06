/**
 * Single source of truth for business details.
 * Source: Yell listing https://www.yell.com/biz/camberwell-car-wash-london-6555618/
 * (Railway Arch, 350 Camberwell Station Rd, London SE5 9JN · 020 7737 8037 · car wash / valeting) plus the email supplied by the client.
 * Edit here, then run `npm run build`. Items marked CONFIRM should be checked with the owner.
 */
module.exports = {
  name: 'Camberwell Car Wash',
  shortName: 'Camberwell Car Wash',
  brandSub: 'Hand Car Wash & Valeting',
  url: 'https://www.camberwellcarwash.co.uk', // CONFIRM: final domain
  area: 'Camberwell, Denmark Hill & South East London',
  phone: '020 7737 8037',
  phoneIntl: '+442077378037',
  phoneHref: 'tel:+442077378037',
  // Landline – no WhatsApp. Add a mobile WhatsApp link here if the business has one.
  whatsapp: '',
  whatsappNumber: '',
  address: { street: 'Railway Arch, 350 Camberwell Station Road', city: 'London', postcode: 'SE5 9JN', country: 'GB' },
  addressLine: 'Railway Arch, 350 Camberwell Station Rd, London SE5 9JN',
  mapQuery: '350 Camberwell Station Road, London SE5 9JN',
  yell: 'https://www.yell.com/biz/camberwell-car-wash-london-6555618/',
  // Opening hours were not listed on Yell – leave null to hide them. Add when confirmed, e.g.
  // hours: [['Monday – Saturday', '8:00am – 6:00pm'], ['Sunday', '9:00am – 4:00pm']], hoursShort: 'Mon–Sat 8am–6pm · Sun 9am–4pm'
  hours: null,
  openFrom: null, openTo: null, hoursShort: '', hoursLabel: '', openingHoursSchema: '',
  schemaType: 'AutoWash',
  schemaDescription: 'Hand car wash and valeting under the railway arches on Camberwell Station Road, London SE5.',

  // Quote form + chatbot leads are emailed here via FormSubmit (formsubmit.co). The FIRST submission sends a
  // one-time activation email to this inbox – click the link in it once.
  // CONFIRM: supplied as "camberwellcarwash2gmail.com" (no @). Read as camberwellcarwash@gmail.com –
  // if it should be camberwellcarwash2@gmail.com, change it here.
  email: 'camberwellcarwash@gmail.com',
  formEndpoint: null,

  socials: [
    { label: 'Camberwell Car Wash on Yell', icon: 'star', url: 'https://www.yell.com/biz/camberwell-car-wash-london-6555618/' },
  ],
  services: [
    { id: 'hand-wash', title: 'Exterior Hand Wash', short: 'Snow foam, hand wash, rinse and dry.' },
    { id: 'inside-out', title: 'Inside & Out', short: 'Hand wash plus interior hoover and wipe.' },
    { id: 'mini-valet', title: 'Mini Valet', short: 'A quick refresh inside and out.' },
    { id: 'full-valet', title: 'Full Valet', short: 'Our most thorough clean, inside and out.' },
    { id: 'interior-valet', title: 'Interior Deep Clean', short: 'Seats, carpets, mats and dashboard.' },
    { id: 'vans-4x4', title: 'Vans, 4x4s & MPVs', short: 'Bigger vehicles, washed and valeted.' },
  ],
};
if (!module.exports.formEndpoint && module.exports.email) {
  module.exports.formEndpoint = 'https://formsubmit.co/ajax/' + module.exports.email;
}
