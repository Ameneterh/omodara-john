import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Textarea, TextInput } from "flowbite-react";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="w-full p-2 md:p-0 flex flex-col md:flex-row mb-5 md:mb-10 items-center">
        <div className="flex-1 min-h-96">
          <img src="/omodara-contact.png" />
        </div>
        <div className="flex flex-col flex-1 p-3 md:gap-10 w-full">
          <p className="capitalize text-3xl font-bold md:text-6xl md:font-bold mb-4">
            it's time, let's go
          </p>
          <form
            onSubmit={(ev) => ev.target.reset()}
            target="_blank"
            className="flex flex-col gap-4"
            action="https://formsubmit.co/email@company.com"
            method="POST"
          >
            <TextInput
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Your Full Name"
            />
            <TextInput
              type="email"
              id="email"
              name="email"
              placeholder="youremail@company.com"
            />
            <Textarea
              placeholder="Write your message"
              className="min-h-24"
              name="message"
              required
            />

            <Button outline type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
