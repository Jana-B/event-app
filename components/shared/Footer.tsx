import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/crystal-ball.png"
            alt="logo"
            width={25}
            height={25}
          />
        </Link>
        <p>2024 Eventsy. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
