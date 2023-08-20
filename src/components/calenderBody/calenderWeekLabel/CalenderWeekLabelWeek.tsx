import type React from "react";
import { Thead, Tr, Th } from "@chakra-ui/react";

import { CalenderWeekLabelDay } from "./CalenderWeekLabelDay";

type Props = {
  week: string[];
};

export const CalenderWeekLabelWeek: React.FC<Props> = ({ week }) => {
  return (
    <Thead>
      <Tr>
        {week.map((day, index) => {
          return <CalenderWeekLabelDay day={day} key={index} />;
        })}
      </Tr>
    </Thead>
  );
};
