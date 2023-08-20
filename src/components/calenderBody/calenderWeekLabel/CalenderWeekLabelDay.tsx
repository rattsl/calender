import type React from "react";
import { Td } from "@chakra-ui/react";

type Props = {
  day: string;
};

export const CalenderWeekLabelDay: React.FC<Props> = ({ day }) => {
  return <Td>{day}</Td>;
};
