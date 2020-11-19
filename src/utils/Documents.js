const Documents = [
  {
    id: 1,
    name: 'Passport',
    type: 'Identity',
    status: 'Required',
    source: 'Passport Office',
    contact: 'https://www.passports.gov.au/'
  },
  {
    id: 2,
    name: 'Birth Certificate',
    type: 'Identity',
    status: 'Preferred',
    source: 'Births, Deaths and Marriages',
    contact: 'https://www.nsw.gov.au/births-deaths-marriages'
  },
  {
    id: 3,
    name: 'Police Certificate',
    type: 'Character',
    status: 'Required',
    source: 'Australian Federal Police',
    contact: 'https://afpnationalpolicechecks.converga.com.au/'
  },
  {
    id: 4,
    name: 'Marriage Certificate',
    type: 'Relationship Evidence',
    status: 'Required (if married)',
    source: 'NSW Government Services',
    contact: 'https://www.nsw.gov.au/topics/marriages/marriage-certificates',
  },
  {
    id: 5,
    name: 'Relationship Certificate',
    type: 'Relationship Evidence',
    status: 'Required (if not married)',
    source: 'NSW Government Services',
    contact: 'https://www.nsw.gov.au/living-nsw/family-and-relationships/relationship-register',
    },
  {
    id: 6,
    name: 'Lease Document (12 months or more)',
    type: 'Cohabitation Evidence',
    status: 'Preferred. Other Cohabitation evidence possible if NA',
    source: 'Landlord',
    contact: 'landlord/real estate agent'
  },
  {
    id: 7,
    name: 'Correspondence to shared address (12 months or more)',
    type: 'Cohabitation Evidence',
    status: 'Required if no lease document available',
    source: 'Personal records',
    contact: 'Obtain previous correspondence from utility/government agency'
  },
  {
    id: 8,
    name: 'Health Records',
    type: 'Health',
    status: 'Required (if you have an ongoing health condition)',
    source: 'Personal Records',
    contact: 'Local GP'
  },
  {
    id: 9,
    name: 'Photograph Booklet',
    type: 'Relationship Evidence',
    status: 'Preferred (if not married)',
    source: 'Personal Records',
    contact: 'Family and friends'
  },
  {
    id: 10,
    name: 'Children birth certificates',
    type: 'Identity',
    status: 'Required (if children)',
    source: 'Passsport Office',
    contact: 'https://www.passports.gov.au/'
  },
  {
    id: 11,
    name: 'Children passports',
    type: 'Identity',
    status: 'Required (if children)',
    source: 'Passport Office',
    contact: 'https://www.nsw.gov.au/births-deaths-marriages'
  }
];

export default Documents;