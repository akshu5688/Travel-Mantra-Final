import blogsData from './blogs.json';

export type BlogSection = {
  level: number;
  heading: string;
  paragraphs: string[];
  listItems: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = blogsData as BlogPost[];
