interface Pin {
  title: string;
  description: string;
  user_name: string;
  avatar_src: string;
  src: string;
  url: string;
  faved: boolean;
  id: string;
}

interface PinsService {
  pins(): Promise<Pin[]>;
  addPin(pin: Pin): Promise<any>;
}
