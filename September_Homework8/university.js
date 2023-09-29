class UniversityMember {
    constructor (name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = 24;
    }

    info() {
        return `name - ${this.name} | age - ${this.age} | role - ${this.role} | energy - ${this.energy}`;
    }
}

class University {
    constructor () {
        this.teachers = [];
        this.students = [];
    }

    addMember(member) {
        if (member instanceof Teacher) {
            this.teachers.push(member);
            return 'Teacher added';
        }
        
        if (member instanceof Student) {
            this.students.push(member);
            return 'Student added';
        }

        throw new Error('Invalid member type');
    }

    removeMember(member) {
        const memberRole = (member instanceof Teacher || member instanceof Student) ? member.role + 's': null;

         if (memberRole) {
            for (let memberIndex = this[memberRole].indexOf(member); memberIndex < this[memberRole].length; ++ memberIndex)
                this[memberRole][memberIndex] = this[memberRole][memberIndex + 1];
            
            this[memberRole].length -= 1;
         } else {
            throw new Error('Invalid member type');
         }
    }

    startLesson() {
        for (const teacher of this.teachers){
            if (teacher.energy > 5)
                teacher.energy -= 5;
        }

        for (const student of this.students){
            if (student.energy > 2)
                student.energy -= 2;
        }
    }
}

class Teacher extends UniversityMember { 
    constructor (name, age) {
        super(name, age, 'teacher');
    }
}

class Student extends UniversityMember {
    constructor (name, age) {
        super(name, age, 'student');
    }
}
