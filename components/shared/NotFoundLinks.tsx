import Image from "next/image";
import Link from "next/link";
const NotFoundLinks = () => {
  return (
    <div>
      <Link href="/" className="w-36">
        <Image
          src="/assets/images/logo.svg"
          width={128}
          height={38}
          alt="Evently logo"
        />
      </Link>
    </div>
  );
};

export default NotFoundLinks;
