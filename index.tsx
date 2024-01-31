interface FormShape {
  username: string;
  password: string;
}

type InputName = keyof FormShape;

export function Repro() {
  return (
    <form>
      <input className={"password" satisfies InputName} type="password" />
    </form>
  );
}
