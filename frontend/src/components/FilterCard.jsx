import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";

const filterData = [
  {
    filterType: "Location",
    details: ["Bangalore", "Chennai", "Delhi", "Hyderabad", "Mumbai"],
  },
  {
    filterType: "Job Type",
    details: ["Full Time", "Part Time", "Internship"],
  },
  {
    filterType: "Experience",
    details: ["0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const changeEvent = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeEvent}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.details.map((detail, idx) => {
              const itemid = `id${detail}-${idx}`;
              return (
                <div key={idx} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={detail} />
                  <Label htmlFor={itemid}>{detail}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
