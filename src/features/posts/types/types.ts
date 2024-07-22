export type Post = {
    id: string;
    title: string;
    content: string;
    userId?: string;
    date: string;
    reactions: Reactions;
}

export type Reactions = {
    thumbsUps: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
}