export default interface RawProjectRow {
  title: string;
  date: string;
  tags: string;
  category: string;
  description: string;
  [key: string]: string;
}
