import { Button } from "@/shared/components/ui/button";
import { signup } from "./actions";
import { login } from "./actions";
import { Input } from "@/shared/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex justify-center mt-10">
      <form className="flex flex-col w-1/2 gap-2">
        <label htmlFor="email">Email:</label>
        <Input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <Input id="password" name="password" type="password" required />
        <Button variant={"lightgreen"} formAction={login}>
          Log in
        </Button>
        <Button variant={"lightblue"} formAction={signup}>
          Sign up
        </Button>
      </form>
    </div>
  );
}
