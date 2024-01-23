import { BasicLayout } from "@/layouts";
import { useRouter } from "next/router";
import {
  Info
} from "@/components/Account";
import { Tab } from "semantic-ui-react";
import * as styles from "./account.module.scss";
import { Separator } from "@/components/Shared";

export default function account() {
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
