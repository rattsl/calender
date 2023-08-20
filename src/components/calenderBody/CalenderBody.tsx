/**
 * CalenderBodyコンポーネント
 */

import React from "react";
import dayjs from "dayjs";
import { Table, TableContainer } from "@chakra-ui/react";

import { CalenderWeekLabelWeek } from "./calenderWeekLabel/CalenderWeekLabelWeek";
import { CalenderMonth } from "./calenderMonth/CalenderMonth";

export const CalenderBody = () => {
  // 週
  const WEEK = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];

  // 月作成
  const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();

    // 曜日のindex番号
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

    // 月頭の日曜のinex番号
    let currentMonthCount = 0 - firstDayOfTheMonth;

    const daysMatrix = new Array(5).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
        currentMonthCount++;
        return dayjs(new Date(year, month, currentMonthCount)).format("DD");
      });
    });
    return daysMatrix;
  };

  const month = getMonth();

  return (
    <TableContainer>
      <Table variant="simple">
        <CalenderWeekLabelWeek week={WEEK} />
        <CalenderMonth month={month} />
      </Table>
    </TableContainer>
  );
};
