import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://gymbeam.sk/media/logo/websites/1/GB_Logo_Energy_SK_1.png"
        alt="GymBeam"
        width={150}
        height={50}
      />
    </Link>
  );
};

export default Logo;
