import { Tooltip } from "@nextui-org/react";
import { connection } from "next/server";

async function AsyncWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default function Home() {
  connection();
  return (
    <Tooltip content="Hello world">
      <AsyncWrapper>
        <div>Card</div>
      </AsyncWrapper>
    </Tooltip>
  );
}
