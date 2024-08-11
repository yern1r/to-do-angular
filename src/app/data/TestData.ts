import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData{

    static categories: Category[] = [
        {id: 1, title: 'Work'},
        {id: 2, title: 'University'},
        {id: 3, title: 'Health'},
        {id: 4, title: 'Hobby'},
        {id: 5, title: 'Relax'},
        {id: 6, title: 'Finance'}
    ];

    static priorities: Priority[] = [
        {id: 1, title:'Lowest', color:'pink'},
        {id: 2, title:'Low', color:'green'},
        {id: 3, title:'Moderate', color:'yellow'},
        {id: 4, title:'High', color:'orange'},
        {id: 5, title:'Very high', color:'red'},
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Chest Day',
            priority: TestData.priorities[3],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2024-03-16')
        },
        {
            id: 2,
            title: 'Lab work',
            priority: TestData.priorities[2],
            completed: false,
        },
        {
            id: 3,
            title: 'Rent Day',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[5],
            date: new Date('2024-03-17')
        },
        {
            id: 4,
            title: 'Sleep',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2024-03-15')
        },
        {
            id: 5,
            title: 'Play football',
            completed: false,
            category: TestData.categories[3],
            date: new Date('2024-03-14')
        },
        {
            id: 6,
            title: 'Coding',
            completed: false,
            category: TestData.categories[0],
            date: new Date('2024-03-13')
        },
        {
            id: 7,
            title: 'Task 7',
            completed: false,
            category: TestData.categories[1],
            date: new Date('2024-03-18')
        },
        {
            id: 8,
            title: 'Task 8',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[2],
            date: new Date('2024-03-19')
        },
        {
            id: 9,
            title: 'Task 9',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3],
            date: new Date('2024-03-20')
        },
        {
            id: 10,
            title: 'Task 10',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2024-03-21')
        },
        {
            id: 11,
            title: 'Task 11',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2024-03-22')
        },
        // Add more tasks similarly
        {
            id: 36,
            title: 'Task 36',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[2],
            date: new Date('2024-04-05')
        }
    ]
}