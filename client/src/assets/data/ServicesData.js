// 
import Image1 from '../images/services-images/1.webp';
import Image2 from '../images/services-images/2.webp';
import Image3 from '../images/services-images/3.webp';
import GmbService from '../images/services-images/gmb-service.webp';
import DigitalMarketingService from '../images/services-images/digital-marketing-service.webp';
// Banner Images
import DedicatedResourceBanner from '../images/services-images/detail-page-images/banners/dedicated-resource-banner.webp';
import EcommerceBanner from '../images/services-images/detail-page-images/banners/ecommerce-banner.webp';
import SoftwareDevelopmentBanner from '../images/services-images/detail-page-images/banners/software-development-banner.webp';
import DigitalMarketingBanner from '../images/services-images/detail-page-images/banners/digital-marketing-banner.webp';
// Section Images
import GmbSection1Img from '../images/services-images/detail-page-images/gmb-section1-image.webp';
import GmbSection2Img from '../images/services-images/detail-page-images/gmb-section2-image.webp';
import GmbSection3Img from '../images/services-images/detail-page-images/gmb-section3-image.webp';
import DedicatedResourceSection1Img from '../images/services-images/detail-page-images/dedicatedResources-section1-image.webp';
import DedicatedResourceSectiond2Img from '../images/services-images/detail-page-images/dedicatedResources-section2-image.webp';
import DedicatedResourceSectiond3Img from '../images/services-images/detail-page-images/dedicatedResources-section3-image.webp';
import EcommerceSection1Img from '../images/services-images/detail-page-images/ecommerce-section1-image.webp';
import EcommerceSection2Img from '../images/services-images/detail-page-images/ecommerce-section2-image.jpg';
import SoftwareDeveloperImage1 from '../images/services-images/detail-page-images/softwareDeveloper-section-image1.webp';
import DigitalMarketingSection1Image from '../images/services-images/detail-page-images/digital-marketing-section1-image.webp';




const services = [
    {
        url: 'gmb',
        bgImg: GmbService,
        title: "GMB Services",
        description: "Stop wasting your time trying to do it yourself and dealing with the headache of becoming a Google Business Profile (GBP) expert. Work directly with a dedicated profile manager who do everything from optimizing your GBP for the right keywords to publishing weekly posts – and everything in between.",
        bannerImg: DedicatedResourceBanner,
        sectionsData: [
            {
                sectionImg: GmbSection1Img,
                heading: "Want sales? Hate Google? Get GMB",
                description1: "Let GMB drive more calls and clicks to your business from Google! Stop wasting your time trying to do it yourself and dealing with the headache of becoming a Google Business Profile (GBP) expert.",
                description2: "Work directly with a dedicated profile manager who do everything from optimizing your GBP for the right keywords to publishing weekly posts – and everything in between.",
                description3: "Learn more about our GBP management service below or call 1-800-410-3119 to speak with the team about how GMB can help!",
            },
            {
                sectionImg: GmbSection2Img,
                heading: "Google My Business Setup Service Overview",
                description1: "If you’re fed up with Google and frustrated by to figure out what’s wrong with your business profile, we don’t blame you. Luckily, you’ve come to the right big blue on the Internet.",
                description2: "GMB offers Google Business Profile support when you have a problem that you can’t figure out or get an answer from Google.",
                description3: "We work with Google representatives every day to solve suspension, duplicate, and access issues that frequently occur.",
            },
            {
                sectionImg: GmbSection3Img,
                heading: "Help your clients dominate the local pack and Google Maps with GMB",
                description1: "A turnkey service for agencies and consultants Custom branded online portal for you and your clients Bill customers using your own Stripe or PayPal account Dedicated account manager acts as part of your team or directly with client",
                description2: "Automated weekly and monthly performance reports use your branding Earn over $2,400 per year per location!",
                description3: "he GMB partner program is designed to allow agencies, consultants, freelancers, and industry organizations the ability to white label our Google My Business management services.",
            },
        ],
    },
    {
        url: 'dedicated-resources',
        bgImg: Image1,
        title: "Dedicated Resources",
        description: "EcSharks is a leading company that specializes in assisting businesses with their technical requirements. Our range of services includes helping clients build websites, developing software, managing content, and setting up various technical elements.",
        bannerImg: DedicatedResourceBanner,
        sectionsData: [
            {
                sectionImg: DedicatedResourceSection1Img,
                heading: "How Dedicated Resources Improve Project Efficiency",
                description1: "Dedicated resources greatly improve the productivity of projects by concentrating just on your work, cutting down on idle time, and guaranteeing ongoing development.",
                description2: "Higher-quality outputs and quicker delivery times are the results of this focused attention that will be delivered by dedicated resources.",
            },
            {
                sectionImg: DedicatedResourceSectiond2Img,
                heading: "Benefits of Dedicated Resources",
                description1: "Instant commencement of project, Cost-effectiveness in recruitment, Flexibility to upscale swiftly as per project requirements. Team of experts in software development and IT consulting. IT professionals are trained on the latest technological advancements",
                description2: "Adaptable and scalable solutions to meet your needs, Embracing Agile methodologies for efficient development processes, Established trust by satisfied clients",
            },
            {
                sectionImg: DedicatedResourceSectiond3Img,
                heading: "WHY COMPANIES SUCCEED WITH US",
                description1: "Let’s explore why clients are putting their trust in EcSharks's professionals and choosing our dedicated remote developers over others",
                description2: "At EcSharks, you experience scalable solutions that meet your business demands. Our dedicated resources and developers are easily scalable to meet growing demands as your organization expands, giving you the freedom to develop without requiring major overhauls or migrations.",
            },
        ]
    },
    {
        url: 'ecommerce-&-marketplace',
        bgImg: Image2,
        title: "Ecommerce & Marketplace",
        description: "Ecommerce is our bone marrow, We believe that we are quite good in delivering full fledge Cloud based market places and outstanding B2B / B2c platforms. Involving customized CRM, integrated with payment gateways, shipping companies and adaptive to Social media and affiliate marketing techniques",
        bannerImg: EcommerceBanner,
        sectionsData: [
            {
                sectionImg: EcommerceSection1Img,
                heading: "Fast growing Ecommerce Marketplaces worldwide",
                description1: "With more than $2 trillion annual retail sales worldwide, eCommerce marketplaces are among the world's fastest-growing retail areas. This is your chance to establish an eCommerce business and increase sales. From focusing on inventory management, keeping track of your finances and building your brand, we do the job for you.",
            },
            {
                sectionImg: EcommerceSection2Img,
                heading: "WHY US ?",
                description1: "At EcSharks, we have a lot of experience, and we always use the best methods and industry standards. Our experts work hard to meet all the requirements for online stores and make sure they fit your needs.",
                description2: "We always look for the best and most efficient solutions that match your business goals. As a result, our customers get a fantastic online store that is safe, can grow with your business, and is easy for people to find on search engines. So, let our professionals help you with creating your online store.",
            }
        ]
    },
    {
        url: 'custom-software-development',
        bgImg: Image3,
        title: "Custom Software Development",
        description: "We specialize in developing personalized software applications and integrations according to your specific requirements.",
        bannerImg: SoftwareDevelopmentBanner,
        sectionsData: [
            {
                sectionImg: SoftwareDeveloperImage1,
                heading: "WHAT WAYS DO WE CONTRIBUTE TO CUSTOM SOFTWARE DEVELOPMENT?",
                description1: "We are a software development company that makes special software to fit the needs of each customer. We create software for websites and phones. Our services include everything needed to make the software, from coming up with the idea to giving you the finished product and taking care of it afterward. Our software creators build special software solutions and carefully follow the steps needed for your business. This makes a product that really helps your business.",
            }
        ],

    },
    {
        url: 'digital-marketing',
        bgImg: DigitalMarketingService,
        title: "DIGITAL MARKETING",
        description: "Digital marketing is the art and science of promoting your products or services through online channels. It's the key to reaching a wider audience, increasing brand visibility, and driving conversions.",
        bannerImg: DigitalMarketingBanner,
        sectionsData: [
            {
                sectionImg: DigitalMarketingSection1Image,
                heading: "SOLVE DIGITAL MARKETING CHALLENGES WITH OUR SOLUTIONS",
                description1: "Overcome digital marketing hurdles effortlessly with our tailored solutions, empowering your brand's online success through strategic innovation and expertise.",
                description2: "Utilize Facebook, LinkedIn, Twitter, Instagram, and TikTok to enhance brand visibility, reach the For You Page and beyond.",
            },
            {
                sectionImg: EcommerceSection1Img,
                heading: "CULTIVATE - POTENTIAL CUSTOMERS AND ESTABLISH GENUINE RELATIONSHIPS",
                description1: "Create genuine connections with your audience using social media, Share information, entertain, and interact with customers throughout their buying journey.",
                description2: "Partner with a sales team that's motivated to sell, and they only earn when you do, Save money on advertising by showing ads that people actually want to see.",
            }
        ],
    },
];

export default services;