"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function actionLogin(formData: FormData) {
  const passwordField = formData.get("password");
  if (!passwordField) {
    return `Missing info`;
  }
  const password = passwordField.valueOf();
  if (typeof password !== "string") {
    return `Wrong field type`;
  }
  if (password !== process.env.PASSWORD) {
    return `Wrong password`;
  }
  cookies().set("login", process.env.TOKEN || "noup");
  const pathField = formData.get("path");
  const pathObj = pathField?.valueOf();
  const path = typeof pathObj === "string" ? pathObj : "";
  redirect(path ? path : "/");
}

export async function actionLogout() {
  cookies().delete("login");
  redirect("/login");
}
