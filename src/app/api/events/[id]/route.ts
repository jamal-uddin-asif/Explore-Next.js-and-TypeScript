import { mongoConnect } from "@/lib/mongoConnect";
import { TEvent } from "@/types/event";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } },
) {
  try {
    const {id} =await context.params;

    const { db, client } = await mongoConnect();

    const event = await db
      .collection<TEvent> ("events")
      .findOne({_id:new ObjectId(id)});

      console.log(event)

      if(!event){
        return NextResponse.json({
            error: 'Event not found',
            status: 404
        })
      }

    const formattedEvent = {
      id: event._id.toString(),
      title: event.title,
      date: event.date,
      location: event.location,
      image: event.image,
      description: event.description,
    };
    //   client.close(); korte hobe Response pathanor age jodi dbConnect file ta use kori
    return NextResponse.json(formattedEvent)

  } catch (error) {
     console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch event" },
      { status: 500 }
    );
  }
}
