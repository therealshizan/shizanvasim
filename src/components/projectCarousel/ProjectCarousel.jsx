// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Project Data
import { ProjectsData } from "data/ProjectsData";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './projectCarousel.css'

// import required modules
// import { Navigation } from "swiper";
import Title from "components/Title";

export default function ProjectCarousel() {
    var laptop = window.matchMedia("(max-width: 992px)")
    let slidesPerViewCount = laptop.matches ? 2 : 4
  SwiperCore.use([Autoplay]);
  return (
    <div className="content" id="projectCarousel">
        <Title>Projects</Title>
      <Swiper watchSlidesProgress={true} autoplay={{ delay: 5000 }} slidesPerView={slidesPerViewCount} className="mySwiper projectSwiper">

        {/* All Projects Starts */}
        {ProjectsData.map((projectData, index)=> 
        <SwiperSlide key={index} style={{background: `linear-gradient(45deg, #00000095, #00000095), url(${projectData.projectThumbnail})`}} className="projectSlide">
            <div className="projectMeta" data-index={index}>
            <span className="projectType">{projectData.ProjectType}</span>
            <Title titleSize="mediumTitle">{projectData.projectTitle}</Title>
            </div>
        </SwiperSlide>
        )}



        {/* <SwiperSlide style={{background: `url(${slideImg})`}} className="projectSlide">
            <span className="projectType">Project Type</span>
            <Title titleSize="mediumTitle">Project Title</Title>
        </SwiperSlide> */}
        {/* All Projects End */}

      </Swiper>
    </div>
  );
}
