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
          <Heading className="text-center">
            We had a problem to load products for you. Please try again later.
          </Heading>
          <Button onClick={() => reset()}>Try again</Button>
        </VStack>
      </Center>
    </main>
  );
}
