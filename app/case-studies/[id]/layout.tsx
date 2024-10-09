import { ReactNode } from "react";
import { getCaseStudies } from "../lib/data";

export async function generateStaticParams() {
  const caseStudies = (await getCaseStudies()) as Project[];

  return caseStudies.map((project) => ({
    _id: project._id,
  }));
}

type Props = {
  children: ReactNode;
};

export default function CaseStudyLayout({ children }: Props) {
  return children;
}
