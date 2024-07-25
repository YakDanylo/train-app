import AuthForm from "@/app/components/AuthForm";
import { signUp } from "@/app/services/auth-service";
export default function SignUp() {
  return (
    <main>
      <AuthForm typeOfForm={"signUp"} func={signUp} />
    </main>
  );
}
