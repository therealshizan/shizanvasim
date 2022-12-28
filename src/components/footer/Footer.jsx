import Title from "components/Title";
import React, {useEffect} from "react";
import "./Footer.css";
import { SocialInfos } from "data/SocialInfo";
import { footerEntry } from "modules/scroll";

const ContactMe = () => {

  useEffect(()=>{
    footerEntry()
  })

  return (
    <>
    <div className="content" id="contactMe">
        <Title>Connect With Me</Title>

        {/* Social Icons */}
        <ul className="socialIcons">
          <table>
            <tbody>
              {SocialInfos.map((SocialInfo) => {
                return (
                  <tr key={SocialInfo.id}>
                    <td>
                      <img
                        alt={`Shizan Vasim ${SocialInfo.socialTitle}`}
                        src={SocialInfo.icon}
                      />
                    </td>
                    <td>
                      <p>{SocialInfo.socialTitle}</p>
                    </td>
                    <td>
                      <p>
                        <a
                          title={`Shizan Vasim ${SocialInfo.socialTitle}`}
                          rel="noreferrer"
                          target="_blank"
                          href={SocialInfo.socialLink}
                        >
                          {SocialInfo.username}
                        </a>
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
        <p id="copyright-footer">Shizan Vasim © 2022</p>
      </div>
    </>
  );
};


export default ContactMe;
