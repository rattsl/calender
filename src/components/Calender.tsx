/**
 * Calenderコンポーネント
 */

import type React from "react";
import { useState } from "react";
import { Center, VStack, Box } from "@chakra-ui/react";
// import { motion } from "framer-motion";

import type { Schedule } from "~/@types/schedule";
import { CalenderHeader } from "~/components/calenderHeader/CalenderHeader";
import { CalenderBody } from "~/components/calenderBody/CalenderBody";

const Calender: React.FC = () => {
  const today = new Date();

  // =========================state=========================

  // 現在の年
  const [nowYear, setNowYear] = useState<number>(today.getFullYear());
  // console.log(nowYear);

  // 現在の月
  const [nowMonth, setNowMonth] = useState<number>(today.getMonth());
  // console.log(nowMonth);

  // スケジュール
  const [scheduleList, setScheduleList] = useState<Schedule[]>([]);

  // =========================Event=========================

  // --------------------2.3.1 メイン画面---------------------

  /**
   * 2.3.1.1 前月ボタン押下時
   * 押下時にカレンダーの表示を現在表示している月の前月に変更する
   */
  const handleClickChevronLeft = () => {
    if (nowMonth >= 1) setNowMonth((nowMonth) => nowMonth - 1);
    else if (nowMonth < 1) {
      setNowMonth((nowMonth) => nowMonth + 11);
      setNowYear((nowYear) => nowYear - 1);
    }
  };

  /**
   * 2.3.1.3 次月ボタン押下時
   * 押下時にカレンダーの表示を現在表示している月の次月に変更する
   */
  const handleClickChevronRight = () => {
    if (nowMonth < 11) setNowMonth((nowMonth) => nowMonth + 1);
    else if (nowMonth >= 11) {
      setNowMonth((nowMonth) => nowMonth - 11);
      setNowYear((nowYear) => nowYear + 1);
    }
  };

  /**
   * 2.3.1.5 予定ボタン押下時
   * 予定のタイトルを表示する押下時に予定詳細ポップオーバーを表示する
   */
  const handleClickScheduleButton = () => {
    return;
  };

  /**
   * 2.3.1._ 予定作成ボタン押下時(画面仕様書未記載)
   *
   */
  const handleClickScheduleCreateButton = () => {
    return;
  };

  // --------------------2.3.2 予定詳細ポップオーバー---------------------

  /**
   * 2.3.2.1 編集ボタン押下時
   * 押下時に予定編集ポップオーバーを表示する
   */
  const handleClickScheduleEditButton = () => {
    return;
  };

  /**
   * 2.3.2.2 削除ボタン押下時
   * 押下時に予定を削除し、当ポップオーバーを非表示にする
   */
  const handleClickScheduleDeleteButton = () => {
    return;
  };

  /**
   * 2.3.2.3 閉じるボタン押下時
   * 押下時に当ポップオーバーを非表示にする
   * ※当ポップオーバーの領域外をクリックしたときも、閉じるボタンを押下したものとみなす
   */
  const handleClickScheduleCloseButton = () => {
    return;
  };

  // --------------------2.3.3 予定作成ポップオーバー---------------------

  /**
   * 2.3.3.0 保存ボタン押下時(画面仕様書には未記載)
   *
   */
  const handleClickCreateScheduleSaveButton = () => {
    return;
  };

  /**
   * 2.3.3.1 閉じるボタン押下時
   *
   */
  const handleClickCreateScheduleCloseButton = () => {
    return;
  };

  /**
   * 2.3.3.2 予定のタイトル入力欄 変更時
   *
   */
  const handleChangeCreateScheduleTitleInput = () => {
    return;
  };

  /**
   * 2.3.3.3 予定の日付セレクタ
   *
   */
  const handleChangeCreateScheduleDateInput = () => {
    return;
  };

  /**
   * 2.3.3.4 予定の開始時刻セレクタ
   *
   */
  const handleChangeCreateScheduleStartTimeInput = () => {
    return;
  };

  /**
   * 2.3.3.5 予定の終了時刻セレクタ
   *
   */
  const handleChangeCreateScheduleEndTimeInput = () => {
    return;
  };

  /**
   * 2.3.3.6 予定のメモ入力欄
   *
   */
  const handleChangeCreateScheduleMemoInput = () => {
    return;
  };

  // --------------------2.3.4. 予定編集ポップオーバー---------------------

  /**
   * 2.3.4.1 保存ボタン
   *
   */
  const handleClickEditScheduleSaveButton = () => {
    return;
  };

  /**
   * 2.3.4.2 削除ボタン
   *
   */
  const handleClickEditScheduleDeleteButton = () => {
    return;
  };

  /**
   * 2.3.4.3 閉じるボタン
   *
   */
  const handleClickEditScheduleCloseButton = () => {
    return;
  };

  /**
   * 2.3.4.4 予定のタイトル入力欄
   *
   */
  const handleClickEditScheduleTitleInput = () => {
    return;
  };

  /**
   * 2.3.4.5 予定の日付セレクタ
   *
   */
  const handleClickEditScheduleDateInput = () => {
    return;
  };

  /**
   * 2.3.4.6 予定の開始時刻セレクタ
   *
   */
  const handleClickEditScheduleStartTimeInput = () => {
    return;
  };

  /**
   * 2.3.4.6 予定の終了時刻セレクタ
   *
   */
  const handleClickEditScheduleEndTimeInput = () => {
    return;
  };

  /**
   * 2.3.4.6 予定のメモ入力欄
   *
   */
  const handleClickEditScheduleMemoInput = () => {
    return;
  };

  return (
    <Center
      sx={{
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <VStack>
        <CalenderHeader />
        <CalenderBody />
      </VStack>
    </Center>
  );
};

export default Calender;
