import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramPage from "@/components/programs/ProgramPage";
import programsData from "@/data/programs/programs.json";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all programs
export async function generateStaticParams() {
  return programsData.programs.map((program) => ({
    slug: program.slug,
  }));
}

// Generate metadata for each program
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programsData.programs.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: "Program Not Found | FS University",
      description: "The requested program could not be found.",
    };
  }

  return {
    title: `${program.title} | FS University`,
    description: program.description,
  };
}

export default async function DynamicProgramPage({ params }: Props) {
  const { slug } = await params;

  // Find the program by slug
  const program = programsData.programs.find((p) => p.slug === slug);

  // If program not found, show 404
  if (!program) {
    notFound();
  }

  // Type the program data for the ProgramPage component
  const programData = {
    ...program,
    level: program.level as
      | "Undergraduate"
      | "Postgraduate"
      | "Diploma"
      | "Doctoral",
    curriculum: program.curriculum?.map((item) => ({
      semester: "year" in item ? item.year : item.semester,
      subjects: item.subjects,
    })),
    fees:
      typeof program.fees === "string"
        ? { tuitionFee: program.fees, totalFee: program.fees }
        : program.fees,
  };

  return <ProgramPage programData={programData} />;
}
