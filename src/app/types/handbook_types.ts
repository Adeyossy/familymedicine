export type SectionItem = {
  metatype: string;
  content: Paragraph[] | string[];
}

export type SectionContent = {
  metatype: string,
  content: SectionContent[]
}

export type TableOfContent = {
  title: string;
  sections: string[];
}

export type Paragraph = {
  metatype: string;
  content: string[];
}

export type MetaType = {
  metatype: string;
  content: Paragraph[];
}

export type Section = {
  metatype: string;
  content: Paragraph[] | MetaType[];
}

export type Chapter = {
  metatype: string;
  content: Paragraph[] | MetaType[] | Section[];
}

export type UserDetails = {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
  emailVerified: boolean;
}