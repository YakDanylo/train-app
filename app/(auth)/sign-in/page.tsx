import AuthForm from "@/app/components/AuthForm";
import classes from "./page.module.css";
import { signIn } from "@/app/services/auth-service";
export default async function SignIn() {
  return (
    <div className={classes.formWrapper}>
      <AuthForm typeOfForm={"signIn"} func={signIn} />
    </div>
  );
}
