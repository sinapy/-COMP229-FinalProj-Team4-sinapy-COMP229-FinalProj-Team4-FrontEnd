import {Question} from "./question.model";

export class Post {
    _id?: any;
    title?: string;
    status?: string;
    price?: number;
    expires_on?: string;
    owner?: any;
    questions?: Question[];
  }
