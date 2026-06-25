import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold">Welcome to Fastship App</h1>
          <p className="text-gray-600">You can definitely trust our services</p>
        </div>

        <div className="flex gap-5">
          <Button asChild>
            <Link to="/seller/login">Seller Login</Link>
          </Button>
          <Button asChild>
            <Link to="/partner/login">Partner Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
