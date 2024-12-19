export interface BlogPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    author?: string;
    publishedAt?: string;
}