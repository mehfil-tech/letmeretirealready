"use client";
import useFirebaseHooks from "@services/useFirebaseHooks";
import CategoryList from "./CategoryList";

const ExpenseCategoryList = () => {
  const { data, addData, deleteData } = useFirebaseHooks("expenseCategories");
  return (
    <section className="flex justify-center">
      <CategoryList
        categories={data}
        addCategory={addData}
        deleteCategory={deleteData}
      />
    </section>
  );
};

export default ExpenseCategoryList;
