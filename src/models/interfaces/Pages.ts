export interface Rendered {
  rendered: string;
  protected?: boolean;
}

export default interface Page {
  id: number;
  date?: Date;
  title?: Rendered;
  status?: string;
  slug?: string;
  guid?: Rendered;
  modified?: Date;
  type?: string;
  content?: Rendered;
  excerpt?: Rendered;
  author?: number;
  parent: number;
}