const Student = function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype.name = function () {
  return `${this.firstName} ${this.lastName}`;
};


Student.prototype.enroll = function (course) {

  if (!this.courses.includes(course)) {
    for (var i = 0; i < this.courses.length; i++) {
      if (this.courses[i].conflictsWith(course)) {
        return;
      }
    }
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function () {
  let departmentLoad = {};
  for (var i = 0; i < this.courses.length; i++) {
    if (departmentLoad[this.courses[i].department]){
      departmentLoad[this.courses[i].department] += this.courses[i].credits;
    } else {
      departmentLoad[this.courses[i].department] = this.courses[i].credits;
    }
  }
  return departmentLoad;
};

const Course = function Course(department, credits, days, timeBlock) {
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.timeBlock = timeBlock;
  this.students = [];
};

Course.prototype.conflictsWith = function conflictsWith(course) {
  if (course.timeBlock != this.timeBlock) {
    return false;
  }

  for (var i = 0; i < course.days.length; i++) {
    if (this.days.includes(course.days[i])) {
      return true;
    }
  }
  return false;
};

const george = new Student('george', 'Goergy');

const physics = new Course('science', 10, ['Mon', 'Tue', 'Wed'], 2);
const bio = new Course('science', 10, ['Mon', 'Tue', 'Wed'], 2);
const gym = new Course('gym', 10, ['Mon', 'Tue', 'Wed'], 3);
const coolCoding = new Course('coolCoding', 10, ['Mon', 'Tue', 'Wed'], 5);

george.enroll(physics);
george.enroll(bio);
george.enroll(gym);
george.enroll(coolCoding);

console.log(george.courseLoad());

console.log(physics.conflictsWith(bio));
