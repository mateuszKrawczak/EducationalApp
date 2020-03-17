import { Category } from './category';
import { Level } from './level';

export interface Question {
    question_id: string,
    question: string,
    answer_0: string,
    answer_1: string,
    answer_2: string,
    answer_3: string,
    correct: number,
    category: Category,
    level: Level
}
