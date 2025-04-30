import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectSlide from './ProjectSlide';
import projectsData from '../../assets/data/ProjectsData';



const Projects = () => {

    const handleKeyPress = (swiper) => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') {
                swiper.slidePrev();
            } else if (e.key === 'ArrowDown') {
                swiper.slideNext();
            }
        });
    };
    useEffect(() => {
        document.body.classList.add('no-scrollbar');
    
        return () => {
          document.body.classList.remove('no-scrollbar');
        };
    }, []);

    return (
        <section className='projects'>
            <Swiper
                direction={'vertical'}
                style={{ height: '100vh', width: '100vw' }}
                onSwiper={(swiper) => handleKeyPress(swiper)}
                keyboard={{ enabled: true }}
                mousewheel={true}
                modules={[Pagination, Mousewheel]}
                pagination={{
                    clickable: true,
                }}
                className="projects-swiper"
            >
                {projectsData?.map((project) => {
                    return (
                        <SwiperSlide>
                            <ProjectSlide data={project} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Projects;