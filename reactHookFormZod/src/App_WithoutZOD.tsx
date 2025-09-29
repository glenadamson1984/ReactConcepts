import { useForm, type SubmitHandler } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@test.com",
      password: "",
    },
  });

  // the second argument for the register function is the rules for the field
  // in this case we are using the zod library to validate the fields

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // can comment out the error to see the form work - this is just to show what would happen if there was an error on the server
      throw new Error();
    } catch (error) {
      // setError("password", {
      //   message: "password failed",
      // });
      setError("root.serverError", {
        message: "Something went wrong",
      });
    }
    console.log(data);
  };

  return (
    <form
      className="flex flex-col max-w-sm mx-auto p-4 border rounded-lg shadow gap-4 bg-white gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("email", {
          required: "Email is required",
          validate: (value: string) => {
            if (!value.includes("@")) {
              return "Email must include @";
            }
            return true;
          },
        })}
        className="border border-gray-300 rounded-md p-2"
        type="text"
        placeholder="Email"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {errors.root?.serverError && (
        <p className="text-red-500">{errors.root.serverError.message}</p>
      )}
    </form>
  );
};

export default App;
