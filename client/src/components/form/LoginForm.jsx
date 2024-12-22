import { useForm } from "react-hook-form";

const LoginForm = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    console.log(data); // Handle login logic here
    alert(`Login successful for: ${data.email}`);
  };

  return (
      <div className="">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.email ? "border-red-500" : "border-gray-300"
              } shadow-sm`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.password ? "border-red-500" : "border-gray-300"
              } shadow-sm`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white text-xl rounded-2xl hover:bg-primary-dark font-semibold py-3"
          >
            Login
          </button>
        </form>
      </div>
  );
};

export default LoginForm;
