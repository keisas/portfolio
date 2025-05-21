import ProjectCard from '../Projects/ProjectCard';
import { projects } from '../../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import InfoPopup from '../common/InfoPopup';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './Projects.css';

export default function Projects() {
    return (
      <div>
        <div className="projects-header">
          <h2 className="projects-title">制作物</h2>
          <InfoPopup/>
        </div>
        <Swiper
          spaceBetween={30}
        //   slidesPerView={3}
        breakpoints={{
            0: { slidesPerView: 1 },          // スマホなど小さい画面幅
            640: { slidesPerView: 2 },        // タブレット
            1024: { slidesPerView: 3 },       // PC以上
          }}
          loop={true}
          autoplay={{
            delay: 5000,
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