import { Button } from "@/shared/components/ui/button";
import { signup } from "./actions";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <form className="flex flex-col">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <Button formAction={login}>Log in</Button>
      <Button formAction={signup}>Sign up</Button>
    </form>
  );
}
