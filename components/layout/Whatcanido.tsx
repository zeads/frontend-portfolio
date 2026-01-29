import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Whatcanido() {
  return (
    <section className=" lg:h-screen items-center justify-between  px-10 mt-12">
      <div className="text-center">
        <h1 className="font-bold text-sm text-blue-500">SERVICES</h1>
        <h3 className="font-bold text-2xl">What I Can Do For You</h3>
      </div>
      <div className="flex flex-wrap mt-2 gap-10 lg:px-30">
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Frontend Development</CardTitle>
            <CardDescription>
              Tech: React, Next.js, Tailwind CSS, TypeScript.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Crafting fast, responsive, and SEO-friendly user interfaces. Using
              Next.js and React, I turn designs into interactive reality with a
              focus on performance and accessibility.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              &quot;Interested? Let&apos;s discuss your project.&quot;
            </Button>
          </CardFooter>
        </Card>
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Backend Architecture</CardTitle>
            <CardDescription>
              Tech: Node.js, Express, JWT, TypeScript.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Building the &quot;brains&quot; of your application. I develop
              secure and scalable server-side logic and RESTful APIs using
              Express.js to ensure your data flows seamlessly.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              &quot;Interested? Let&apos;s discuss your project.&quot;
            </Button>
          </CardFooter>
        </Card>
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Full-Stack Solutions</CardTitle>
            <CardDescription>Tech: The Full MERN/PERN Stack.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The complete package. I take your idea from a blank page to a
              fully functioning web application, handling everything from the
              database schema to the final deployment.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              &quot;Interested? Let&apos;s discuss your project.&quot;
            </Button>
          </CardFooter>
        </Card>
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Database Design & Management</CardTitle>
            <CardDescription>
              Tech: PostgreSQL, MongoDB, Prisma, Mongoose.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Designing efficient data structures for your needs. Whether
              it&apos;s the relational integrity of PostgreSQL or the flexible
              document-based approach of MongoDB, I ensure your data is safe and
              optimized.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              &quot;Interested? Let&apos;s discuss your project.&quot;
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
