<template>
    <form class="register" @submit.prevent="onSubmit">

        <div class="register__inner">

            <div>
                <p>Фамилия</p>
                <input type="text" v-model="register_user.surname">
            </div>
            <div>
                <p>Имя</p>
                <input type="text" v-model="register_user.name">
            </div>

            <div>
                <p>Отчества</p>
                <input type="text" v-model="register_user.patronymic">
            </div>

            <div>
                <p>ИИН</p>
                <input type="text" v-model="register_user.iin">
            </div>
            <div>
                <p>Номер документа</p>
                <input type="text" v-model="register_user.document_number">
            </div>
            <div>
                <p>Дата выдачи (удаст.)</p>
                <input type="date" v-model="register_user.date_of_given">
            </div>
            <div>
                <p>Дата окончаний (удаст.)</p>
                <input type="date" v-model="register_user.end_of_given">
            </div>

            <div>
                <p>Дата договора</p>
                <input type="date" v-model="register_user.date_agreement">
            </div>
            
            <div>
                <p>Телефон</p>
                <input type="text" v-model="register_user.phone">
            </div>
            <div>
                <p>Тип соглашения</p>

                <select v-model="register_user.type_agreement" id="cars">
                    <option value="1">Первый соглашения</option>
                    <option value="2">Второй соглашения</option>
                    <option value="3">Третий соглашения</option>
                    <option value="4">Четвертый соглашения</option>
                </select>
            </div>

        </div>

        <button class="register__button" type="submit">
            Создать
        </button>
           
    </form>  
</template>

<script>

import axios from 'axios';
    export default {
        data() {
            return {
                show: false,
                phone: '',
                errors: [],
                name: '',
                type: '',
                email: '',
                
                register_user: {
                    name: '',
                    surname: '',
                    patronymic: '',
                    document_number: '',
                    date_of_given: '',
                    end_of_given: '',
                    phone: '',
                    iin: '',
                    type_agreement: '',
                    date_agreement: ''

                }
            };
        },
        methods: {
            onSubmit() {
             axios.post('http://127.0.0.1:8000/api/v1/user/paysender',
                {
                    name: this.register_user.name,
                    surname: this.register_user.surname,
                    patronymic: this.register_user.patronymic,
                    document_number: this.register_user.document_number,
                    date_of_given: this.register_user.date_of_given,
                    end_of_given: this.register_user.end_of_given,
                    phone: this.register_user.phone,
                    iin: this.register_user.iin,
                    type_agreement: this.register_user.type_agreement,
                    date_agreement: this.register_user.date_agreement
                      
                })
                .then(response => {
                    this.$alert(response.data.success);
                    this.$router.push('admin-only');
                })
                .catch(error => {
                    if(error.response.data.error.iin.length!=0) {
                        this.$alert("Пользователь существует");
                    }
                });
               
    },
        }
     
    }
</script>
<style lang="scss" scoped>
    .register {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
    }
    .register__inner {
        display: flex;
        flex-wrap: wrap;
        padding: 50px;

        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            p {
                color:    var(--main-project-color);
                font-size: 16px;
                margin-bottom: 5px;
            }
            input {
                margin-right: 10px;
                width: 180px;
                padding: 10px;
                border: 1px solid var(--main-project-color);
                background-color: transparent;
            }
            select {
                margin-right: 10px;
                width: 200px;
                padding: 10px;
                border: 1px solid var(--main-project-color);
                background-color: transparent;
            }
        }
       
    } 

    .register__button {
           
            width: 180px;
            padding: 10px;
            background-color:  var(--main-project-color);
            color: white;
            outline: none;
            border: none;
    }
    .register__button:hover {
        background-color: var(--main-project-color);
    }
  


  

     
</style>