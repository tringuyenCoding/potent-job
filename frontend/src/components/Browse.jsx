import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import Navbar from "./shared/Navbar";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useEffect } from "react";
import { setSearchedQuery } from "@/redux/jobSlice";

// const randomJobs = [1, 2, 3];

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-full mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {allJobs.map((item) => {
            return <Job key={item._id} job={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
