
export interface IArticle {
  slug:       string;
  excerpt:    string;
  body:       string;
  id:         string;
  timeToRead: number;
  date:       string;
}

export type authorProps = {
  name:     string,
  summary?: string,
}
