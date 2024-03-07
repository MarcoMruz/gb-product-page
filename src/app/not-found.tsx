import Link from "next/link";
import Text from "@/components/common/text";
import Heading from "@/components/common/heading";
import Center from "@/components/common/center";
import VStack from "@/components/common/v-stack";

export default function NotFound() {
  return (
    <main>
      <Center>
        <VStack align="center" spacing={5}>
          <Heading weight="semibold">404 Not Found</Heading>
          <Text>
            Could not find the page you were trying to find. Please control if
            URL is correct, or let us know{" "}
            <span className="text-blue-500">
              <Link href="mailto:help@example.com">here</Link>
            </span>
            .
          </Text>
          <Link
            href="/"
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          >
            Go Home
          </Link>
        </VStack>
      </Center>
    </main>
  );
}
