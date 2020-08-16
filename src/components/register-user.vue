<template>
<div class="register">


    <form class="register" @submit.prevent="onSubmit">

        <div class="register__inner">

            <div>
                <p>Фамилия</p>
                <input type="text" v-model="register_user.surname" required>
            </div>
            <div>
                <p>Имя</p>
                <input type="text" v-model="register_user.name" required>
            </div>

            <div>
                <p>Отчества</p>
                <input type="text" v-model="register_user.patronymic" required>
            </div>

            <div>
                <p>ИИН</p>
                <input type="text" v-model="register_user.iin" required>
            </div>
            <div>
                <p>Номер документа</p>
                <input type="text" v-model="register_user.document_number" required>
            </div>
            <div>
                <p>Дата выдачи (удаст.)</p>
                <input type="date" v-model="register_user.date_of_given" required>
            </div>
            <div>
                <p>Дата окончаний (удаст.)</p>
                <input type="date" v-model="register_user.end_of_given" required>
            </div>

            <div>
                <p>Дата договора</p>
                <input type="date" v-model="register_user.date_agreement" required>
            </div>
            
            <div>
                <p>Телефон</p>
                <input type="text" v-model="register_user.phone" required>
            </div>

            <div>
                <p>Тип соглашения</p>

                <select v-model="register_user.type_agreement" id="cars" required>
                    <option value="1">Первый соглашения</option>
                    <option value="2">По 30%</option>
                    <option value="3">По 50%</option>
                </select>
            </div>

            <div>
                <p>Сумма который должен собрать</p>

                
                <input type="text" >
            </div>

        </div>


   
        <button class="register__button" type="submit">
            Создать
        </button>
       
    </form>  
       
    
</div>
    
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
                    date_agreement: '',
                 
                }
            };
        },
        methods: {
   
          
            onSubmit() {
             axios.post(process.env.VUE_APP_API+process.env.VUE_APP_API_VERSION+'user/paysender',
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
                    date_agreement: this.register_user.date_agreement,
                    warning: 0,
                    comment: "nothing"
                      
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
            margin-bottom: 20px;
            background-color:  var(--main-project-color);
            color: white;
            outline: none;
            border: none;
    }
    .register__button:hover {
        background-color: var(--main-project-color);
    }

   
  


  

     
</style>