export type SectionItem = {
  metatype: string;
  content: SectionItem[] | string[]
}

export type TableOfContent = {
  title: string;
  sections: string[];
}