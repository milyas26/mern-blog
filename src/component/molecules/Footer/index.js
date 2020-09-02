import React from 'react'
import { BlogIcon, ICFacebook, ICInstagram, ICTelegram, ICYoutube, ICGithub, ICTwitter } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper" >
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div>
                    <img className="logo" src={BlogIcon} alt="Logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICYoutube} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
