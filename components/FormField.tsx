import React from "react";

const FormField = ({
  label,
  id,
  type = "text",
  invalidInput,
  register,
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  invalidInput: string | undefined;
  register: any;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col w-80 m-6 rounded-lg transition-opacity duration-500 opacity-100">
      <input
        className="h-10 rounded-md pl-3 pr-2 bg-gray-100 dark:bg-gray-900"
        type={type}
        id={id}
        placeholder={label}
        {...register(id, {required})}
      />
      <p className="text-sm text-red-500 transition-opacity">
        {invalidInput ?? ""}
      </p>
    </div>
  );
};

export default FormField;
