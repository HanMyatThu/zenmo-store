"use server";
import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getStoreInfo = async (): Promise<Category> => {
  console.log(URL, "URL");
  const res = await fetch(`${URL}`);
  return res.json();
};

export default getStoreInfo;
