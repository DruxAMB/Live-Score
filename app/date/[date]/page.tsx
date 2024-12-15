import { DataTable } from "@/components/tabla/data-table";
import { columns } from "@/components/tabla/columns-partidos";
import { getMatches } from "@/api/football";

export default async function Home({
  params: { date },
}: {
  params: { date: string };
}) {
  const data = await getMatches(date);

  return (
    <>
      <section className="container">
        <div className="mt-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Fixture of Matches
          </h2>
          <p className="text-muted-foreground">
          Select the day to watch the matches
          </p>
        </div>
        <div className="py-4">
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </>
  );
}
