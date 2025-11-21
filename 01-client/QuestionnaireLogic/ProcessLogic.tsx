import { QuizMap } from "@/constants/QuizMap";

const answers: Record<string, any> = {};

export default function ProcessAnswer(questionId : string, userAnswer : any) {
    const quiz = QuizMap[questionId];
    if(!quiz) throw new Error (`Invalid question ID: ${questionId}`)

    switch(quiz.type){
        case "single" :{ 
            answers[questionId] = userAnswer;
            break;
        }
        case "multiple" :{ 
            if (!answers[questionId]) answers[questionId] = [];

            if (!answers[questionId].includes(userAnswer)) {
                answers[questionId].push(userAnswer); 
            } 
            //else {
            // answers[questionId] = answers[questionId].filter(v => v !== value);
            break;
        }
    }
    console.log(answers)
}