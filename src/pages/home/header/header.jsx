import React, { useState } from 'react'
import cls from "./header.module.scss"
import { Link } from 'react-router-dom'
import img from "./img/timelapse_24px.png"
import sort from "./img/Sort.png"
import { options } from "../components/options"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
function Header() {
    const [select, setSelect] = React.useState(false)
    const [bar, setBar] = React.useState(false)
    const handleSelect = () => {
        setSelect(!select)
    }

    const handleBar = () => {
        setBar(!bar)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={cls.header}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Login
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input type="text" placeholder='Name' /><br />
                        <input type="password" placeholder='Password' /><br />
                        <Button variant="contained" onClick={()=>handleClose()}>Continue</Button>
                    </Typography>
                </Box>
            </Modal>
            <a className="navbar-brand" href="#" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"><img className={cls.icon} src="https://s3-alpha-sig.figma.com/img/f2b4/3f96/5734f333519d98363f9a44bc2b16e8b7?Expires=1672617600&Signature=aeRh9Afs-Cr5plAWT1W8SsOmEN1jD0IJ0cndL3daHqbiYyuGh3uplLKXN0xjc5TEGpdQgBbr-JAUbLLVuXHdEptu5jM3KTYQ1iTg1~TNP~BaHWsUguYDOjTES7G9rwGBjOPDs35dxtFj5-6g8EpvNIbcFi8bAMpLz6V9YSrhcmGzJCF~5Luxn-TsYSfXPBiDKz-0YuDo7CeEZ3kgxHgJlDrWeJOlvtiZIls1CUJaUC7Fg9F0SJTLUKMhshSwDeLRRwDw6GseILrNQuB3rhHmUjhs4SWZDL2ZXFWmVB9T4R-t0ZB4Bon5Q5Y3UPiuEj6VOG95i3uOZoD3lPDA8HNCuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></a>

            <ul className="navbar-nav">
                <div className={cls.bar} onClick={() => handleBar()}><img src={sort} alt="" /> </div>
                {
                    bar ? <div className={cls.setebar} data-aos="fade-down">
                    {/* <ul> */}
                        <li>Curated Path 
                            
                            <img src="	https://img.icons8.com/ios-glyphs/512/chevron-right.png" alt=">" />

                   </li>
                        <li>Online Courses
                            <img src="	https://img.icons8.com/ios-glyphs/512/chevron-right.png" alt=">" />

                   </li>
                        <li onClick={()=>handleOpen()}>Login
                            
                   </li>
                    {/* </ul> */}
                    </div> : " "
                }
                <div className={cls.container}>

                    <li onClick={() => handleSelect()} data-aos="fade-down" >
                        Curated Path
                        <img src="https://img.icons8.com/material-rounded/512/chevron-down.png" alt="" />
                        {
                            select ?

                                <div className={cls.options} data-aos="fade-down">
                                    {
                                        options.map((item) => (
                                            <div className={cls.option} key={item.id}>
                                                <img src="	https://img.icons8.com/ios-glyphs/512/chevron-right.png" alt=">" />
                                                <h3>{item.name}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                : ""
                        }
                    </li>
                    <li data-aos="fade-down">
                        Online Courses
                    </li>
                    <div className={cls.buttons}>
                            <button className={cls.login} data-aos="fade-down" onClick={()=>handleOpen()}>Login</button>
                        <button className={cls.sign} data-aos="fade-down" onClick={() => handleOpen()}><span><img src={img} alt="404" /></span> Sing Up</button>
                    </div>
                </div>
            </ul>

        </div>
    )
}

export default Header