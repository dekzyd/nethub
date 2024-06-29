import {
  FaYoutube,
  FaPinterest,
  FaReddit,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter, FaCarrot, FaEnvelopeOpenText } from "react-icons/fa6";

export function NewsletterIcons() {
  return (
    <>
      <div className="social-icon">
        <FaEnvelopeOpenText />
      </div>
      <div className="social-icon">
        <FaCarrot />
      </div>
    </>
  );
}

export function CommunityIcons() {
  return (
    <>
      <div className="social-icon">
        <FaLinkedin />
      </div>
      <div className="social-icon">
        <FaYoutube />
      </div>
      <div className="social-icon">
        <FaFacebook />
      </div>
      <div className="social-icon">
        <FaXTwitter />
      </div>
      <div className="social-icon">
        <FaPinterest />
      </div>
      <div className="social-icon">
        <FaReddit />
      </div>
    </>
  );
}
