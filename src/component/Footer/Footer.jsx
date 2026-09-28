import React from "react";
import Image from "next/image";
import "./footer.css";
import footericon from "@/images/footer/footericon.svg";
import footerinsta from "@/images/footer/footerinsta.svg";
import footerfb from "@/images/footer/footerfb.svg";
import footertwiter from "@/images/footer/footertwiter.svg";
import footerpinterest from "@/images/footer/footerpinterest.svg";
import footertiktok from "@/images/footer/icons8-tik-tok-20.svg";

const Footer = (props) => {
  return (
    <div className="Footer_container">
      <div className="Footer_row1">
        <h6 className="Footer_row1_title" data-aos="fade-right">
          <a
            href={`https://www.instagram.com/${props?.setting?.instagramUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Flux Instagram
          </a>
        </h6>
        <Image
          src={footericon}
          alt="Icon"
          className="Footer_icon_img"
          data-aos="fade-down"
        />
        <div className="Footer_social_icons">
          <a
            href={`https://www.instagram.com/${props?.setting?.instagramUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={footerinsta}
              alt="Instagram"
              className="Footer_icon"
              data-aos="fade-down"
            />
          </a>
          <a
            href={`https://www.facebook.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={footerfb}
              alt="Facebook"
              className="Footer_icon"
              data-aos="fade-up"
            />
          </a>
          <a
            href={`https://www.tiktok.com/@${props?.setting?.tiktokUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={footertiktok}
              alt="Tik Tok"
              className="Footer_icon"
              data-aos="fade-down"
            />
          </a>
          <a
            href={`https://www.pinterest.com/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={footerpinterest}
              alt="Pinterest"
              className="Footer_icon"
              data-aos="fade-up"
            />
          </a>
        </div>
      </div>
      <div className="Footer_row2">
        <div className="Footer_row2_contact">
          <h6 className="Footer_row2_contact1" data-aos="fade-right">
            CONTACT
          </h6>
          <div>
            <p className="Footer_row2_address" data-aos="fade-right">
              {props?.setting?.address}
            </p>
            <div>
              <span className="Footer_row2_call" data-aos="fade-right">
                Appel
              </span>
              <span className="Footer_row2_number" data-aos="fade-left">
                {props?.setting?.phone}
              </span>
            </div>
            <p className="Footer_row2_mail" data-aos="fade-right">
              FAX: {props?.setting?.fax}
            </p>
            <p className="Footer_row2_mail" data-aos="fade-right">
              {props?.setting?.email}
            </p>
          </div>
        </div>
        <div className="Footer_row2_center">
          <div className="Footer_row2_center1" data-aos="fade-up">
            <p>Rejoignez notre liste de diffusion pour les mises à jour,</p>
            <p>Recevez des actualités et des offres d'événements.</p>
          </div>
          <div className="Footer_row2_center2" data-aos="fade-down">
            <input
              type="email"
              className="Footer_row2_center2_input"
              placeholder="Entrer"
            />
            <div className="Footer_row2_center2_button">S'abonner</div>
          </div>
        </div>
        <div className="Footer_row2_timings">
          <h6 className="Footer_row2_timings1" data-aos="fade-down">
            HEURES DE TRAVAIL
          </h6>
          <div>
            <div className="Footer_row2_timing" data-aos="fade-left">
              <span className="Footer_row2_call">Lundi</span>
              <span className="Footer_row2_number">
                : {props?.setting?.mondayWorkingHours}
              </span>
            </div>
            <div className="Footer_row2_timing" data-aos="fade-left">
              <span className="Footer_row2_call">Mardi </span>
              <span className="Footer_row2_number">
                : {props?.setting?.tuesdayWorkingHours}
              </span>
            </div>
            <div className="Footer_row2_timing" data-aos="fade-left">
              <span className="Footer_row2_call">Mercredi</span>
              <span className="Footer_row2_number">
                : {props?.setting?.wednesdayWorkingHours}
              </span>
            </div>
            <div className="Footer_row2_timing" data-aos="fade-left">
              <span className="Footer_row2_call">Jeudi</span>
              <span className="Footer_row2_number">
                : {props?.setting?.thursdayWorkingHours}
              </span>
            </div>
            <div className="Footer_row2_timing" data-aos="fade-left">
              <span className="Footer_row2_call">Vendredi</span>
              <span className="Footer_row2_number">
                : {props?.setting?.fridayWorkingHours}
              </span>
            </div>
            <div className="Footer_row2_timing" data-aos="fade-left">
              <span className="Footer_row2_call">Samedi</span>
              <span className="Footer_row2_number">
                : {props?.setting?.saturdayWorkingHours}
              </span>
            </div>
            <div className="Footer_row2_timing" data-aos="fade-left">
              <span className="Footer_row2_call">Dimanche</span>
              <span className="Footer_row2_number">
                : {props?.setting?.sundayWorkingHours}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_row3">
        <div className="Footer_row3_copyright">
          <span className="Footer_row3_copyright">
            © Copyright - Restaurantate | Designed by
          </span>
          <span className="Footer_row3_name"> ui.tayyab</span>
          <span className="Footer_row3_power"> - Powered by</span>
          <span className="Footer_row3_name"> Figma too</span>
        </div>
        <div className="Footer_row3_power">Styleguide / Licenses</div>
      </div>
    </div>
  );
};

export default Footer;
