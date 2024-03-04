type Review = {
  _id: string;
  imageUrl?: string;
  name: string;
  rate: number;
  comment: string;
  source: string;
  place: string;
};

type Study = {
  study: [];
  name: string;
  link: string;
  githubLink: string;
  endDate: string;
  startDate: string;
};

type Project = {
  _id: string;
  mainImageUrl: string;
  subImageUrl;
  logoUrl: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  githubLink: string;
  study: Study;
};
