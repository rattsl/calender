/**
 * CalenderWeekコンポーネント
 */

import type React from "react";
import { Tr, Td } from "@chakra-ui/react";

import { CalenderDay } from "./CalenderDay";

type Props = {
  week: string[];
};

export const CalenderWeek: React.FC<Props> = ({ week }) => {
  return (
    <Tr>
      {week.map((day, index) => {
        return <CalenderDay day={day} key={index} />;
      })}
    </Tr>
  );
};
