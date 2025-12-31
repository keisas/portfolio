import ProjectCard from '../Projects/ProjectCard';
import { projects } from '../../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InfoPopup, LinkIconInfo, SkillColorInfo } from '../common/InfoPopup';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './Projects.css';

export default function Projects() {
    return (
      <div>
        <div className="projects-header">
          <h2 className="projects-title">研究・個人 制作物</h2>
          <InfoPopup>
            <h4>制作物セクション説明</h4>
            <LinkIconInfo />
            <SkillColorInfo />
          </InfoPopup>
        </div>
        <Swiper
          spaceBetween={30}
        breakpoints={{
            0: { slidesPerView: 1 }, 
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }