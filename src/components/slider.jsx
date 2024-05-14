import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from "./img/slider1.jpg"
import slider2 from "./img/slider2.jpg"
import slider3 from "./img/slider3.jpg"
import { Height } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';

function Slider() {
    return (
        <Swiper
            style={{ height: "100vh", position: "relative", zIndex: 1 }}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={"10"}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // Autoplay
            // autoplay={{ delay: 3000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='d-flex align-items-center justify-content-center slider slider1'>
                <Grid container spacing={2} className='d-flex align-items-center justify-content-center'>
                    <Grid item xs={10} md={8} lg={5} className="d-flex align-items-center justify-content-center" >
                        <Box
                            style={{ background: "rgba(0,0,0, 0.6)" }}
                            className="d-flex align-items-center justify-content-center slider-text"
                            height={200} width={"100%"} my={4} display="flex"
                            color={"white"} fontSize={"30px"} fontWeight={"bold"}
                            alignItems="center"
                            gap={4} p={2} sx={{ border: '4px solid white' }}
                        >
                            Rent The Best Cars With Us!
                        </Box>
                    </Grid>
                </Grid>
            </SwiperSlide>
            <SwiperSlide className='d-flex align-items-center justify-content-center slider slider2'>
                <Grid container spacing={2} className='d-flex align-items-center justify-content-center'>
                    <Grid item xs={10} md={8} lg={5} className="d-flex align-items-center justify-content-center" >
                        <Box
                            style={{ background: "rgba(0,0,0, 0.6)" }}
                            className="d-flex align-items-center justify-content-center slider-text"
                            height={200} width={"100%"} my={4} display="flex"
                            color={"white"} fontSize={"30px"} fontWeight={"bold"}
                            alignItems="center"
                            gap={4} p={2} sx={{ border: '4px solid white' }}
                        >
                            Rent The Best Cars With Us!
                        </Box>
                    </Grid>
                </Grid>
            </SwiperSlide>
            <SwiperSlide className='d-flex align-items-center justify-content-center slider slider3'>
                <Grid container spacing={2} className='d-flex align-items-center justify-content-center'>
                    <Grid item xs={10} md={8} lg={5} className="d-flex align-items-center justify-content-center" >
                        <Box
                            style={{ background: "rgba(0,0,0, 0.6)" }}
                            className="d-flex align-items-center justify-content-center slider-text"
                            height={200} width={"100%"} my={4} display="flex"
                            color={"white"} fontSize={"30px"} fontWeight={"bold"}
                            alignItems="center"
                            gap={4} p={2} sx={{ border: '4px solid white' }}
                        >
                            Rent The Best Cars With Us!
                        </Box>
                    </Grid>
                </Grid>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;
