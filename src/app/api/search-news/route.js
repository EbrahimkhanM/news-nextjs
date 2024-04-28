import { NextResponse, NextApiRequest } from "next/server";
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function GET(request, response) {
  const { searchParams } = new URL(request.url);
  const  fromDate = searchParams.get("fromDate");
  const  toDate = searchParams.get("toDate");
  const  apiKey = searchParams.get("apiKey");
  console.log("q>>>>>", q);
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=apple&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();

    return NextResponse.json(responseData, { headers: corsHeaders });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error(new Error("Failed to fetch data"));
  }
}
