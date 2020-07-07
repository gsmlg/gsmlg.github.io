/* --- STATE --- */
export interface BlogState {
  blogs: Post[];
}

export interface Post {
  id: number;
  author: string;
  title: string;
  name: string;
  date: string;
}

export type ContainerState = BlogState;
