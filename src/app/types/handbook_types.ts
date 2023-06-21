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

export type Notification = {
  message: string;
  length: string; // values: short, long, indefinite
  actionable: boolean; // any quick action to carry out?
  action?: object; // action to carry out
  severity: string; // green, yellow, red
}

export type PaidAbstracts = {
  reference: string;
  amount: number;
  title: string;
}

export type FirestoreData = {
  userId: string;
  hasPaid: boolean;
  handbookPayment: { reference: string; amount: number; } | {};
  paidAbstracts: PaidAbstracts[];
  levelOfAccess: number;
  designation: string;
  hospital: string;
}

export type PaystackParams = {
  amount: number;
  reference: string;
  email: string;
  callback_url: string;
}

export type PaystackResponse = {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  }
}