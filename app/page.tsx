import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import LoginForm from "@/components/LoginForm";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main className={cn("h-full flexCenter flex-col", font.className)}>
      <LoginForm />
    </main>
  );
}
