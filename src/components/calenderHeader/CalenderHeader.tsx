/**
 * CalenderHeaderコンポーネント
 */

import type React from "react";
import { Center, HStack, Box, Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { GoCalendar } from "react-icons/go";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SiSpring } from "react-icons/si";

export const CalenderHeader: React.FC = () => {
  return (
    <HStack>
      {/* カレンダー */}
      <IconContext.Provider value={{ color: "4db56a", size: "50px" }}>
        <GoCalendar />
        <Text fontSize="2xl">カレンダー</Text>
      </IconContext.Provider>
      {/* 月変更領域 */}
      <IconContext.Provider value={{ size: "50px" }}>
        <BiChevronLeft
          onClick={() => {
            return;
          }}
        />
        <Text fontSize="xl">2023年 1月</Text>
        <BiChevronRight
          onClick={() => {
            return;
          }}
        />
      </IconContext.Provider>
    </HStack>
  );
};

// export default CalenderHeader;
