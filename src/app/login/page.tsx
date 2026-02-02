"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// import { setToken } from "@/lib/token";
import { Eye, EyeOff } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface LoginValues {
  email: string;
  password: string;
}



export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();


  


//   const router = useRouter();
//   const [showPassword, setShowPassword] = React.useState(false);

//   const onSubmit = async (data: LoginValues) => {
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();

//     if (result.token) {
//       setToken(result.token);
//       alert("Login successful!");
//       router.push("/");
//     } else {
//       alert(result.error || "Login failed");
//     }
//   };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: true })}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    type={ "password"}
                    {...register("password", { required: true })}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                   
                  >
                  </button>
                </div>
              </Field>

              <Field>
                <Button type="submit">Login</Button>
                <Button
                  variant="outline"
                  type="button"
                  className="mt-2"
                
                >
                  Login with Google
                </Button>
                <FieldDescription className="text-center mt-2">
                  Don't have an account? <Link href="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}