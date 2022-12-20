import React from 'react'
import Header from './header/header'
import cls from "./home.module.scss"
import AOS from "aos"
import Courses from './courses/courses'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Footer from './footer/footer'
import Slider from "react-slick";
function Home() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:"5px",
    boxShadow: 24,
    p: 4,
  };
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // aos

  AOS.init();
  return (
    <div className={cls.home_body}>
      <Header />
      {/* login */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}
         
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="text" placeholder='Name' /><br />
            <input type="password" placeholder='Password' /><br />
            <Button variant="contained" onClick={() => handleClose()}>Continue</Button>
          </Typography>
        </Box>
      </Modal>
      {/* end login  */}
      <div>
        <div className={cls.text}>

          <h1 data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">The Best Way To Learn Is <br /> By Doing
          </h1>
          <h4 >Become professionals and ready to join the world.</h4>
          <button className={cls.join} data-aos="fade-right" onClick={() => handleOpen()}>Join for Free</button>
        </div>
        <div className={cls.man}>

        {/* <div className={cls.shadow}></div> */}
        </div>
      </div>
      <Courses />
      <div className={cls.inform}>
        <h2>Join the Paybek Labs</h2>
        <p>Our hub for documentation and discurssions  on all things <br /> relating to Paybek product</p>
        <button className={cls.button} data-aos="zoom-in-up" onClick={()=>handleOpen()} >Join For Free!</button>
      </div>
      <div className={cls.text_info}>
        <div className={cls.into}>

          <Slider {...settings}>
            <div>
              <h3> "Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. "I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience without worrying about the technology. "
                .</h3>
              <h5>Janniy Ulson</h5>
              <p>Senior Marketing Menger</p>
            </div>
            <div>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt, itaque laborum earum recusandae error atque nostrum, neque facere quaerat quas. Libero expedita quisquam aliquid numquam tempora unde sit delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur odit repudiandae, veritatis ad nam quos quo rerum, error qui velit eligendi amet saepe in odio deserunt voluptas, ratione </h3>
              <h5>Alisa Rors</h5>
              <p>Flutter developer</p>
            </div>
            <div>
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure fugiat eius iusto cumque optio quos velit eum molestiae exercitationem! Incidunt non praesentium excepturi at officiis numquam. Deserunt, voluptas magnam?</h3>
              <h5>John Kendy</h5>
              <p>Backend  Developer</p>
            </div>

          </Slider>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home