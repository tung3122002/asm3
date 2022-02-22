import Swiper from "swiper";
import "swiper/css";

const baner = {
    render() {
        return ` <section class="slider" id="slider">
        <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">  <img src="./src/Saved Pictures/banner1.jpg" alt=""></div>
          <div class="swiper-slide">  <img src="./src/Saved Pictures/banner2.jpg" alt=""></div>
          <div class="swiper-slide">  <img src="./src/Saved Pictures/banner3.jpg" alt=""></div>
          ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>

      </section>`;
    },
    afterRender() {
        const swiper = new Swiper(".swiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    },

};
export default baner;
