import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

// ==============================|| MAIN LOGO ||============================== //
export default function LogoSection({ isIcon }) {
  return (
      <Link href="/admin" className="Logo">
        {isIcon ? (
          <Image
            src="/images/fav-icon1.webp"
            alt="Logo"
            className="img-fluid"
            width={45}
            height={45}
          ></Image>
        ) : (
          <Image
            src="/images/ACE-logo.webp"
            alt="Logo"
            className="img-fluid"
            width={100}
            height={100}
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
