import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            Event Management <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Modern Event Management Platform
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Learn how to build a real-world event management application using
          Next.js, TypeScript, and MongoDB from project setup to CRUD operations
          and scalable architecture.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Browse Events <ArrowUpRight className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Calendar className="size-5" /> Create Event
          </Button>
        </div>
      </div>
    </div>
  );
}