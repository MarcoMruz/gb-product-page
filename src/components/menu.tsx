import { FC } from "react";
import { HStack } from "./common/h-stack";
import Link from "next/link";
import Logo from "./common/logo";
import { Container } from "./common/container";

const Menu: FC = () => {
  return (
    <Container>
      <HStack spacing={2} className="my-5" justify="between">
        <Logo />
        <div>
          <Link href="/" className="mr-5">
            Home
          </Link>
          <Link href="/sports-nutrition">Sports nutrition</Link>
        </div>
      </HStack>
    </Container>
  );
};

export default Menu;
