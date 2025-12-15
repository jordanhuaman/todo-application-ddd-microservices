export interface userDto {
  id: string;
  name: string;
  age: number;
  email: string;
  createAt: string;
  status: string;
  profile: profileDto | null;
  sharedInformation: sharedInformationDto | null;
}

export interface profileDto{
  id: number;
  imageUrl: string | null;
  createAt: string;
}

export interface sharedInformationDto{
  id: number;
  info: string;
  country: number | null;
  description: string | null;
  createAt: string;
}