import { Category } from './category';
import { Level } from './level';
import { User } from './user';

export interface Score {
    points:number;
    good_answers:number;
    wrong_answers:number;
    user:User;
    category:Category;
    level:Level;
}