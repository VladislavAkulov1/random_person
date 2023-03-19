const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Акулов",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Екатерина",
            "id_3": "Эвелина",
            "id_4": "Анастасия",
            "id_5": "Софья",
            "id_6": "Алла",
            "id_7": "Зинаида",
            "id_8": "Елизавета",
            "id_9": "Майя",
            "id_10": "Елена"
        }
    }` ,
    patronymicFemaleJson: `{  
        "count": 10,
        "list": {
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриовна",
            "id_6": "Никитовна",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    patronymiMaleJson: `{  
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Хусравович",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    patronymicFemaleJson: `{  
        "count": 10,
        "list": {
            "id_1": "Александровна",
            "id_2": "Максимововна",
            "id_3": "Иванововна",
            "id_4": "Артемовна",
            "id_5": "Хусравовна",
            "id_6": "Никитовна",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    workFemaleJson: `{  
        "count": 10,
        "list": {
            "id_1": "Врач",
            "id_2": "Продавщица",
            "id_3": "Бухгалтер",
            "id_4": "Стилист",
            "id_5": "Маркетолог",
            "id_6": "Косметолог",
            "id_7": "Педагог",
            "id_8": "Стоматолог",
            "id_9": "Финансист",
            "id_10": "Флорист"
        }
    }`,
    workMaleJson: `{  
        "count": 10,
        "list": {
            "id_1": "Врач",
            "id_2": "Продавец",
            "id_3": "Бухгалтер",
            "id_4": "Солдат",
            "id_5": "Маркетолог",
            "id_6": "Полицейский",
            "id_7": "Педагог",
            "id_8": "Стоматолог",
            "id_9": "Финансист",
            "id_10": "Шахтер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        var gender = this.randomIntNumber();
        return gender === this.randomIntNumber() ? this.GENDER_FEMALE : this.GENDER_MALE;
     },

     randomFirstName: function() {
        if(this.person.gender === this.GENDER_MALE) {
        return this.randomValue(this.firstNameMaleJson);}
        else {
            return this.randomValue(this.firstNameFemaleJson);}
        }

    ,
     randomSurname: function() {
        if(this.person.gender === this.GENDER_MALE){
        return this.randomValue(this.surnameJson);}
        else {
            return this.randomValue(this.surnameJson)+'a';}

        }

    ,
    randomPatronymic: function() {
        if(this.person.gender === this.GENDER_MALE){
            return this.randomValue(this.patronymiMaleJson);}
         else {
            return this.randomValue(this.patronymicFemaleJson);}
    }
    
    ,
    randomDate: function() {
        return Math.floor(Math.random() * (2000 - 1960) ) + 1960;}
     
    ,
    randomWork: function() {
        if(this.person.gender === this.GENDER_MALE){
            return this.randomValue(this.workMaleJson);}
         else {
            return this.randomValue(this.workFemaleJson);}
    }
    ,

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomDate();
        this.person.work = this.randomWork();
        return this.person;
    }
};
