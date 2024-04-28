import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${newsAPIKey}&language=en&searchIn=title`);
        console.log("response.............",response)
        return NextResponse.json(response)
    } catch (error) {
        console.log("error")
    }
    
  }