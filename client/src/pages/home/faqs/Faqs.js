import React, { useState } from 'react';
import Accordion from '../../../components/Accordion';
import SectionHeading from '../../../components/SectionHeading';


const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    };

    return (
        <section className='generic-section faqs'>
            <div className='container'>
                <SectionHeading heading={"FAQs"} />
                <div data-aos='fade-up' className='accordions'>
                    <Accordion
                        isOpen={openIndex === 1}
                        onClick={() => handleToggle(1)}
                        title='What is custom software development?'
                        content={
                            'The custom software development procedure includes numerous stages from start to finish including research, design, development, testing, and maintenance. These custom software solutions provide more value compared to conventional off-the-shelf software.'
                        }
                    />
                    <Accordion
                        isOpen={openIndex === 2}
                        onClick={() => handleToggle(2)}
                        title='How long does it takes to develop custom software?'
                        content={
                            "The time to develop custom software depends on factors like technology and the final product's requirements. Typically, developing an MVP takes between 4 to 9 months."
                        }
                    />
                    <Accordion
                        isOpen={openIndex === 3}
                        onClick={() => handleToggle(3)}
                        title='How much does custom software development costs?'
                        content={
                            "The cost of custom software development varies from one project to another depending on complexity. Parameters like infrastructure requirements, functionalities, technical challenges, UI/UX, and team structure define the price. Contact our consultants for specific estimates."
                        }
                    />
                    <Accordion
                        isOpen={openIndex === 4}
                        onClick={() => handleToggle(4)}
                        title='Do you have expertise in creating industry-specific software?'
                        content={
                            "Yes, we are highly experienced in developing niche-specific software, particularly in esports tournament solutions and event management software."
                        }
                    />
                    <Accordion
                        isOpen={openIndex === 5}
                        onClick={() => handleToggle(5)}
                        title='Why select a custom software solution instead of off-the-shelf software?'
                        content={
                            "Custom software offers flexibility, scalability, reliability, productivity, integration, and cost-effectiveness. It provides a competitive edge and supports business growth."
                        }
                    />
                    <Accordion
                        isOpen={openIndex === 6}
                        onClick={() => handleToggle(6)}
                        title='Why hire us for custom software services?'
                        content={
                            "We offer tailor-made software that integrates with existing solutions to improve efficiency. We have experience working with clients ranging from startups to large enterprises and deliver unique, innovative solutions based on their specific needs."
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Faqs;