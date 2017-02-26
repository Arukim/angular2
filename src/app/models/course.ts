

export class Course {
    constructor(
        public id: string,
        public name: string,
        public created: Date,
        public description: string,
        public duration: number,
        public authors: string[]
    ){}
}
