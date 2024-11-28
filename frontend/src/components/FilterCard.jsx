import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

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
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.details.map((detail, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={detail} />
                  <Label>{detail}</Label>
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
