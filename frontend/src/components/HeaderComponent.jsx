import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HeaderComponent() {
  const path = useLocation().pathname;
  const [signIn, setSignin] = useState(false);

  return (
    <Navbar fluid className="w-full fixed z-50 md:p-6 bg-[#f1f1f1] border-b-2">
      <Navbar.Brand href="/">
        <img src="/site_logo.png" className="mr-3 h-10 sm:h-14" alt="omodara" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {signIn ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">User Name</span>
              <span className="block truncate text-sm font-medium">
                name@email.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/about-omodara"} as={"div"}>
          <Link to="/about-omodara">ABOUT</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/services"} as={"div"}>
          <Link to="/services">SERVICES</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/awards"} as={"div"}>
          <Link to="/awards">AWARDS</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/news-events"} as={"div"}>
          <Link to="/news-events">NEWS & EVENTS</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/blog-posts"} as={"div"}>
          <Link to="/blog-posts">BLOG POSTS</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/gallery"} as={"div"}>
          <Link to="/gallery">GALLERY</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link
            to="/contact"
            className="md:bg-slate-400 md:text-white md:py-2 md:px-4 rounded-lg hover:bg-slate-500 hover:text-white"
          >
            CONTACT
          </Link>
        </Navbar.Link>
        <div className="flex items-center gap-2 ml-3 pt-3 md:pt-0 text xl md:text-2xl">
          <Link to="https://www.facebook.com">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagram />
          </Link>
          <Link to="https://www.twitter.com">
            <FaTwitter />
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
