export enum EducationType {
  COURSE,
  VIDEO,
  DESIGN,
  ARTICLE,
}

export type Education = {
  id: number;
  title: string;
  reviews: number;
  educationType: EducationType;
  publishDate: Date;
  img: string;
};
