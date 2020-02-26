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
                            <p class="label">Имя</p>
                            <input class="inner__input" type="text" placeholder="Введите имя" v-model="name">

                            <p class="label">Телефон</p>
                            <vue-tel-input v-model="phone" placeholder="" enabledCountryCode="true" defaultCountry='Kazakhstan' class="modal__phone"></vue-tel-input>
                            
                            <p class="label">Тип курса</p>
                            <input type="text"  class="inner__input" v-model="type">
                            <p class="label">Email</p>
                            <input type="email"  class="inner__input" v-model="email" placeholder="Введите электронную почту">
                            <button class="button" @click="sendData"><p class="button__text">Записаться</p></button>
                            </div>
 
                        </div>
                    </div>
            <p class="main__title">Наши курсы</p>
                    <div class="courses__list">
                        
                        <div class="courses__list_item">
                              <div class="courses__list_top top__text">
                                <!-- <p  class="top__text-title">Улучшение разговорных навыков</p> -->
                                <p  class="top__text-type">Курсы базового английского</p>
                                <p  class="top__text-level"><i class="fas fa-layer-group"></i>от начального до продвинутого уровня; </p>
                                <p  class="top__text-duration"><i class="fas fa-calendar-alt"></i> 3-4 месяца</p>
                                <p  class="top__text-time"><i class="fas fa-clock"></i>3 раза в неделю по 90 мин</p>
                            </div>
                            <div class="courses__list_bottom">
                                <button @click="openmodals('Курсы базового английского')"><p>Записаться</p></button>
                            </div>
                        </div>
                        <div class="courses__list_item">
                            <div class="courses__list_top top__text">
                                <!-- <p class="top__text-title">Навыки делового обшения</p> -->
                                <p class="top__text-type">Интенсивные курсы по подготовке к международному тесту IELTS </p>
                                <!-- <p class="top__text-level"><i class="fas fa-layer-group"></i>Средний и продвинутый уровень</p> -->
                                <p class="top__text-duration"><i class="far fa-calendar-alt"></i>4 недели</p>
                                <p class="top__text-time"><i class="far fa-clock"></i>4 раза в неделю по 90 мин.</p>
                                <!-- <p class="top__text-cost"><i class="fas fa-dollar-sign"></i>40 000 тг</p> -->
                            </div>
                            <div class="courses__list_bottom">
                                <button  @click="openmodals('Интенсивные курсы по подготовке к международному тесту IELTS')"><p>Записаться</p></button>
                            </div>
                        </div>
                        <div class="courses__list_item">
                            <div class="courses__list_top top__text">
                                <!-- <p  class="top__text-title">Улучшение разговорных навыков</p> -->
                                <p  class="top__text-type">Курсы по подготовке к IELTS </p>
                                <!-- <p  class="top__text-level"><i     class="fas fa-layer-group"></i>Начальный,средний и продвинутый уровень</p> -->
                                <p  class="top__text-duration"><i  class="fas fa-calendar-alt"></i>2 месяца</p>
                                <p  class="top__text-time"><i      class="fas fa-clock"></i>3 раза в неделю по 90 мин</p>
                                <!-- <p  class="top__text-cost"><i      class="fas fa-dollar-sign"></i>40 000 тг</p> -->
                            </div>
                            <div class="courses__list_bottom">
                                <button @click="openmodals('Курсы по подготовке к IELTS')"><p>Записаться</p></button>
                            </div>
                        </div>
                        <div class="courses__list_item">
                             <div class="courses__list_top top__text">
                                <!-- <p  class="top__text-title">Улучшение разговорных навыков</p> -->
                                <p  class="top__text-type">Курсы медицинского английского </p>
                                <!-- <p  class="top__text-level"><i     class="fas fa-layer-group"></i>Начальный,средний и продвинутый уровень</p> -->
                                <p  class="top__text-duration"><i  class="fas fa-calendar-alt"></i> 3 месяца</p>
                                <p  class="top__text-time"><i      class="fas fa-clock"></i>3 раза в неделю по 90 мин</p>
                                <!-- <p  class="top__text-cost"><i      class="fas fa-dollar-sign"></i>40 000 тг</p> -->
                            </div>
                            <div class="courses__list_bottom">
                                <button  @click="openmodals('Курсы медицинского английского')"><p>Записаться</p></button>
                            </div>
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
                errors: [],
                name: '',
                type: '',
                email: '',
                success: '',
                loader: false
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
            sendData() {
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
        align-self: flex-start;
        font-size: 25px;
        margin-left: 45px;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .feedback {
         background-color: white;
    }


    .courses__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: 20px;
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
     
        height: 350px;
        -webkit-box-shadow: 1px 1px 1px 1px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    1px 1px 1px 1px #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         1px 1px 1px 1px #ccc; 
    }
   
    .courses__list_top {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
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
    .courses__list i {
        margin-right: 6px;
    }
    .top__text-title {
        color: #ccc;
        font-size: 12px;
        
    
    }
    .top__text-type {
        color: black;
        font-size: 20px;
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