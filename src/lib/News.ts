export interface News {
  content: string | TrustedHTML;
  pubDate: string | number | Date;
  title: string;
  id: number;
  slug: string;
  description: string;
  thumbnail: string;
}
