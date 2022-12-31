import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addExpenses } from "../../redux/features/expenseSlice";
import { v4 as uuid } from "uuid";

const PokemonForm = ({ setShowModal }: any) => {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "head-butt", text: "head-butt" },
    { value: "mega-kick", text: "mega-kick" },
  ];
  const [close, setClose] = useState(false);
  // const dispatch = useDispatch();

  // const [values, setValues] = useState({
  //   title: "",
  //   price: "",
  //   category: "",
  //   id: uuid(),
  // });

  // const handleAddExpenses = (e: any) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   const { title, price, category } = values;
  //   if (title === "" || price === "" || category === "") {
  //     setValues({ ...values });
  //     return;
  //   }
  //   // dispatch(addExpenses(values));
  //   setValues({
  //     title: "",
  //     price: "",
  //     category: "",
  //     id: uuid(),
  //   });
  //   // setAddExpense(true);
  //   // setAddNewExpense(false);
  // };

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto w-[30rem] ">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t "></div>

          <form className="shadow-md rounded px-8 pt-6 pb-8 w-full">
            <label className="block text-black text-sm font-bold mb-1">Pokemon Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 text-black" />
            <label className="block text-black text-sm font-bold mb-1">Abilities</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 text-black" />
            <label className="block text-black text-sm font-bold mb-1">Image</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 text-black" type="file" src="" alt="" />

            <label className="block text-black text-sm font-bold mb-1">Move</label>

            <select required className="shadow appearance-none border rounded w-full py-2 px-2 text-black" name="category">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </form>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </button>
            <button className="text-white bg-orange-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(false)}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonForm;
