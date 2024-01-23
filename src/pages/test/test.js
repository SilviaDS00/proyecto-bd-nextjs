import { BasicLayout } from "@/layouts";
import { Separator } from "@/components/Shared";
import Link from "next/link";


export default function TestPage() {
  return (
    <>
      <BasicLayout>
        <Separator height={50} />

        <Separator height={100} />

      </BasicLayout>
    </>
  );
}
