import { mongoConnect } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const { db, client } = await mongoConnect();
    const events = await db.collection("events").find().toArray();

    const formattedEvents = events.map((event) => ({
      id: event._id.toString(),
      title: event.title,
      date: event.date,
      location: event.location,
      image: event.image,
      description: event.description,
    }));
    //   client.close(); korte hobe Response pathanor age jodi dbConnect file ta use kori
    return NextResponse.json(formattedEvents);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { db, client } = await mongoConnect();
    const data =await req.json() 

  } catch (error) {}
}
