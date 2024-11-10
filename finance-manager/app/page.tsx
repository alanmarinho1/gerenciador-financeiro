import Image from "next/image";
import { Button } from "./_components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dark } from "@clerk/themes";
import NavBar from "./_components/navbar";

export default async function Home() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <NavBar />
  );
}
