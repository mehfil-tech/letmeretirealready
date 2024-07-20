import { getCategories } from "./actions";

async function SelectCategory() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <>
      {categories?.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </>
  );
}

export default SelectCategory;
