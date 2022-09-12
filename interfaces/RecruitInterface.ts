export enum CategoriesEnum {
  EXPERIENCE = 'EXPERIENCE',
  QUALIFICATION = 'QUALIFICATION',
  SELF_SUFFICIENCY = 'SELF_SUFFICIENCY',
  STRESS_TOLERANCE = 'STRESS_TOLERANCE',
  COMMUNICABILITY = 'COMMUNICABILITY',
  CREATIVITY = 'CREATIVITY',
  RATIONALITY = 'RATIONALITY',
}

export interface RecruitInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Answer {
  id: string;
  question: string;
  answerText: string;
  answerValue: number;
  category: CategoriesEnum;
}

export interface RecruitData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: number;
  status: string;
  answers: Answer[];
  creationDate: Date;
  cvUrl: string;
  cvName: string;
  comment: string;
  experience: number;
  qualification: number;
  selfSufficiency: number;
  stressTolerance: number;
  communicability: number;
  creativity: number;
  rationality: number;
}

export interface Test {
  id: string;
  question: string;
  category: CategoriesEnum;
  answers: { id: string; text: string; value: number }[];
}

export interface AwsResponse {
  Bucket: string;
  ETag: string;
  Key: string;
  Location: string;
  key: string;
}

export interface RegisterRecruitResponse extends Answer {
  createdDate: string;
  updatedDate: string;
  deletedDate: string | null;
  userId: string;
}

export interface GetRecruitListResponse extends RecruitData {
  createdDate: string;
  updatedDate: string;
  deletedDate: string | null;
}
