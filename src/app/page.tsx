import Logo from "@/components/common/logo";
import Link from "next/link";
import { VStack } from "@/components/common/v-stack";

export default function Home() {
  return (
    <main>
      <VStack>
        <Logo />
        <Link href="/sports-nutrition">See sports nutrition products</Link>
      </VStack>
    </main>
  );
}
