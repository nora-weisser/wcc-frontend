export const menuLinksTestCases = [
  {
    id: 'NAV-001',
    linkName: 'Home',
    pathToStart: '/mentorship',
    expectedURL: '',
    expectedText: 'Women Coding Community',
  },
  {
    id: 'NAV-002',
    linkName: 'Events',
    pathToStart: '/',
    expectedURL: '/events',
    expectedText: 'Welcome to the EventsPage',
  },
  {
    id: 'NAV-003',
    linkName: 'Blog',
    pathToStart: '/',
    expectedURL: '/blog',
    expectedText: 'Welcome to the Blog Page',
  },
  {
    id: 'NAV-004',
    linkName: 'Jobs',
    pathToStart: '/',
    expectedURL: '/jobs',
    expectedText: 'Welcome to the JobsPage',
  },
];

export const dropdownsTestCases = [
  {
    id: 'NAV-009',
    dropdownTitle: 'Programmes',
    dropdownItemsCount: 4,
    dropdownItemsTitles: [
      'Our Programmes',
      'Book Club',
      'Study Groups',
      'Interview Preparation',
    ],
  },
  {
    id: 'NAV-007',
    dropdownTitle: 'Mentorship',
    dropdownItemsCount: 10,
    dropdownItemsTitles: [
      'Overview',
      'Mentors',
      'Study Groups',
      'Mentor Registration',
      'Mentee Registration',
      'Resources',
      'Code of Conduct',
      'FAQs',
      'Long-Term Timeline',
      'Ad-Hoc Timeline',
    ],
  },
  {
    id: 'NAV-011',
    dropdownTitle: 'About Us',
    dropdownItemsCount: 8,
    dropdownItemsTitles: [
      'Overview',
      'Team',
      'Code of Conduct',
      'Donate',
      'Volunteer',
      'Partners',
      'Become a Partner',
      'Celebrate Her',
    ],
  },
];
