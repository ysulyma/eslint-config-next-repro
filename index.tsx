/**
 * The point of this is to do something like
 * ```js
 * const formData = formDataToJson(
 *   new FormData(formRef.current!)
 * ) as FormShape;
 * ```
 * Since this uses `name` attributes as sources of truth,
 * we use `satisfies InputName` to validate these.
 */
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
