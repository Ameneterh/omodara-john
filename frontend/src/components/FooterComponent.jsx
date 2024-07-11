import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { MdEmail, MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="border-t-4">
      <div className="w-full text-center">
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <Footer.Brand
            href="/"
            src="/site_logo.png"
            alt="omodara"
            className="hidden sm:block"
          />
          <div className="flex flex-col items-center justify-center">
            <p>
              <span className="font-bold">Office:</span> 55A, Babanginda Avenue,
              Olusola Estate, Ado-Ekiti, Ekiti State, Nigeria
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="mailto:email@email.com"
                className="flex gap-2 items-center"
              >
                <MdEmail />
                email@email.com
              </Link>
              <Link to="" className="flex gap-2 items-center">
                <MdAddCall />
                +2348012345678
              </Link>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://ameneterh-portfolio.onrender.com"
            by="Amene Ter'Hemen"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
            <Footer.Icon
              href="https://www.facebook.com/ameneng"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/ameneterh"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://www.twitter.com/ameneterh"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.github.com/Ameneterh"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
