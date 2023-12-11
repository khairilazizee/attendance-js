import Navbar from "./dashboard/navbar/Navbar";
import Sidebar from "./dashboard/sidebar/Sidebar";
import { NextSeo } from "next-seo";
import { supabase } from "@/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({ children, titleSEO = "", descSEO = "" }) {

  const router = useRouter();
  const [session, setSession] = useState(null);


  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          throw new Error(error.message);
        }

        if (!data || !data.session || !data.session.user || data.session.user.role !== "authenticated") {
          router.push("/login");
        } else {
          console.log(data.session)
          setSession(data.session);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        router.push("/login");
      }
    };

    checkSession();
  }, [router]);

  return (
    <div className="flex">
      <NextSeo
        title={titleSEO}
        description={descSEO}
      />
      <div className="w-1/5 bg-[color:var(--bgSoft)] p-[20px]">
        <Sidebar />
      </div>
      <div className="w-4/5 p-[20px]">
        <Navbar />
        {children}
      </div>
    </div>
  )
}