interface ProjectAttachment {
  id: number;
  img: string[];
}

export type Project = {
  id: number;
  userId: string;
  title: string;
  description: string;
  createDate: string;
  views: number;
  likes: number;
  projectAttachments: ProjectAttachment[];
  tags: string[];
};
