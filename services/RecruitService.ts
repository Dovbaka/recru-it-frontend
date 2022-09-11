import API from '../api/api';
import { AxiosResponse } from 'axios';
import { Answer, AwsResponse, GetRecruitListResponse, RegisterRecruitResponse } from '../types/types';

export default class RecruitService {
  static async saveFileToS3(file: File): Promise<AxiosResponse<AwsResponse>> {
    const formData = new FormData();
    formData.append('file', file);
    return API.post('recruit/file', formData);
  }

  static async registerRecruit(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    role: number,
    cvUrl: string,
    answers: Answer[],
  ): Promise<AxiosResponse<RegisterRecruitResponse>> {
    return API.post('answer', {
      userData: {
        firstName,
        lastName,
        email,
        phoneNumber,
        role,
        status: 'new',
        comment: '',
        experience: answers.filter(el => el.category === 'EXPERIENCE').reduce((sum, el) => sum + el.answerValue, 0),
        qualification: answers
          .filter(el => el.category === 'QUALIFICATION')
          .reduce((sum, el) => sum + el.answerValue, 0),
        selfSufficiency: answers
          .filter(el => el.category === 'SELF_SUFFICIENCY')
          .reduce((sum, el) => sum + el.answerValue, 0),
        stressTolerance: answers
          .filter(el => el.category === 'STRESS_TOLERANCE')
          .reduce((sum, el) => sum + el.answerValue, 0),
        communicability: answers
          .filter(el => el.category === 'COMMUNICABILITY')
          .reduce((sum, el) => sum + el.answerValue, 0),
        creativity: answers.filter(el => el.category === 'CREATIVITY').reduce((sum, el) => sum + el.answerValue, 0),
        rationality: answers.filter(el => el.category === 'RATIONALITY').reduce((sum, el) => sum + el.answerValue, 0),
        cvUrl,
      },
      answersData: answers,
    });
  }

  static async getRecruitList(): Promise<AxiosResponse<GetRecruitListResponse>> {
    return await API.get('recruit');
  }
}
