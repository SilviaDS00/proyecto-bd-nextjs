import { BasicLayout } from "@/layouts";
import { Separator } from "@/components/Shared";
import Link from "next/link";
import { FormTest } from "@/components/Form";


export default function fromPage() {
  return (
    <>
      <BasicLayout>
        <Separator height={100} />
        <FormTest />
        <Separator height={110} />

      </BasicLayout>
    </>
  );
}
