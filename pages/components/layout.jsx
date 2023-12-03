import Navbar from "./dashboard/navbar/Navbar";
import Sidebar from "./dashboard/sidebar/Sidebar";
import { NextSeo } from "next-seo";
import { supabase } from "@/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({ children, titleSEO = "", descSEO = "" }) {

  const router = useRouter();
  const [session, setSession] = useState({});

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        // console.log(data.session)
        setSession(data.session)

        if (data.session === null) {
          router.push("/login")
        }
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchSession();
  }, []);


  if (session === null) {
    return router.push("/login")
  }

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