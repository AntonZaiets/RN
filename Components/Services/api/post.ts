import { apiPost } from './api';

interface PostResponse {
  id: string;
  title: string;
  body: string;
}

export const posts = async (): Promise<PostResponse> => {
  const response = await apiPost.get<PostResponse>(`/posts`);
  return response.data;
};

export const comments = async (): Promise<PostResponse> => {
  const response = await apiPost.get<PostResponse>(`/posts/1/comments`);
  return response.data;
};
