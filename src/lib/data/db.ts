type Profile = {
	item: string;
	url: string;
	icon: string;
}

type Profiles = Profile[];

type Review = {
	name: string;
	company: string;
	body: string;
	url: string;
};

type Reviews = Review[];

type Skill = {
	title: string;
	tools: object[];
}

type Skills = Skill[];

type Project = {
	name: string;
	mediaUrl: string;
	date: string;
	mediaType: string;
	description: string;
	tools: string[];
	url: string;
	source: string;
}

type Projects = Project[];

type Article = {
	title: string;
	url: string;
	date: string;
	description: string;
}

type Articles = Article[];

type Experience = {
	icon: string;
	position: string;
	company: string;
	date: string;
	description: string;
	keyPoints: string[];
}

type Experiences = Experience[];

type Education = {
	icon: string;
	qualification: string;
	institution: string;
	date: string;
}

type Educations = Education[];

export const profile: Profiles = [
	{
		item: "hello@emeka.pro",
		url: "mailto:hello@emeka.pro",
		icon: "hugeicons:mail-02"
	},
	{
		item: "linkedin.com/in/chukwuemeka-anyakora",
		url: "https://linkedin.com/in/chukwuemeka-anyakora",
		icon: "hugeicons:linkedin-02"
	},
	{
		item: "github.com/supermx1",
		url: "https://github.com/supermx1",
		icon: "hugeicons:github-01"
	},
	{
		item: "Northampton, UK",
		url: "https://maps.app.goo.gl/c8ombk4xfGeFpw1B9",
		icon: "hugeicons:location-01"
	}
]

export const reviews: Reviews = [
		{
			"name": "Martin U.",
			"company": "National Population Comm.",
			"body": "Emeka's web development skills are exceptional. Highly recommended!",
			"url": ""
		},
		{
			"name": "Soumya K.",
			"company": "Sar Infocom",
			"body": "Delivered outstanding graphic design work. Truly impressed.",
			"url": ""
		},
		{
			"name": "Keenea A.",
			"company": "Keechen Foods",
			"body": "Superb Cloud engineering service. Very reliable!",
			"url": ""
		},
		{
			"name": "Ekene A.",
			"company": "KoolToolz Gadgets",
			"body": "IT consulting transformed our operations. Great job, Emeka!",
			"url": ""
		},
		{
			"name": "Keenea A",
			"company": "Keechen Foods",
			"body": "Exceptional UI design. User-friendly and beautiful.",
			"url": ""
		},
		{
			"name": "Edmond A",
			"company": "Swivel Codes Limited",
			"body": "Expertise in Cloud engineering is top-notch. Highly satisfied.",
			"url": ""
		},
		{
			"name": "Jeff E.",
			"company": "Kuvuki Gadget Hub",
			"body": "Fantastic web development service. Emeka exceeded our expectations!",
			"url": ""
		},
		{
			"name": "Clementina A.",
			"company": "NAFDAC",
			"body": "Creative and professional application developer. Highly recommend Emeka. ❤️",
			"url": ""
		},
		{
			"name": "Zivah A.",
			"company": "DADDY CARE",
			"body": "Daddy is so cool. I like his computer.",
			"url": ""
		},
		{
			"name": "Vincent A.",
			"company": "Ogidi DME",
			"body": "Amazing IT services rendered. Emeka is truly talented.",
			"url": ""
		},
		{
			"name": "Nancy Green",
			"company": "Cloud Solutions",
			"body": "Emeka's Cloud engineering solutions are simply the best.",
			"url": ""
		},
		{
			"name": "Tom Harris",
			"company": "Innovative Designs",
			"body": "Web development service is second to none. Brilliant work!",
			"url": ""
		}
	];

export const projects: Projects = [
	{
		name: 'Ogidi Digital Mapping Excercise',
		mediaUrl: 'https://emeka.pages.dev/videos/project7.mp4',
		date: 'Jan 2024 - Jun 2024',
		mediaType: 'video',
		description: 'A digial map using Census data of a village.',
		tools: ['Google Maps', 'CMS', 'MySQL', 'NodeJS', 'Hetzner Cloud', 'Vercel', 'Python', 'CSPro'],
		url: 'https://ogidi-analysis.vercel.app',
		source: ''
	},
	{
		name: 'VitalReg Pro',
		mediaUrl: 'videos/project6.mp4',
		date: 'Feb 2020 - Apr 2024',
		mediaType: 'video',
		description: 'A application for birth and death registration.',
		tools: ['Framework7', 'Svelte', 'Restful API', 'MySQL', 'PWA'],
		url: '',
		source: ''
	},
	{
		name: 'NAFDAC FCT Database',
		mediaUrl: 'videos/project1.mp4',
		date: 'Aug 2019 - Aug 2023',
		mediaType: 'video',
		description: 'A project that does something.',
		tools: ['Bootstrap', 'Laravel', 'Sketch', 'CMS', 'LeafletJS'],
		url: 'https://supermx1.github.io/nafdac-portal/',
		source: 'https://github.com/supermx1/nafdac-portal'
	},
	{
		name: 'Cryptocurrency Web3 Platform',
		mediaUrl: 'videos/project2.mp4',
		date: 'Apr 2022',
		mediaType: 'video',
		description: 'A project that does something.',
		tools: ['Tailwind', 'React', 'DApp', 'Github', 'Blockchain'],
		url: 'https://supermx1.github.io/crypto-web3/',
		source: 'https://github.com/supermx1/crypto-web3'
	},
	{
		name: 'Kuvuki',
		mediaUrl: 'videos/project4.mp4',
		date: 'May 2022',
		mediaType: 'video',
		description: 'An eCommerce platform.',
		tools: ['Wordpress', 'Elementor', 'SvelteKit', 'Cloudflare', 'PayStack'],
		url: 'https://kuvuki.ng/',
		source: ''
	},
	{
		name: 'Senda',
		mediaUrl: 'videos/project5.mp4',
		date: 'Mar 2023',
		mediaType: 'video',
		description: 'A mobile app for sending money via USSD codes.',
		tools: ['Framework7', 'Svelte', 'Firebase', 'API', 'PWA'],
		url: 'https://senda.pages.dev/',
		source: ''
	},
	{
		name: 'GladePay',
		mediaUrl: 'images/1.webp',
		date: 'Aug 2018',
		mediaType: 'image',
		description: 'Logo and brand design for GladePay. A payment gateway.',
		tools: ['Illustrator', 'Photoshop'],
		url: 'https://www.instagram.com/p/CmSOWMLL9H2/?img_index=1',
		source: ''
	},
	{
		name: '4th Republic Movie',
		mediaUrl: 'images/2.webp',
		date: 'Mar 2019',
		mediaType: 'image',
		description: '4th Republic Movie Poster Design.',
		tools: ['Illustrator', 'Photoshop'],
		url: 'https://www.instagram.com/p/B5-BnR_HjOC/',
		source: ''
	}
];

export const skills: Skills = [
	{
		title: 'Development',
		tools: [
			{
				name: 'Svelte',
				icon: 'ri:svelte-line'
			},
			{
				name: 'React',
				icon: 'hugeicons:react'
			},
			{
				name: 'Laravel',
				icon: 'simple-icons:laravel'
			},
			{
				name: 'Tailwind CSS',
				icon: 'mdi:tailwind'
			},
			{
				name: 'Wordpress',
				icon: 'hugeicons:wordpress'
			},
			{
				name: 'Python',
				icon: 'ant-design:python-outlined'
			},
			{
				name: 'Stripe',
				icon: 'mingcute:stripe-line'
			},
			{
				name: 'MySQL',
				icon: 'tabler:brand-mysql'
			},
			{
				name: 'MongoDB',
				icon: 'tabler:brand-mongodb'
			}
		]
	},
	{
		title: 'Design Tools',
		tools: [
			{
				name: 'Figma',
				icon: 'hugeicons:figma'
			},
			{
				name: 'Photoshop',
				icon: 'hugeicons:adobe-photoshop'
			}
		]
	},
	{
		title: 'VC • Hosting',
		tools: [
			{
				name: 'GitHub',
				icon: 'hugeicons:github'
			},
			{
				name: 'AWS',
				icon: 'mdi:aws'
			},
			{
				name: 'Azure',
				icon: 'arcticons:microsoft-azure'
			},
			{
				name: 'Cloudflare',
				icon: 'simple-icons:cloudflare'
			},
			{
				name: 'Docker',
				icon: 'tabler:brand-docker'
			}
		]
	},
	{
		title: 'Soft Skills',
		tools: [
			{
				name: 'Problem Solving'
			},
			{
				name: 'Teamwork'
			},
			{
				name: 'Communication'
			},
			{
				name: 'Time Management'
			},
			{
				name: 'Leadership'
			}
		]
	}
];

export const articles: Articles = [
	{
		title: 'With Only 2 Out of Every 100 Deaths Recorded in Lagos State, Nigeria, Government Health Programs Are Flying Blind, but Advocates Are Working Toward Rapid Change',
		url: 'https://www.vitalstrategies.org/with-only-2-out-of-every-100-deaths-recorded-in-lagos-state-nigeria-government-health-programs-are-flying-blind-but-advocates-are-working-towards-rapid-change/',
		date: '2022',
		description: 'According to the World Health Organization’s 2021 SCORE Report, a global assessment of country health information systems developed in partnership with Bloomberg Philanthropies, only 6 in 10 of the world’s deaths are recorded. In the African region, only 1 in 10 deaths are currently recorded.'
	}
];

export const experiences: Experiences = [
	{
		icon: '/logos/1.webp',
		position: 'Senior Programmer Analyst',
		company: 'National Population Commission',
		date: '2018 - 2024',
		description: '',
		keyPoints: [
			'I Increased birth registration by 25% and death registration by 15% in Nigeria through the development of VitalReg Pro Web and Mobile Application.',
			'I designed and developed Staff Attendance Management application (cross-platform) using Framework7, Svelte, and Android Studio. Improved data accuracy by 60% and provided real-time insights into employee attendance patterns.',
			'I designed and developed the Death Notification System Piloted in Lagos, capturing over 10,000 records in the first 2 months.',
			'Spearheaded the development of the National Population Commission\'s official website using WordPress, Elementor, and a custom theme, resulting in a user-friendly platform that increased website traffic by 100%.',
			'I developed applications like the Census Data Management Portal for the First and Second Pretest of the Census to manage Census data in various file formats.',
			'I developed and maintained various internal applications for the commission (details omitted for brevity).',
			'I provided IT technical support, including software application installations and hardware upgrades.'
		]
	},
	{
		icon: '/logos/2.webp',
		position: 'Freelance Software Developer',
		company: 'TechGFX Technologies Limited',
		date: '2015 - 2024',
		description: '',
		keyPoints: [
			'I designed and implemented a Census/Digital Mapping solution with real-time analytics for a Nigerian village, increasing data collection efficiency by 90% and capturing over 29,000 residents and 5,000 buildings.',
			'I designed and implemented a comprehensive database management system for NAFDAC, centralizing company, product, and inspection data. This system improved data accessibility and analysis capabilities, enabling more efficient regulatory processes.',
			'Designed and developed my portfolio website (emeka.pro) using WordPress REST API and React, resulting in a 70% increase in client conversion and reach.',
			'Developed various cross-platform applications including QuikInvoice (invoicing solution), What\'s For Dinner (food recommendation app), Car8 (car rating and comparison app), and Senda (fintech app for money transfer and business management).',
			'Created the Nigerian Banks API, providing comprehensive details about Nigerian banks, demonstrating expertise in API development and data management (available on GitHub).',
			'I provided IT technical support services, including software installation, laptop repair, and over-the-phone consultation.'
		]
	},
];

export const education: Educations = [
	{
	icon: '/logos/3.webp',
	qualification: 'Master\'s degree in Information Technology',
	institution: 'National Open University',
	date: '2017 - 2018',
},
	{
		icon: '/logos/4.webp',
		qualification: 'Bachelor\'s degree in Computer Science',
		institution: 'University of Abuja',
		date: '2007 - 2012',
	},
];