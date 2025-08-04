const Form = () => {
  return (
    <>
      <form
        className="flex items-center justify-center relative w-full max-w-md md:pt-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Caperucita Roja..."
          className=" shadow-md p-4 rounded-lg w-full ring-2 ring-gray-300  focus:outline focus:outline-rose-500 min-w-60 pr-26"
        />
        <button className="absolute bg-rose-600 pl-6 pr-6 pt-2 pb-2 rounded-md border-1 text-white right-2 cursor-pointer transition-colors duration-200 ease-in hover:bg-white hover:text-rose-500 hover:border-rose-500">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Form;
