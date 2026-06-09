// Central content for the site. Swap these values for real copy/assets later.

export const site = {
	name: 'Vijay Anand Foundation',
	tagline: 'Empowering communities through education & healthcare',
	mission:
		'We partner with local communities to break the cycle of poverty — funding schools, clinics, and the people who make lasting change possible.',
	email: 'anand@avnan.com',
	address: '2408 Jarvis Street, Mississauga L5C 2P6',
	registration: '89457 6958 RR0001',
	social: [
		{ label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
		{ label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
		{ label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
		{ label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' }
	]
};

export const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About Us', href: '/about' },
	{ label: 'Our Initiatives', href: '/initiatives' },
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Impact Stories', href: '/impact' },
	{ label: 'Partners', href: '/partners' }
];

export const stats = [
	{ value: '22K+', label: 'Lives reached' },
	{ value: '$10M', label: 'Funds deployed' },
	{ value: '12', label: 'Partner organizations' },
	{ value: '3', label: 'Countries reached' }
];

export const initiatives = [
	{
		slug: 'healthcare',
		title: 'Community Healthcare',
		summary:
			'Mobile clinics and maternal care programs that bring essential medicine to remote regions.',
		icon: 'heart-pulse',
		image:
			'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
		points: ['Mobile medical units', 'Maternal & child health', 'Vaccination drives']
	},
	{
		slug: 'childcare',
		title: 'Childcare & Protection',
		summary:
			'Safe shelters, nutrition, and family support that give every child a stable, healthy start.',
		icon: 'baby',
		image:
			'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=80',
		points: ['Early-development centres', 'School meals & nutrition', 'Care for at-risk children']
	},
	{
		slug: 'education',
		title: 'Education for All',
		summary:
			'Building schools, training teachers, and funding scholarships so every child has a path to learning.',
		icon: 'graduation-cap',
		image:
			'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
		points: ['Classroom construction', 'Teacher training fellowships', 'Girls’ scholarship fund']
	}
];

// Founder's biography — rendered as alternating left/right story blocks on the About page.
export const founderStory = [
	{
		year: '1944 · New Delhi',
		title: 'Roots in New Delhi',
		image:
			'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1100&q=80',
		body: [
			'Anand was born on February 25, 1944 in New Delhi, India — during the Second World War, while India was still under British rule. His father had just completed his education and was articling to become a Chartered Accountant.',
			'His mother was a loving, caring woman who instilled the values of truthfulness, non-violence, love for all beings, and helping others. His father added the value of rational evaluation before adopting any tradition or binding ritual.'
		]
	},
	{
		year: '1965 · Age 21',
		title: 'A young engineer',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1100&q=80',
		body: [
			'Driven and academically gifted, Anand completed his graduate degree in Electrical Engineering at the young age of 21, in 1965 — setting the foundation for a lifelong career in engineering.'
		]
	},
	{
		year: '1975 · Montreal, Canada',
		title: 'A new life in Canada',
		image:
			'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1100&q=80',
		body: [
			'After working as a sales and marketing executive at Crompton Greaves — a large corporation in India — for nine years, Anand immigrated to Montreal, Canada in September 1975, with a young family, two young sons, and just $16 in his pocket.',
			'To earn his professional engineering status he had to learn a new language, French. He soon joined the Canadian Standards Association and quickly rose to Senior Certification Engineer. During these years the family grew to three smart sons, all of whom became engineers from the Ontario universities of Ottawa and Waterloo.'
		]
	},
	{
		year: '1989 · Entrepreneurship',
		title: 'Building a dream',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80',
		body: [
			'Anand had a lifelong dream of running his own business. He began developing newer products for North American manufacturers, left his job at CSA in 1989, and went full-time into business and engineering consulting.',
			'With the grace of God, hard work, and the support of his wife Vijay — who managed the finance and administration of the business, provided steady encouragement, and raised the family with good values — the business became progressively successful.'
		]
	},
	{
		year: '1995 · The Foundation',
		title: 'Giving back',
		image:
			'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1100&q=80',
		body: [
			'In 1993 the family moved to Mississauga, Ontario. Guided by the value of sharing wealth to help others, they formed the Vijay Anand Foundation in 1995.',
			'They began contributing endowment funds from their annual income to support charitable activities — during their lives, and beyond.'
		]
	}
];

export const values = [
	{
		title: 'Local first',
		body: 'We fund and follow the lead of community organizations who know their neighbors best.',
		icon: 'users'
	},
	{
		title: 'Radically transparent',
		body: 'Every dollar is tracked and reported. You can see exactly where your support goes.',
		icon: 'eye'
	},
	{
		title: 'Built to last',
		body: 'We invest in infrastructure and people so impact outlives any single grant.',
		icon: 'infinity'
	}
];

export const foundingDirectors = [
	{ name: 'Anand Jain', role: 'Founding Director' },
	{ name: 'Vijay Jain', role: 'Founding Director' },
	{ name: 'Neeraj Jain', role: 'Founding Director' }
];

export const boardOfDirectors = [
	{ name: 'Anuj Jain', role: 'Board Director' },
	{ name: 'Nitin Jain', role: 'Board Director' },
	{ name: 'Rakesh Gupta', role: 'Board Director' }
];

export const milestones = [
	{ year: '1995', title: 'Founded', body: 'The Vijay Anand Foundation was formed in Mississauga, Ontario to support charitable activities.' },
	{ year: '2005', title: 'First major grant', body: 'Partnered with Operation Eyesight Universal to fund cataract operations in rural India.' },
	{ year: '2015', title: 'Growing impact', body: 'Built a student hostel near Vrindavan through Aim for Seva, housing boys ages 10–18.' },
	{ year: '2024', title: '22,000+ lives', body: 'Reached a milestone of 22,000+ people supported across our programs in 3 countries.' }
];

export const stories = [
	{
		slug: 'aim-for-seva',
		name: 'Aim for Seva — Student Hostels',
		location: 'Vrindavan, India',
		category: 'Children',
		excerpt:
			'Building student hostels for boys aged 10–18 studying from primary education to high school. We made a large donation to build a student hostel near Vrindavan, costing approximately $220,000 plus support from friends and relatives.',
		image:
			'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80'
	},
	{
		slug: 'university-of-waterloo',
		name: 'University of Waterloo — Entrepreneurship',
		location: 'Waterloo, Canada',
		category: 'Education',
		excerpt:
			'The $100,000 foundational gift was a beginning of entrepreneurship at the University of Waterloo, supporting the next generation of innovators and business leaders.',
		image:
			'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'
	},
	{
		slug: 'operation-eyesight',
		name: 'Operation Eyesight Universal',
		location: 'Calgary / India',
		category: 'Healthcare',
		excerpt:
			'We started with Operation Eyesight Universal of Calgary doing cataract operations in villages of poor and old farmers in India, restoring sight and dignity to those who need it most.',
		image:
			'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'
	}
];

export const gallery = [
	'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80'
];

// `url` is the partner's homepage and `domain` is used to pull the org's real brand mark
// (favicon) from the web for the marquee. Partners without a confirmed domain fall back to
// a category icon based on `kind`.
export const partners = [
	{ name: 'University of Waterloo', kind: 'Education', url: 'https://uwaterloo.ca', domain: 'uwaterloo.ca' },
	{ name: 'University of Toronto Mississauga', kind: 'Education', url: 'https://utm.utoronto.ca', domain: 'utoronto.ca' },
	{ name: 'Sheridan College', kind: 'Education', url: 'https://sheridancollege.ca', domain: 'sheridancollege.ca' },
	{ name: 'Aim For Seva', kind: 'Childcare', url: 'https://aimforseva.in', domain: 'aimforseva.in' },
	{ name: 'Trillium Health Partners', kind: 'Healthcare', url: 'https://trilliumhealthpartners.ca', domain: 'trilliumhealthpartners.ca' },
	{ name: 'Operation Eyesight Universal', kind: 'Healthcare', url: 'https://operationeyesight.com', domain: 'operationeyesight.com' },
	{ name: 'Peel Learning Foundation', kind: 'Education', url: 'https://www.peellearningfoundation.org', domain: 'peellearningfoundation.org' },
	{ name: 'Halton Learning Foundation', kind: 'Education', url: 'https://haltonlearningfoundation.ca', domain: 'haltonlearningfoundation.ca' },
	{ name: 'Udayan Care', kind: 'Childcare', url: 'https://udayancare.org', domain: 'udayancare.org' },
	{ name: 'Sai Dham Food Bank', kind: 'Childcare', url: 'https://saidhamfoodbank.com', domain: 'saidhamfoodbank.com' },
	{ name: 'Canada Red Cross', kind: 'Healthcare', url: 'https://redcross.ca', domain: 'redcross.ca' },
	{ name: 'Creating Hopes', kind: 'Healthcare', url: '#' }
];

// Partners grouped by focus area (alternating left/right blocks of partner cards).
export const partnerCategories = [
	{
		key: 'education',
		title: 'Education',
		icon: 'graduation-cap',
		subtitle: 'Opening doors to learning and entrepreneurship.',
		image:
			'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1100&q=80',
		organizations: [
			{
				name: 'University of Waterloo',
				url: 'https://uwaterloo.ca',
				description: 'A foundational gift supporting entrepreneurship programs and innovation at one of Canada\'s top universities.'
			},
			{
				name: 'University of Toronto Mississauga',
				url: 'https://utm.utoronto.ca',
				description: 'Supporting educational programs and scholarships at UTM.'
			},
			{
				name: 'Sheridan College',
				url: 'https://sheridancollege.ca',
				description: 'Partnering with Sheridan to expand access to quality education.'
			},
			{
				name: 'Peel Learning Foundation',
				url: '#',
				description: 'Supporting educational opportunities for students in the Peel Region.'
			},
			{
				name: 'Halton Learning Foundation',
				url: '#',
				description: 'Helping students in the Halton Region access the resources they need to succeed.'
			}
		]
	},
	{
		key: 'childcare',
		title: 'Childcare',
		icon: 'baby',
		subtitle: 'Giving every child a safe and stable start.',
		image:
			'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1100&q=80',
		organizations: [
			{
				name: 'Aim For Seva',
				url: 'https://aimforseva.in',
				description: 'Building student hostels for boys aged 10–18 providing education from primary to high school.'
			},
			{
				name: 'Udayan Care',
				url: 'https://udayancare.org',
				description: 'Empowering vulnerable children and youth through family-based care and education.'
			},
			{
				name: 'Sai Dham Food Bank',
				url: '#',
				description: 'Providing nutritious meals and food support to families and children in need.'
			}
		]
	},
	{
		key: 'healthcare',
		title: 'Healthcare',
		icon: 'heart-pulse',
		subtitle: 'Bringing essential care to the communities that need it most.',
		image:
			'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80',
		organizations: [
			{
				name: 'Trillium Health Partners',
				url: 'https://trilliumhealthpartners.ca',
				description: 'One of the largest community-based hospital networks in Canada, serving Mississauga and surrounding areas.'
			},
			{
				name: 'Operation Eyesight Universal',
				url: 'https://operationeyesight.com',
				description: 'Performing cataract operations in villages for poor and elderly farmers in India, restoring sight and dignity.'
			},
			{
				name: 'Canada Red Cross',
				url: 'https://redcross.ca',
				description: 'Supporting disaster relief and community health programs across Canada and internationally.'
			},
			{
				name: 'Creating Hopes',
				url: '#',
				description: 'Providing healthcare support and creating opportunities for underserved communities.'
			}
		]
	}
];

export const testimonials = [
	{
		quote:
			'Vijay Anand Foundation doesn’t parachute in with a plan — they ask what we need and fund it for the long haul.',
		name: 'Grace Mwangi',
		role: 'Partner, Kisumu Health Network'
	},
	{
		quote:
			'Their reporting is the most transparent we’ve worked with. We always know our gift is working.',
		name: 'Thomas Reed',
		role: 'Recurring donor since 2017'
	}
];
