import React from 'react'
import cls from './footer.module.scss'

import twit from './img/1.png'
import facebook from './img/2.png'
import git from './img/3.png'
import inst from './img/4.png'

function Footer() {
    return (
        <div className={cls.footer_body}>
            <div className={cls.get_text}><img src="https://s3-alpha-sig.figma.com/img/f2b4/3f96/5734f333519d98363f9a44bc2b16e8b7?Expires=1672617600&Signature=aeRh9Afs-Cr5plAWT1W8SsOmEN1jD0IJ0cndL3daHqbiYyuGpuplLKXN0xjc5TEGpdQgBbr-JAUbLLVuXHdEptu5jM3KTYQ1iTg1~TNP~BaHWsUguYDOjTES7G9rwGBjOPDs35dxtFj5-6g8EpvNIbcFi8bAMpLz6V9YSrhcmGzJCF~5Luxn-TsYSfXPBiDKz-0YuDo7CeEZ3kgxHgJlDrWeJOlvtiZIls1CUJaUC7Fg9F0SJTLUKMhshSwDeLRRwDw6GseILrNQuB3rhHmUjhs4SWZDL2ZXFWmVB9T4R-t0ZB4Bon5Q5Y3UPiuEj6VOG95i3uOZoD3lPDA8HNCuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <a className="navbar-brand" href="#" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"><img className={cls.icon} src="https://s3-alpha-sig.figma.com/img/f2b4/3f96/5734f333519d98363f9a44bc2b16e8b7?Expires=1672617600&Signature=aeRh9Afs-Cr5plAWT1W8SsOmEN1jD0IJ0cndL3daHqbiYyuGh3uplLKXN0xjc5TEGpdQgBbr-JAUbLLVuXHdEptu5jM3KTYQ1iTg1~TNP~BaHWsUguYDOjTES7G9rwGBjOPDs35dxtFj5-6g8EpvNIbcFi8bAMpLz6V9YSrhcmGzJCF~5Luxn-TsYSfXPBiDKz-0YuDo7CeEZ3kgxHgJlDrWeJOlvtiZIls1CUJaUC7Fg9F0SJTLUKMhshSwDeLRRwDw6GseILrNQuB3rhHmUjhs4SWZDL2ZXFWmVB9T4R-t0ZB4Bon5Q5Y3UPiuEj6VOG95i3uOZoD3lPDA8HNCuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></a>
                <p>Curated Paths</p> <p>Online Training</p>
                
                <div className={cls.messages}>
                    <img src={twit} alt="" />
                    <img src={facebook} alt="" />
                    <img src={inst} alt="" />
                    <img src={git} alt="" />

                </div>
            </div>
            <div className={cls.inform}>
                <p>© Copyright 2022, All Rights Reserved</p>
                <p className={cls.end}>Privacy Policy         Terms & Conditions</p>

            </div>
        </div>
    )
}

export default Footer