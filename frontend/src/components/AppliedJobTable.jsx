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

const AppliedJobTable = () => {
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
          {[1, 2, 3, 4].map((item, index) => (
            <TableRow key={index}>
              <TableCell>12-12-2021</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell>
                <Badge>Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
