export interface IBlogPost {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    videoId?: string;
    videoTitle?: string;
    author: string;
    comments: number;
    likes: number;
    date: string;
    tags: string[];
}

export interface IBlongPostProps {
    isCard?: boolean;
    data?: IBlogPost;
    type?: string;
}

export interface IPostBody {
    data?: IBlogPost;
    type?: string;
}
