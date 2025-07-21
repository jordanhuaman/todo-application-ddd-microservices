export class Gender {
  constructor(private readonly value: string) {
    if (value.toLocaleLowerCase() == GENDER.MALE.toString().toLocaleLowerCase()) {
      return;
    }
    else if (value.toLocaleLowerCase() == GENDER.FEMALE.toString().toLocaleLowerCase()) {
      return;
    }
    throw new Error("Gender is not correct");
  }
}

export enum GENDER {
  MALE = 1,
  FEMALE = 0
} 