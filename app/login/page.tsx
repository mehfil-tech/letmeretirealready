import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex flex-1 justify-center mt-32">
      <form className="flex flex-col w-fit border-2 border-gray-900 p-6 rounded-md">
        <label className="mb-8 text-lg font-medium self-center">
          Log in
        </label>
        <label className="mt-2 text-sm text-gray-300" htmlFor="email">
          Email:
        </label>
        <input
          className="h-10 w-64 rounded-md px-2"
          id="email"
          name="email"
          type="email"
          required
        />
        <label className="mt-2 text-sm text-gray-300" htmlFor="password">
          Password:
        </label>
        <input
          className="h-10 w-64 rounded-md px-2"
          id="password"
          name="password"
          type="password"
          required
        />
        <button
          className="h-10 w-64 bg-blue-500 rounded-md mt-4"
          formAction={login}
        >
          Log in
        </button>
        <button
          className="h-10 w-64 bg-slate-500 rounded-md mt-4"
          formAction={signup}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
