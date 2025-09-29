import React, { useState } from "react";

// Original App.tsx
/* 
Using standard form elements and useState to manage the state of the form.
The issue is that we are manually validating the form and setting the errors state.
This becomes complex with more input elements.
We might also want to extend this so the button to submit cannot be clicked until the form is valid.
And also not clickable twice until the server has responded and therefore we need to implement
an async await function to handle the submission.
Perhaps also we need to show a loading state when the form is submitting.
Therefore its best to look at a library like React Hook Form.
*/

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    // Manual validation
    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (password.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters",
      });
      return;
    }

    console.log("Form submitted");
  };

  return (
    <form
      className="flex flex-col max-w-sm mx-auto p-4 border rounded-lg shadow gap-4 bg-white gap-2"
      onSubmit={handleSubmit}
    >
      <input
        className="border border-gray-300 rounded-md p-2"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div className="text-red-500">{errors.email}</div>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <div className="text-red-500">{errors.password}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
