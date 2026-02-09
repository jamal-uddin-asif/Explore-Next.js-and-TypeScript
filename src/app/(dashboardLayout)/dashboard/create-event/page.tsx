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
import { Textarea } from "@/components/ui/textarea";
import { TEvent } from "@/types/event";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function CreateEventPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEvent>();

  const router = useRouter();

  const onSubmit = async (data: TEvent) => {
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Event created successfully!");
      router.push("/events");
    } else {
      alert(result.error || "Failed to create event");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
          <CardDescription>
            Fill in the details to create a new event
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Title */}
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  id="title"
                  placeholder="Event title"
                  {...register("title", { required: true })}
                />
              </Field>

              {/* Date (string) */}
              <Field>
                <FieldLabel htmlFor="date">Date</FieldLabel>
                <Input
                  id="date"
                  placeholder="2026-06-15"
                  {...register("date", { required: true })}
                />
                <FieldDescription>
                  Use any readable date format
                </FieldDescription>
              </Field>

              {/* Location */}
              <Field>
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <Input
                  id="location"
                  placeholder="Dhaka, Bangladesh"
                  {...register("location", { required: true })}
                />
              </Field>

              {/* Image URL */}
              <Field>
                <FieldLabel htmlFor="image">Image URL</FieldLabel>
                <Input
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  {...register("image", { required: true })}
                />
              </Field>

              {/* Description */}
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  placeholder="Event description"
                  rows={4}
                  {...register("description", { required: true })}
                />
              </Field>

              {/* Submit */}
              <Field>
                <Button type="submit">Create Event</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}