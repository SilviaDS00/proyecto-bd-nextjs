import * as styles from "./Account.module.scss";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export function Account() {
  const { user } = useAuth();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");

  return (
    <div className={styles.account}>
      <Button icon className={styles.user}>
        <FontAwesomeIcon
          icon={user ? faUser : faRightToBracket}
          onClick={user ? goToAccount : goToLogin}
        />
      </Button>
    </div>
  );
}
