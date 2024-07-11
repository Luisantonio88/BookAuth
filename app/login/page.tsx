"use client";

import { Button } from "@/components/ui/button";
import { actionLogin } from "../actions/auth";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");

  const path = params.get("path");
  const login = async (formData: FormData) => {
    const message = await actionLogin(formData);
    setMessage(message);
  };
  const clearMessage = () => setMessage("");

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-amber-100">
      <form action={login} className="flex flex-col items-start gap-4">
        <h1 className="text-orange-700 text-3xl"> Login</h1>
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={clearMessage}
          className="rounded-full bg-sky-50 hover:border-sky-800"
        />
        <input type="hidden" name="path" value={path || ""}></input>
        <Button>Login</Button>
        <p className="text-orange-700 h-12">{message}</p>
      </form>
    </main>
  );
}
