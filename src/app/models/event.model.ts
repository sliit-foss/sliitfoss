import { Timestamp } from 'firebase/firestore';

type Event = {
  title: string;
  description: string;
  location: string;
  date: Timestamp;
  registrationLink: string;
  link: string;
  image_url: string;
  upcoming: boolean;
};

export default Event;
