import React from 'react'
import cls from "./courses.module.scss"
import { options } from "../components/options"
function Courses() {
    return (
        <div className={cls.card_body}>
            {
                options.map((item) => (
                    <div data-aos="zoom-in" className={cls.card} key={item.id} style={{ background: `linear-gradient(180deg ,  ${item.color} , rgb(70, 69, 69,1)` }}>
                        <a href={item.link}>
                            <div className={cls.text}>

                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                            </div>
                            <img src={item.img} alt="404" />
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default Courses