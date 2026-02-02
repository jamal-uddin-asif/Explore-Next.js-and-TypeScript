import { mongoConnect } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT SECRET NOT FOUND");
}

async function POST(req: NextRequest, res: NextResponse) {
  
    try {
      const { db, client } = await mongoConnect();
      const { email, password } = await req.json();

      // find user
      const user = await db.collection("users").findOne({ email });

      if (!user) {
        //   client.close(); korte hobe jodi dbConnect file ta use kori
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 },
        );
      }

      // compare password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        //   client.close(); korte hobe jodi dbConnect file ta use kori
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 },
        );
      }

      // Generate JWT
      const token = jwt.sign(
        {
          id: user._id.toString(),
          name: user.username,
          role: user.role,
        },
        JWT_SECRET,
        { expiresIn: "1d" },
      );

      const res = NextResponse.json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });

      //   client.close(); korte hobe jodi dbConnect file ta use kori

      return res;
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 },
      );
    }
}
