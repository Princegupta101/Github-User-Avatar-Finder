import useDebounce from "../../customHooks/useDebounce";

function Search({updateSearchTerm}){   
    const Debouncecallback =useDebounce((e)=>updateSearchTerm(e.target.value));
    return (
        <>
        <div className="flex flex-col content-center items-center">
            <input
            className=" p-4 text-xl  border-2 border-solid border-black w-72 h-fit  m-3 mt-12 text-center"
              id="User-name-search"
              type="text"
             placeholder="Enter Username......"
            onChange={Debouncecallback} 
             />
        </div>
        </>
    )
}
export default Search;