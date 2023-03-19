import { Qanswer } from "./qanswer";
import { Question } from "./question";

export interface FiQuestion {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswer: Qanswer[],
    qinfo: string
}
