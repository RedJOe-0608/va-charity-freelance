// Central content for the site. Swap these values for real copy/assets later.

export const site = {
	name: 'Vijay Anand Foundation',
	tagline: 'Empowering communities through education & healthcare',
	mission:
		'We partner with local communities to break the cycle of poverty — funding schools, clinics, and the people who make lasting change possible.',
	email: 'hello@vijayanandfoundation.org',
	phone: '+1 (415) 555-0142',
	address: '128 Community Way, Suite 200, San Francisco, CA 94103',
	registration: 'Registered charity · No. 84-7290153',
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
	{ value: '52K+', label: 'Lives impacted' },
	{ value: '$14.6M', label: 'Funds deployed' },
	{ value: '38', label: 'Partner organizations' },
	{ value: '17', label: 'Countries reached' }
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
			'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=80',
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

export const team = [
	{
		name: 'Dr. Amara Okafor',
		role: 'Founder & Executive Director',
		image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
	},
	{
		name: 'Daniel Mercer',
		role: 'Director of Programs',
		image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
	},
	{
		name: 'Priya Nair',
		role: 'Head of Partnerships',
		image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
	},
	{
		name: 'Marcus Lee',
		role: 'Director of Finance',
		image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
	}
];

export const milestones = [
	{ year: '2011', title: 'Founded', body: 'Started with a single classroom and a clear belief in local leadership.' },
	{ year: '2015', title: 'First clinic', body: 'Opened our first community health center, serving 4,000 people in year one.' },
	{ year: '2019', title: 'Crossed borders', body: 'Expanded to 9 countries through a network of vetted local partners.' },
	{ year: '2024', title: '50,000 lives', body: 'Reached a milestone of 50,000+ people supported across our programs.' }
];

export const stories = [
	{
		slug: 'leila',
		name: 'Leila’s classroom',
		location: 'Marrakech, Morocco',
		category: 'Education',
		excerpt:
			'A scholarship turned into a teaching degree — now Leila runs the very school that gave her a start.',
		image:
			'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80'
	},
	{
		slug: 'riverside-clinic',
		name: 'The riverside clinic',
		location: 'Kisumu, Kenya',
		category: 'Healthcare',
		excerpt:
			'A mobile unit became a permanent clinic, cutting the nearest hospital trip from 40km to 4.',
		image:
			'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80'
	},
	{
		slug: 'clean-water-village',
		name: 'Water that stayed',
		location: 'Rajasthan, India',
		category: 'Clean Water',
		excerpt:
			'Three wells and a maintenance co-op mean this village hasn’t walked for water in five years.',
		image:
			'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1200&q=80'
	},
	{
		slug: 'market-women',
		name: 'The market collective',
		location: 'Accra, Ghana',
		category: 'Livelihoods',
		excerpt:
			'Twelve micro-grants seeded a cooperative that now employs forty women year-round.',
		image:
			'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80'
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

// `url` is the partner's homepage and `logo` is a monochrome image in /static/partners —
// swap in real links and logo files as partners are confirmed.
export const partners = [
	{ name: 'Brightline', kind: 'Foundation', url: '#', logo: '/partners/brightline.svg' },
	{ name: 'Meridian Health', kind: 'Healthcare', url: '#', logo: '/partners/meridian-health.svg' },
	{ name: 'OpenLearn', kind: 'Education', url: '#', logo: '/partners/openlearn.svg' },
	{ name: 'AquaPure', kind: 'Infrastructure', url: '#', logo: '/partners/aquapure.svg' },
	{ name: 'Northwind Trust', kind: 'Foundation', url: '#', logo: '/partners/northwind-trust.svg' },
	{ name: 'Verdant Co.', kind: 'Corporate', url: '#', logo: '/partners/verdant-co.svg' },
	{ name: 'CareFirst', kind: 'Healthcare', url: '#', logo: '/partners/carefirst.svg' },
	{ name: 'Summit Group', kind: 'Corporate', url: '#', logo: '/partners/summit-group.svg' }
];

// Partners grouped by focus area (alternating left/right blocks of partner cards).
export const partnerCategories = [
	{
		key: 'education',
		title: 'Education',
		icon: 'graduation-cap',
		subtitle: 'Opening doors to learning, one classroom at a time.',
		image:
			'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1100&q=80',
		organizations: [
			{
				name: 'OpenLearn',
				grant: '$1.8M',
				url: 'https://openlearn.org',
				description: 'Free digital classrooms and teacher training reaching students across six regions.'
			},
			{
				name: 'BrightFutures Academy',
				grant: '$1.2M',
				url: 'https://brightfutures.org',
				description: 'Scholarships and mentoring that help first-generation students reach university.'
			},
			{
				name: 'ScholarBridge',
				grant: '$940K',
				url: 'https://scholarbridge.org',
				description: 'Builds schools and supplies learning materials in underserved districts.'
			},
			{
				name: 'EveryChild Reads',
				grant: '$620K',
				url: 'https://everychildreads.org',
				description: 'Early-literacy programs bringing books and reading coaches to rural communities.'
			},
			{
				name: 'Learning Tree Initiative',
				grant: '$510K',
				url: 'https://learningtree.org',
				description: 'After-school STEM labs that spark curiosity and confidence in young learners.'
			},
			{
				name: 'Future Scholars Fund',
				grant: '$430K',
				url: 'https://futurescholars.org',
				description: 'Need-based grants covering tuition, uniforms, and exam fees for bright students.'
			},
			{
				name: 'ClassroomConnect',
				grant: '$280K',
				url: 'https://classroomconnect.org',
				description: 'Connects remote schools with internet access, devices, and online resources.'
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
				name: 'Little Steps Foundation',
				grant: '$1.1M',
				url: 'https://littlesteps.org',
				description: 'Daycare and early-development centres so working families have safe care for their children.'
			},
			{
				name: 'SafeHaven Homes',
				grant: '$860K',
				url: 'https://safehaven.org',
				description: 'Shelter, care, and counselling for orphaned and at-risk children.'
			},
			{
				name: 'Nourish Kids',
				grant: '$540K',
				url: 'https://nourishkids.org',
				description: 'Daily school meals that fight childhood hunger and keep kids in class.'
			},
			{
				name: 'FamilyFirst Network',
				grant: '$410K',
				url: 'https://familyfirst.org',
				description: 'Support services that keep vulnerable families together and stable.'
			},
			{
				name: 'Cradle Care Trust',
				grant: '$320K',
				url: 'https://cradlecare.org',
				description: 'Neonatal care and parenting support for new and expecting mothers.'
			},
			{
				name: 'Playgrounds for All',
				grant: '$190K',
				url: 'https://playgroundsforall.org',
				description: 'Safe, inclusive play spaces built in low-income neighbourhoods.'
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
				name: 'Meridian Health',
				grant: '$2.3M',
				url: 'https://meridianhealth.org',
				description: 'Mobile medical units delivering primary care to remote, hard-to-reach villages.'
			},
			{
				name: 'CareFirst',
				grant: '$1.5M',
				url: 'https://carefirst.org',
				description: 'Maternal and child health programs that reduce preventable deaths.'
			},
			{
				name: 'VitalCare Clinics',
				grant: '$980K',
				url: 'https://vitalcare.org',
				description: 'Permanent community health centres staffed and stocked year-round.'
			},
			{
				name: 'PulseAid',
				grant: '$700K',
				url: 'https://pulseaid.org',
				description: 'Rapid vaccination drives and emergency response when disaster strikes.'
			},
			{
				name: 'Mobile Medics',
				grant: '$650K',
				url: 'https://mobilemedics.org',
				description: 'Doctors-on-wheels reaching communities far from the nearest hospital.'
			},
			{
				name: 'Maternal Hope',
				grant: '$480K',
				url: 'https://maternalhope.org',
				description: 'Safe-birth programs and prenatal care for expectant mothers.'
			},
			{
				name: 'ClearSight Vision',
				grant: '$300K',
				url: 'https://clearsight.org',
				description: 'Free eye screenings and cataract surgeries that restore sight.'
			},
			{
				name: 'WellSpring Clinics',
				grant: '$240K',
				url: 'https://wellspring.org',
				description: 'Affordable everyday care for chronic and routine health conditions.'
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
