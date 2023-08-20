/**
 * CalenderMonthコンポーネント
 */

import type React from "react";
import { Tbody } from "@chakra-ui/react";

import { CalenderWeek } from "./CalenderWeek";

type Props = {
  month: string[][];
};

export const CalenderMonth: React.FC<Props> = ({ month }) => {
  return (
    <Tbody>
      {month.map((week, index) => {
        return <CalenderWeek week={week} key={index} />;
      })}
    </Tbody>
  );
};
