import { QuizTitleProps } from "@/app/Flow2QuizTitle";
import { ROUTES } from "../naviagtion";

export const QUIZ_TITLE_1: QuizTitleProps = {
    progress: 0.8,
    source: require("../../assets/images/mascot_logo.png"),
    description: "Ba mẹ đọc các bộ phận cơ thể và để bé chỉ trên cơ thể mình. Mỗi khi trẻ chỉ đúng các bộ phận trên cơ thể, hãy yêu cầu trẻ nhắc lại từ đó theo mình.",
    btnText: "Tiếp Tục",
    time: false,
    next: ROUTES.FLOW2_Q1
};

export const QUIZ_PAUSE: QuizTitleProps = {
    source: require("../../assets/images/mascot_logo.png"),
    time: true,
    next: ROUTES.FLOW2_TITLE2
};

export const QUIZ_TITLE_2: QuizTitleProps = {
    progress: 1.0,
    source: require("../../assets/images/mascot_logo.png"),
    description: "Ba mẹ bày các thẻ học trên bàn, yêu cầu trẻ chỉ đúng tên bộ phận cơ thể khi đọc. Mỗi khi trẻ chỉ đúng thẻ, hãy yêu cầu trẻ nhắc lại từ đó theo mình.",
    btnText: "Tiếp Tục",
    time: false,
    next: ROUTES.FLOW2_Q2
};