import FrontendService from '../images/icons/services-icons/frontend';
import BackendService from '../images/icons/services-icons/backend';
import DevOpsService from '../images/icons/services-icons/devops';
import QualityAssuranceService from '../images/icons/services-icons/qualityAssurance';
import ProjectManagerService from '../images/icons/services-icons/projectManager';
import FinberryLogo from '../images/projects-images/finberry.png';
import Sampoll from '../images/projects-images/sampoll-logo.png';


const projectsData = [
    {
        projectId: 1,
        services: [
            {
                icon: <FrontendService />,
                title: 'Frontend',
            },
            {
                icon: <QualityAssuranceService />,
                title: 'Quality Assurance',
            },
            {
                icon: <DevOpsService />,
                title: 'DevOps',
            },

        ],
        logo: FinberryLogo,
        description: 'Designed for simple managing of your finance, this product is a platform that helps the simple, financially incompetent user to keep records and control their investments.',
    },
    {
        projectId: 2,
        services: [
            {
                icon: <FrontendService />,
                title: 'Frontend',
            },
            {
                icon: <BackendService />,
                title: 'Backend',
            },
            {
                icon: <ProjectManagerService />,
                title: 'Project Manager',
            },
            {
                icon: <QualityAssuranceService />,
                title: 'Quality Assurance',
            },
            {
                icon: <DevOpsService />,
                title: 'DevOps',
            },

        ],
        logo: Sampoll,
        description: 'Sampoll is a digital platform that lets consumers try full-size consumer packaged goods (CPG) products for free. Through AI-driven sampling campaigns, Sampoll enables customers to discover new products, upload receipts after purchase, and get reimbursed quickly, often via PayPal or Venmo. The service, powered by its conversational AI assistant "Sam," streamlines the sampling experience while collecting valuable consumer insights for brands.',
    }
]

export default projectsData