// root/src/app/page.tsx

import Hero from "@/components/Hero";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // uncomment this and delete session=true to enable authentication
  // const session = await getServerSession(authOptions);
  const session = true;

  if (!session) {
    console.log("Session -- ", session);
    redirect("/api/auth/signin");
  }

  return (
    <>
         <Hero />
    </>
  );
}
