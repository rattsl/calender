export type Schedule = {
  title: string;
  date: string;
  beforeTime: string | null;
  afterTime: string | null;
  memo: string | null;
  allday: boolean;
  color: string;
  id: number;
};
