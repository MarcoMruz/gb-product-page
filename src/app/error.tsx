"use client";

import Button from "@/components/common/button";
import Center from "@/components/common/center";
import { Heading } from "@/components/common/heading";
import { VStack } from "@/components/common/v-stack";
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
            There was some error, that we did not anticipate. Please leave us a
            feedback so that we can improve in providing you with the best
            service.
          </Heading>
          <Button
            onClick={
              // Attempt to recover by trying to re-render the invoices route
              () => reset()
            }
            colorScheme="danger"
          >
            Try again
          </Button>
        </VStack>
      </Center>
    </main>
  );
}
