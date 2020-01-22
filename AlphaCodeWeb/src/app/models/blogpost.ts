import { Guid } from 'guid-typescript';

export class BlogPost {
    postId?: Guid;
    creator: string;
    title: string;
    body: string;
    dt: Date;
}