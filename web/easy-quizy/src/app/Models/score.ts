import { Category } from './category';
import { Level } from './level';

export interface Score {
    points:number;
    good_answers:number;
    wrong_answers:number;
    category:Category;
    level:Level;
}