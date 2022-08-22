export interface Result {
    id: string;
    question: string;
    answerText: string;
    answerValue: number;
    category: CategoriesType;
}

export type CategoriesType =
    | 'EXPERIENCE'
    | 'QUALIFICATION'
    | 'SELF-SUFFICIENCY'
    | 'STRESS TOLERANCE'
    | 'COMMUNICABILITY'
    | 'CREATIVITY'
    | 'RATIONALITY'

export interface UserInfoType {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface UserDataType {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: number;
    status: string;
    answers: Result[];
    creationDate: Date;
    fileName: string;
    comment: string;
    categoriesScore: categoriesScoreType
}

export type categoriesScoreType = {
    experience: number;
    qualification: number;
    selfSufficiency: number;
    stressTolerance: number;
    communicability: number;
    creativity: number;
    rationality: number;
}

export type TestType = {
    id: string;
    question: string;
    category: CategoriesType;
    answers: { id: string; text: string; value: number }[];
}
