import { TextInput, FileInput, Button, Alert, Tabs } from "flowbite-react";
import { FaSignInAlt } from "react-icons/fa";
import { GrUserNew } from "react-icons/gr";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MainLayout from "../layout/MainLayout";

export default function AuthenticationPage() {
  return (
    <MainLayout>
      <div className="min-h-screen  max-w-3xl mx-auto my-10">
        <Tabs variant="underline">
          <Tabs.Item active title="Sign In" tab="sign-in" icon={FaSignInAlt}>
            <SignIn />
          </Tabs.Item>
          <Tabs.Item title="Join Community" tab="sign-up" icon={GrUserNew}>
            <SignUp />
          </Tabs.Item>
        </Tabs>
      </div>
    </MainLayout>
  );
}
