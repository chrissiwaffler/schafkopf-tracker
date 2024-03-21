import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen pl-12 pr-12">
      <Table>
        <TableCaption>Current Schafkopf points.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead className="w-[100px]">Game mode</TableHead>
            <TableHead className="w-[100px]">Player A</TableHead>
            <TableHead className="w-[100px]">Player B</TableHead>
            <TableHead className="w-[100px]">Player C</TableHead>
            <TableHead className="w-[100px]">Player D</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Start</TableCell>
            <TableCell>-</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">21:23 21.03.2024</TableCell>
            <TableCell>Sauspiel</TableCell>
            <TableCell>-1</TableCell>
            <TableCell>-1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
