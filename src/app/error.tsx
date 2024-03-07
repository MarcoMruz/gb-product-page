"use client";

import Button from "@/components/common/button";
import Center from "@/components/common/center";
import Heading from "@/components/common/heading";
import VStack from "@/components/common/v-stack";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <Center>
        <VStack align="center" spacing={5}>
          <Heading className="text-center" color="black">
            There was some error, that we did not anticipate. Please leave us a
            feedback so that we can improve in providing you with the best
            service.
          </Heading>
          <Button onClick={() => reset()}>Try again please</Button>
        </VStack>
      </Center>
    </main>
  );
}
