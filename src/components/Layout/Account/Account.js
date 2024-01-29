import * as styles from "./Account.module.scss";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export function Account() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");

  return (
    <div className={styles.account}>
      {!user && (
        <Button icon className={styles.user} onClick={goToLogin} >
          <FontAwesomeIcon icon={faUser}/>
        </Button>
      )}

      {user && (
        <Button icon className={styles.user} onClick={goToAccount}>
          <FontAwesomeIcon icon={faUser}/>
        </Button>
      )}

      {user && (
        <Button icon className={styles.user} onClick={logout}>
          <FontAwesomeIcon icon={faRightToBracket}/>
        </Button>
      )}
    </div>
  );
}
