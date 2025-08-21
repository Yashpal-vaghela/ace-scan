import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

// ==============================|| MAIN LOGO ||============================== //
export default function LogoSection({ isIcon }) {
  return (
    <Link href="/" className="Logo">
      {isIcon ? (
        <Image
          src="/images/fav-icon1.webp"
          width={45}
          height={58}
          className="img-fluid"
          alt="Logo"
          style={{height:'auto'}}
        ></Image>
      ) : (
        <Image
          src="/images/ACE-logo.webp"
          alt="Logo"
          className="img-fluid"
          width={180}
          height={180}
        ></Image>
      )}
    </Link>
  );
}

LogoSection.propTypes = {
  reverse: PropTypes.bool,
  isIcon: PropTypes.bool,
  sx: PropTypes.any,
  to: PropTypes.any,
};
