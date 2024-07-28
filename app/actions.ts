"use server";

import { createClient } from "@utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUser() {
  const supabase = createClient();
  const auth = await supabase.auth.getUser();

  if (auth?.data?.user){
    redirect("/home");
  }

  return auth;
}
