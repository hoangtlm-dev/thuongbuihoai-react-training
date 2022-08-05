export interface Blog {
  blogId: string;
  title: string;
  slug: string;
  createDate: string;
  expertId: string;
  image: {
    url: string;
    alt: string;
  };
  description: string;
}
