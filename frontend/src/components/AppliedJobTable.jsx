import {
  Table,
  TableHead,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Table>
        <TableCaption>List of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <TableCell>Date</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Company</TableCell>
              <TableCell className="text-right">Status</TableCell>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs <= 0 ? (
            <span></span>
          ) : (
            allAppliedJobs.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item?.createAt?.split("T")[0]}</TableCell>
                <TableCell>{item.job?.title}</TableCell>
                <TableCell>{item.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      item?.status === "rejected"
                        ? "bg-red-400"
                        : item.status === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400"
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
