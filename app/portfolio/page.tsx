// import Underconstruction from "@/components/ui/Underconstruction";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  // return <Underconstruction />;
  return (
    <section className="lg:h-full lg:flex-row pt-20">
      <div className="mb-20 flex flex-col items-center">
        <h3 className="font-bold text-sm text-blue-500">PORTFOLIO</h3>
        <h1 className="font-bold text-2xl">Digital Product Showcases</h1>
      </div>
      <div className="flex flex-wrap gap-20 items-center justify-center">
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video " />
          <Image
            src="/web_images/jobseeker.png"
            alt="hero image"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover "
          />
          <CardHeader>
            <CardAction>
              <Badge className="bg-green-500">Completed</Badge>
            </CardAction>
            <CardTitle>Job Seeker Platform</CardTitle>
            <CardDescription className="line-clamp-2">
              Explore thousands of verified job openings from top Indonesian
              companies. Your resume, your opportunities, your future—all in one
              secure and easy-to-use platform.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href="https://ruri-career-path.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-transparent border border-blue-500 text-gray-500 hover:text-white hover:bg-blue-500">
                View Website
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video " />
          <Image
            src="/web_images/projectmanagement.png"
            alt="hero image"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover "
          />
          <CardHeader>
            <CardAction>
              <Badge className="bg-yellow-500">On-Progress</Badge>
            </CardAction>
            <CardTitle>Project Management App</CardTitle>
            <CardDescription className="line-clamp-2">
              Project management doesn&apos;t have to be boring and complicated.
              [Website Name] is built with a clean, eye-pleasing design and
              intuitive functionality. Less time setting up tools, more time
              creating.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href="https://frontent-project-management-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-transparent border border-blue-500 text-gray-500 hover:text-white hover:bg-blue-500">
                View Website
              </Button>
            </Link>
          </CardFooter>
        </Card>
        {/* <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video " />
          <Image
            src="/web_images/jobseeker.png"
            alt="hero image"
            width={500}
            height={500}
            className="relative z-20 aspect-video w-full object-cover "
          />
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">Featured</Badge>
            </CardAction>
            <CardTitle>Job Seeker Platform</CardTitle>
            <CardDescription className="line-clamp-2">
              Explore thousands of verified job openings from top Indonesian
              companies. Your resume, your opportunities, your future—all in one
              secure and easy-to-use platform.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href="https://ruri-career-path.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-transparent border border-blue-500 text-gray-500 hover:text-white hover:bg-blue-500">
                View Website
              </Button>
            </Link>
          </CardFooter>
        </Card> */}
      </div>
    </section>
  );
}
