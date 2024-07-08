//read records. save
//what is gpoing to be saved inside of our array??v  only accept object of type from value

export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills?: string[]; //array of string
  startDate?: string; //we take date obj and convert them to strings
  preference?: string;
}

const today = new Date();

export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: "John",
    role: "Developer",
    skills: ["React", "CSS", "Javascript"],
    startDate: `${
      today.getMonth() + 1
    }/ ${today.getDate()} / ${today.getFullYear()}`,
    preference: "email",
  },

  {
    id: 2,
    name: "Jane",
    role: "Designer",
    skills: ["HTML", "CSS", "Javascript"],
    startDate: `${
      today.getMonth() + 1
    }/ ${today.getDate()} / ${today.getFullYear()}`,
    preference: "email",
  },

  {
    id: 3,
    name: "Jack",
    role: "Developer",
    skills: ["React", "CSS", "Javascript"],
    startDate: `${
      today.getMonth() + 1
    }/ ${today.getDate()} / ${today.getFullYear()}`,
    preference: "email",
  },
];
