<template>
    <div class="main">
            
                    <div class="main__modal">
                        <div class="modal__inner">
                            <i class="fas fa-times" @click="closemodal()"></i>
                            <div class="modal__inner_header">
                                <div class="modal__loader" v-if="loader">
                                    <img src="../assets/images/loader.gif" alt="">
                                </div>
                                <p class="inner__success">{{this.success}}</p>
                                <p class="inner__text inner__header">Оставьте ваши данные</p>
                                <p class="inner__text">для того, чтобы записаться на курс</p>
                              
                            </div>
                            <div>
                                
                            <p class="error">{{this.errors.name}}</p>
                            <p class="label">Имя</p>
                            <input class="inner__input" type="text"  @change ="checkname()"  placeholder="Введите имя" v-model="name">
                            
                            
                            <p class="error">{{this.errors.phone}}</p>
                            <p class="label">Телефон</p>
                            <!-- <vue-tel-input v-model="phone" placeholder="" @change ="checkphone()"  enabledCountryCode="true" defaultCountry='Kazakhstan' class="modal__phone"></vue-tel-input>
                             -->
                            <input class="inner__input" @change ="checkphone()"  type="text" placeholder="Введите телефон" v-model="phone">
                                    
                            
                            <p class="error">{{this.errors.type}}</p>
                            <p class="label">Тип курса</p>
                            <input type="text" @change="checktype()" class="inner__input" v-model="type">
                            

                            <p class="error">{{this.errors.email}}</p>
                            <p class="label">Email</p>
                            <input type="email"  @change="checkemail()"  class="inner__input" v-model="email" placeholder="Введите электронную почту">
                            <button class="button" @click="sendData"><p class="button__text">Записаться</p></button>
                            </div>
 
                        </div>
                    </div>
            <p class="main__title">Наши  преимущества</p>
                    <div class="courses__list">
                        
                        <div class="courses__list_item">
                              <div class="courses__list_top top__text">
                                <!-- <p  class="top__text-title">Улучшение разговорных навыков</p> -->
                                <p  class="top__text-type">Процентная ставка и коммиссия 0%</p>
                                <!-- <p  class="top__text-level"><i class="fas fa-layer-group"></i>от начального до продвинутого уровня; </p>
                                <p  class="top__text-duration"><i class="fas fa-calendar-alt"></i> 3-4 месяца</p>
                                <p  class="top__text-time"><i class="fas fa-clock"></i>3 раза в неделю по 90 мин</p> -->

                                <div class="courses__circle">
                                    <div class="courses__checked">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <i class="fas fa-percent courses__icon" ></i>
                                </div>
                            </div>
                            <!-- <div class="courses__list_bottom">
                                <button @click="openmodals('Курсы базового английского')"><p>Записаться</p></button>
                            </div> -->
                        </div>
                        <div class="courses__list_item">
                            <div class="courses__list_top top__text">
                                <!-- <p class="top__text-title">Навыки делового обшения</p> -->
                                <p class="top__text-type">Минимальный пакет документов</p>
                                <div class="courses__circle">
                                    <div class="courses__checked">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <i class="fas fa-layer-group courses__icon"></i>
                                </div>
                                <!-- <p class="top__text-level"><i class="fas fa-layer-group"></i>Средний и продвинутый уровень</p> -->
                                <!-- <p class="top__text-duration"><i class="far fa-calendar-alt"></i>4 недели</p>
                                <p class="top__text-time"><i class="far fa-clock"></i>4 раза в неделю по 90 мин.</p> -->
                                <!-- <p class="top__text-cost"><i class="fas fa-dollar-sign"></i>40 000 тг</p> -->
                            </div>
                            <!-- <div class="courses__list_bottom">
                                <button  @click="openmodals('Интенсивные курсы по подготовке к международному тесту IELTS')"><p>Записаться</p></button>
                            </div> -->
                        </div>
                        <div class="courses__list_item">
                            <div class="courses__list_top top__text">
                                <!-- <p  class="top__text-title">Улучшение разговорных навыков</p> -->
                                <p  class="top__text-type">Льготы инвалидам и неполным многодетным семьям</p>
                                <div class="courses__circle">
                                    <div class="courses__checked">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <i class="fas fa-user-shield courses__icon"></i>
                                </div>
                                <!-- <p  class="top__text-level"><i     class="fas fa-layer-group"></i>Начальный,средний и продвинутый уровень</p> -->
                                <!-- <p  class="top__text-duration"><i  class="fas fa-calendar-alt"></i>2 месяца</p>
                                <p  class="top__text-time"><i      class="fas fa-clock"></i>3 раза в неделю по 90 мин</p> -->
                                <!-- <p  class="top__text-cost"><i      class="fas fa-dollar-sign"></i>40 000 тг</p> -->
                            </div>
                            <!-- <div class="courses__list_bottom">
                                <button @click="openmodals('Курсы по подготовке к IELTS')"><p>Записаться</p></button>
                            </div> -->
                        </div>
                        <div class="courses__list_item">
                             <div class="courses__list_top top__text">
                                <!-- <p  class="top__text-title">Улучшение разговорных навыков</p> -->
                                <p  class="top__text-type">Кредитная история не рассматривается</p>
                                <div class="courses__circle">
                                    <div class="courses__checked">
                                        <i class="fas fa-check "></i>
                                    </div>
                                    <i class="fas fa-history courses__icon"></i>
                                </div>
                                <!-- <p  class="top__text-level"><i     class="fas fa-layer-group"></i>Начальный,средний и продвинутый уровень</p> -->
                                <!-- <p  class="top__text-duration"><i  class="fas fa-calendar-alt"></i> 3 месяца</p>
                                <p  class="top__text-time"><i      class="fas fa-clock"></i>3 раза в неделю по 90 мин</p> -->
                                <!-- <p  class="top__text-cost"><i      class="fas fa-dollar-sign"></i>40 000 тг</p> -->
                            </div>
                            <!-- <div class="courses__list_bottom">
                                <button  @click="openmodals('Курсы медицинского английского')"><p>Записаться</p></button>
                            </div> -->
                        </div>
                    </div>
       
    </div>
</template>
<script>
import axios from 'axios';

    export default {
        data() {
            return {
                show: false,
                phone: '',
                name: '',
                type: '',
                email: '',
                success: '',
                loader: false,
                errors: {
                    name: '',
                    phone: '',
                    email: '',
                    type: ''
                }
            };
        },
        methods: {
            openmodals(text) {
                this.type = text;
                var modal = document.querySelector('.main__modal');
                modal.style.display = "flex";
                
            },
            closemodal() {
                this.name = "";
                this.phone = "";
                this.type = "";
                this.email = "";
                this.success = "";
                this.loader = false;
                var modal = document.querySelector('.main__modal');
                modal.style.display = "none";
            },
            validationEmail(email) {
                const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                return expression.test(String(email).toLowerCase());
            },
            checkname() {
                  this.errors.name = "";
            },
            checktype() {
                  this.errors.type = "";
            },
            checkemail() {
                  this.errors.email = "";
            },
            checkphone() {
                  this.errors.phone = "";
            },
            sendData() {
                    
                    if(this.name=='') {
                        this.errors.name = "Заполните поле имя";
                    }
                    else if(this.phone=='') {
                        this.errors.phone = "Введите номер телефона";
                    }
                    else if(this.type=='') {
                        this.errors.type  = "Заполните  поле вопрос";
                    }
                    else if(this.email=='') {    
                        this.errors.email = "Заполните  поле email";
                    }
                    else if(!this.validationEmail(this.email)) { 
                        this.errors.email = "Неправильный адрес эл. почты";
                    }
                    else {
                         var param = {
                            name: this.name,
                            phone: this.phone,
                            type: this.type,
                            email: this.email
                         };
                    this.loader = true;
                    axios({
                        method: 'post',
                        url: 'https://latinapi.herokuapp.com/v2/api/akeac_insert',
                        data: param
                    }).then((response) => {
                        if(response.data.message == "Ok") {
                            this.loader = false;
                            this.success = "Ваша заявка отправлена, ожидайте ответа мы вам позвоним";
                        }
                    });
                    }

        }
    }
    }
</script>
<style  scoped>
    .main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .main__title {
        align-self: center;
        font-weight: bold;
        font-size: 20px;
        margin-left: 45px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .feedback {
         background-color: white;
    }


    .courses__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-left: 20px;
        margin-bottom: 100px;
    }

    .courses__list_item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        width: 190px;
        padding: 20px;
        margin-right: 10px;
        margin-bottom: 40px;
     
        height: 350px;
        -webkit-box-shadow: 1px 1px 1px 1px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    1px 1px 1px 1px #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         1px 1px 1px 1px #ccc; 
    }
   
    .courses__list_top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        height: 280px;

    }
    .courses__list_bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 200px;
    }
    .courses__list_bottom button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--main-a-hover-color);
        background-color: var(--main-a-hover-color);
        padding: 12px;
        width: 120px;
        color: white;
        border-radius: 5px;
    }
    .courses__list_bottom  button p {
         color: white;
         margin-bottom: 0;
         font-size: 16px;
    }
    .courses__list_bottom p {
        color: var(--main-project-color);
    }
    .courses__list img {
         align-self: center;
         width: 200px;
         height: 140px;
         margin-bottom: 10px;
     }
    .courses__list p {
        margin-bottom: 10px;
    }
    /* .courses__list i {
        margin-right: 6px;
    } */
    .top__text-title {
        color: #ccc;
        font-size: 12px;
        
    
    }
    .top__text-type {
        color: black;
        font-size: 16px;
        font-weight: bold;
    }
    
    .main__modal {
        display: flex;
        justify-content: center;
        flex-direction: row;
        z-index: 999;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: none;
        background:linear-gradient( rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.5)100%), url("https://images.unsplash.com/photo-1509095660908-d9b1e7ffec62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    }

    .modal__inner {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 40px;
        width: 380px;
        height: 600px;
    }
    .inner__input {
        width: 320px;
        margin-bottom: 15px;
        padding: 14px;
        border-radius: 5px;
        border: 1px solid #ccc;
        outline: none;
    }
    .modal__inner  input{
        font-size: 16px;
    }   
    .modal__inner i {
         align-self: flex-end;
         font-size: 35px;
         margin-right: 20px;
    }
    
    .modal__inner_header {
        align-self: flex-start;
        margin-bottom: 20px;
    }

    .modal__inner button {
        width: 350px;
        border-radius: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #b30000;
        border: 1px solid #b30000; 
        outline: none; 
    }
    .modal__inner button:hover {
         background-color: var(--main-a-hover-color);
    }
    .modal__phone {
        padding: 10px;
        font-size: 14px;
        width: 330px;
        margin-bottom: 15px;
    }
   
    .label {
        align-self: flex-start;
        
        margin-bottom: 5px;
        font-size: 16px;
    }

    

    .button__text {
        font-size: 16px;
        color: white;
    }

    .inner__text {
        margin-bottom:5px;
    }
    .modal__loader {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-left: 60px;
    }
    .modal__loader img{
        width: 150px;
        height: 110px;
    }
    .inner__header {
        font-size: 25px;
        font-weight: 600;
    }
    .inner__title {
      
        font-size: 14px;
    }
    .inner__success {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        color:#44d494;
    }
    
    .courses__circle {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
        background-color: var(--main-a-hover-color);

        width: 200px;
        height: 200px;
        border-radius: 100px;
        position: relative;
    }
    .courses__circle .courses__checked {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: var(--main-project-color);
        position: absolute;
        right: 10px;
        top: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .courses__checked i {
        font-size: 15px;
    }

    .courses__circle .courses__icon {
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 40px;
    }


    @media screen and (max-width: 600px) {
        .courses__list {
            margin: 0;
            width: 100%;
            flex-direction: column;
            align-items: center;
        }
        .courses__list_item {
            width: 270px;
            margin-bottom: 20px;
            align-items: flex-start;
            margin-right: 0;
            margin-bottom: 0;
            margin-top: 20px;
        }
      
        .main__title {
            display: none;
        }
        .modal__phone {
            width: 290px;
        }
        .modal__inner button {
           width: 310px;
        }
        .inner__input {
            width: 280px;
        }
      
    }
    @media screen and (max-width: 330px) {
        .courses__list_item {
            width: 240px;
        }
        .inner__header {
            font-size: 20px;
           
        }
        .inner__text {
            font-size: 14px;
        }
        .modal__inner {
            justify-content: flex-start;
            padding-top: 0;
          
            width: 240px;
        }
        .modal__inner i {
            font-size: 22px;
            margin-right: 0;
           

        }
        .modal__inner p {
            align-self: flex-start;
        }
        .modal__phone {
            width: 250px;
        }
        .modal__inner button {
           width: 270px;
          
        }
        .inner__input {
            width: 240px;
        }
    }

   

</style>