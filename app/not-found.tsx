"use client";

import { useRouter } from "next/navigation";
import H from "./_components/Heading";
import { P } from "./_components/Paragraph";
import { Button } from "./_components/Button";
import Image from "next/image";

function NotFound() {
  const router = useRouter();

  return (
    <div>
      <div className="bg-white-100 flex items-center justify-center h-screen">
        <div className="bg-white px-4 w-[94%] h-[90%] mx-auto rounded-lg grid grid-cols-2 items-center justify-center">
          <div className="w-[60%] mx-auto lg:space-y-3 2xl:space-y-8">
            <H size="lg" className="!text-[#E9EAF0]">
              Error 404
            </H>
            <H size="md">Oops! page not found</H>

            <P variant="gray" size="lg">
              Something went wrong. The page you requested could not be found.
              The link is either broken or the page removed.
            </P>

            <Button size="md" variant="primary" onClick={() => router.back()}>
              Go back
            </Button>
          </div>

          <div>
            <Image
              style={{
                width: "100%",
              }}
              src="/not-found-image-2.png"
              alt="not-found-image"
              height={579}
              width={397}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
