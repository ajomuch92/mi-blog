export default interface Category {
  count: number;
  description: string;
  id: number;
  link: string;
  // meta: Array<any>;
  name: string;
  parent: number;
  slug: string;
  taxonomy: string;
}