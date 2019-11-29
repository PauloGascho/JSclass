class Pessoa {

    constructor(first, last, age, gender, interests) {
        this.nome = {
          first,
          last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    get subject() {
        return this._subject;
      }

    set subject(newSubject) {
        this._subject = newSubject;
      }
}