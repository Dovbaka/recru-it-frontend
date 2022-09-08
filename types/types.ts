export interface Answer {
    id: string;
    question: string;
    answerText: string;
    answerValue: number;
    category: CategoriesEnum;
}

export enum CategoriesEnum {
    EXPERIENCE = 'EXPERIENCE',
    QUALIFICATION = 'QUALIFICATION',
    SELF_SUFFICIENCY = 'SELF_SUFFICIENCY',
    STRESS_TOLERANCE = 'STRESS_TOLERANCE',
    COMMUNICABILITY = 'COMMUNICABILITY',
    CREATIVITY = 'CREATIVITY',
    RATIONALITY = 'RATIONALITY',
}

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
    answers: Answer[];
    creationDate: Date;
    cvUrl: string;
    comment: string;
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
    category: CategoriesEnum;
    answers: { id: string; text: string; value: number }[];
}
