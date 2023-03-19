import { Qanswer } from "./qanswer";

export interface ScQuestion {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswer: Qanswer[],
    qcorrect: string,
    qinfo: string
}
