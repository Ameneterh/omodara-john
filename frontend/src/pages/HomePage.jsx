import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="w-full p-2 flex flex-col md:flex-row gap-4">
        <img src="/omodara-contact.png" className="" />
        <div className="flex-1 flex flex-col justify-center items-center px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold">
            OMODARA
            <span className="block text-5xl md:text-6xl">Kehinde John</span>
          </h1>
          <h1 className="mt-5 text-xl">let's make it happen</h1>
          <h1 className="mt-5 text-3xl font-semibold">Join Our Community</h1>
          <Link
            to="/sign-up"
            className="px-10 mt-8 border-2 border-blue-500 rounded-lg py-2 hover:bg-blue-400"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
