<template>
    <div class="content">
            <div class="sidebar">
                <div class="sidebar__head">
                    
                    <div class="sidebar__head_title">
                        <i class="fas fa-home sidebar__icon"></i>
                        <p>Поотребительский кооператив "I.F.F.Company"</p>
                        <i class="fas fa-times sidebar__closeicon"  @click="closemenu"></i>
                    </div>
                    <div class="sidebar__social">
                            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://wa.me/" target="_blank"><i class="fab fa-whatsapp"></i></a>
                            <a href="https://t.me" target="_blank"><i  class="fas fa-paper-plane"></i></a>
                    </div>
                </div>
                <div class="sidebar__menu_mobile">
                    <hr>
                    <div @click="closemenu" ><router-link  to="/" class="routerLink"><i class="fas fa-graduation-cap"></i>Наши  преимущества</router-link></div>
                    <div @click="closemenu"><router-link   to="/help" class="routerLink"><i class="fab fa-accusoft"></i>О нас</router-link></div>
                    <div @click="closemenu"><router-link   to="/news" class="routerLink"><i class="far fa-newspaper"></i>Войти в личный кабинет</router-link></div>
                    <div @click="closemenu"><router-link   to="/admin-only" class="routerLink"><i class="far fa-newspaper"></i>Пользователи</router-link></div>
                    <div @click="closemenu"><router-link   to="/news" class="routerLink"><i class="far fa-newspaper"></i>Новости</router-link></div>
                    <!-- <router-link class="routerLink"><i class="fas fa-info-circle"></i>О Компании</router-link> -->
                    <div @click="closemenu"><router-link  to="/contacts" class="routerLink"><i class="fas fa-paper-plane"></i>Контакты</router-link></div>
                  
                    <hr>
                </div>
                <div class="sidebar__menu">
                    <hr>
                    
                        <div><i class="fas fa-graduation-cap"></i><router-link  to="/" class="routerLink">Наши  преимущества</router-link></div>
                        <div><i class="fab fa-accusoft"></i><router-link   to="/help" class="routerLink">О нас</router-link></div>
                        <div><i class="fas fa-user-circle"></i><router-link   to="/login" class="routerLink">Войти в личный кабинет</router-link></div>
                        <div  v-if="role==1 || role==2"><i class="far fa-address-card"></i><router-link   to="/admin-only" class="routerLink">Cписок пайщиков</router-link></div>
                        <div  v-if="role==5 "><i class="far fa-address-card"></i><router-link   to="/user-only" class="routerLink">Личный кабинет</router-link></div>
                        <div><i class="far fa-newspaper"></i><router-link   to="/news" class="routerLink">Новости</router-link></div>
                        <div><i class="far fa-comment-dots"></i><router-link   to="/feedback" class="routerLink">Отзывы пайщиков</router-link></div>
                        <!-- <router-link class="routerLink"><i class="fas fa-info-circle"></i>О Компании</router-link> -->
                        <div><i class="fas fa-paper-plane"></i><router-link  to="/contacts" class="routerLink">Контакты</router-link></div>
                    
                    <hr>
                </div>
                <div class="sidebar__contacts">
                    <!-- <p>Актобе</p> -->
                    <div><a href="tel:87773620777"><i class="fas fa-phone-alt"></i><p>+7‒777 362 0777</p></a></div>
                    <div><i class="fas fa-map-marker-alt"></i><p>​101-й стрелковой бригады</p></div>
                </div>
                   
             </div>
             <div class="mainViewRouter">

                    <div class="mainViewRouter__hello">
                        
                        <i class="fas fa-bars fa-2x" @click="openmenu"></i>
                        
                        <div class="mainViewRouter__social">
                            <a href="https://www.instagram.com/akeac/" target="_blank"><i class="fab fa-instagram"><p>Instagram</p></i></a>
                            <a href="https://wa.me/77081164713/" target="_blank"><i class="fab fa-whatsapp"><p>Whatsapp</p></i></a>
                            <a href="https://t.me/ErlanDiana" target="_blank"><i  class="fas fa-paper-plane"><p>Telegram</p></i></a>
                        </div>
                        <button @click="openmodal()" id="btn">Заказать звонок</button>
                    </div>

                    <div class="modal">
                        <div class="modal__inner">
                            <i class="fas fa-times" @click="closemodal()"></i>
                            <div class="modal__inner_header">
                                <div class="modal__loader" v-if="loader">
                                    <img src="../assets/images/loader.gif" alt="">
                                </div>
                                <p class="inner__success">{{this.success}}</p>
                                <p class="inner__text inner__header">Зарегистрировать нового пользователя</p>
                              
                            </div>
                            <div>
                                    <p class="error">{{this.errors.name}}</p>
                                    <p class="label">Имя</p>
                                    <input class="inner__input" @change ="checkname()"  type="text" placeholder="Введите имя" v-model="name">
                                    
                                    <p class="error">{{this.errors.phone}}</p>
                                    <p class="label">Телефон</p>
                                    <!-- <vue-tel-input v-model="phone"  placeholder="" enabledCountryCode="true" defaultCountry='Kazakhstan' class="modal__phone"></vue-tel-input>
                                     -->
                                    <input class="inner__input" @change ="checkphone()"  type="text" placeholder="Введите телефон" v-model="phone">
                                    
                                    <p class="error">{{this.errors.type}}</p>
                                    <p class="label">Вопрос</p>
                                    <input type="text" @change="checktype()" class="inner__input" v-model="type">
                                    
                                    <p class="error">{{this.errors.email}}</p>
                                    <p class="label">Email</p>
                                    <input type="email" @change="checkemail()"  class="inner__input" v-model="email" placeholder="Введите электронную почту">
                                    <button class="button" @click="sendData"><p class="button__text">Записаться</p></button>
                            </div>
 
                        </div>
                    </div>
                   
                    <router-view></router-view>
                    <!-- <div class="footer">
                        <p>© 2020 ТОО "AAA"</p> -->
                        <!-- <i class="fab fa-instagram"></i> -->
                        <!-- https://www.instagram.com/encode.kz/ -->
<!--                         
                    </div> -->
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
                role: null,
                name: '',
                type: '',
                email: '',
                success: '',
                loader: false,
                slideindex: 0,
                errors: {
                    name: '',
                    phone: '',
                    email: '',
                    type: ''
                }
             
            };
        },
        methods: {
            btn() {
                this.show = true;  
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

                   
            },
            openmodal() {
                var modal = document.querySelector('.modal');
                modal.style.display = "flex";
            },
            closemodal() {
                this.name = "";
                this.phone = "";
                this.type = "";
                this.email = "";
                this.success = "";
                this.loader = false;
                var modal = document.querySelector('.modal');
                modal.style.display = "none";
            },
            openmenu() {
                var menu = document.querySelector('.sidebar');
                menu.style.transition = ".5s";
                menu.style.left = "-20px";
              
            },
            closemenu() {
                var menu = document.querySelector('.sidebar');
              
                menu.style.transition = ".5s";
                menu.style.left = "-320px";
            },
            get_roles() {
                axios.post('http://127.0.0.1:8000/api/v1/user/me',
               )
                .then(response => {
                    this.role = response.data.roles[0].id;
                })
                .catch(error => {
                   console.log(error);
                });
            }
           
        },
        mounted() {
            this.get_roles();
        },
        watch: {
            '$route'() {
                this.get_roles();
            }
        },
          
          
    }
</script>
<style scoped>

    .body {
        width: 100%;
    }
    a {
        text-decoration: none;
    }
    .content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .mainViewRouter {
        width: 100%;
        margin-left: 290px;
    }


  
    .mainViewRouter__head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 75%;
        height: 250px;
        background-image: url("../assets/images/newyork.png");
        background-repeat: no-repeat;
        background-blend-mode: saturation;
        background-size: cover;
        background-position: center;
        opacity: 3;
    }
    .mainViewRouter__head p{
        font-size: 25px;
        font-weight: 600;
        color: white;
        z-index: 3;
        margin-left: 50px;

        
    }
    .main img {
        width: 100%;
        
    }

    .sidebar {
        width: 250px;
        height: 95vh;
        z-index: 9;
        padding: 30px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        box-shadow: 0px 0px 35px rgba(74, 92, 184, 0.4);
        background-color: white;
    }
    .sidebar__social {
        display: none;
    }
    .sidebar__head {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 150px;
    }
    .sidebar__head_title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 220px;
    }
    .sidebar__head_title img {
            width: 60px;
            height: 60px;

    }
    
    .sidebar__head_title p {
        margin-left: 10px;
        color: var(--main-project-color);
        font-size: 18px;
        font-weight: 600;
    }
    
    .sidebar__icon  {
         font-size: 30px;
    }
    
   
    .sidebar__closeicon {
       
        display: none;
    }
    .sidebar__head div i {
        color: var(--main-project-color);
        margin-right: 5px;
    }
  
    .sidebar__head div:nth-child(2) p {
        margin-right: 5px;
    }
  
   .sidebar__menu_mobile {
       display: none;
   }
    .sidebar__menu div, .sidebar__menu_mobile div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;   
        width: 280px;

    }
    .sidebar__menu i,.sidebar__menu_mobile i {
          display: flex;
          width: 30px;  
          flex-direction: row;
          justify-content: center;
          color: var(--main-project-color);
     }
    .sidebar__menu p,.sidebar__menu_mobile p {
        color: var(--main-project-color);
        padding-bottom: 30px;
    }
    .sidebar__menu p:hover,.sidebar__menu_mobile p:hover {
        color: var(--main-a-hover-color);
        cursor: pointer;
    }
    .sidebar__menu a,.sidebar__menu_mobile a {
        color: var(--main-project-color);
        text-decoration: none;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 278px;
        vertical-align: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .sidebar__menu div:hover i, .sidebar__menu_mobile div:hover i {
        color: var(--main-a-hover-color);
    }
    .sidebar__menu a:hover,.sidebar__menu_mobile a:hover  {
        color: var(--main-a-hover-color);
        border-right: 3px solid var(--main-a-hover-color);
    }

    .sidebar__menu a:active,.sidebar__menu_mobile a:active {
          border-right: 3px solid var(--main-a-hover-color);
    }
   
    .sidebar__contacts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
    .sidebar__contacts div {
         width: 180px;
         display: flex;
         flex-direction: row;
         align-items: flex-start;
        
         margin-bottom: 10px;
    }
    .sidebar__contacts div a {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    .sidebar__contacts p {
        color: var(--main-project-color);
        margin-left: 10px;
        margin-bottom: 10px;  
    }
   
    .sidebar__contacts i {
        color: var(--main-project-color);
    }

    .mainViewRouter__hello {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        height: 120px;
    }
    .mainViewRouter__hello .fa-bars {
        display: none;
    }
    .mainViewRouter__hello   button { 
        width: 170px;
        padding-bottom: 10px;
        padding-top: 10px;
        margin-right: 20px;  
        background-color: var(--main-a-hover-color);   
        border-radius: 20px;
        border: none;
        outline: none;
        color: white;
        font-size: 14px;
        font-weight: bold;
        font-family: Lato;
    }
    .mainViewRouter__social i{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        color: var(--main-project-color);
    }
    .mainViewRouter__social p {
        color: var(--main-project-color);
    }
    .mainViewRouter__hello button:hover {
        border-radius: 20px;
        box-shadow: 0px 0px 20px rgba(97, 107, 153, 0.2);
    }
    .mainViewRouter__slogan {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 40px;
    }
    .mainViewRouter__slogan i{
        display: none;
    }

   
    .mainViewRouter__slogan p{
     
        font-size: 20px;
        color: var(--main-a-hover-color);
    }
    .mainViewRouter__social{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 280px;
        margin-left: 40px;
    }
    .mainViewRouter__hello img {
        width: 160px;
        height: 120px;
    }
    .mainViewRouter__hello i {
        margin-left: 10px;
    }
    .mainViewRouter__hello i:hover { 
        color: var(--main-a-hover-color);
    }
    .mainViewRouter__hello i p {
        font-weight: normal;
        margin-left: 2px;
    }

    .modal {
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
    .modal__loader {
        text-align: center;
        align-self: center;
    }
    .modal__loader img{
        width: 150px;
        height: 110px;
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
    .error {
        color: var(--main-a-hover-color);
        font-weight: bold;
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
    .inner__header {
        font-size: 20px;
        font-weight: 600;
    }
    .inner__title {
      
        font-size: 14px;
    }
    .footer {
        margin-top: 40px;
        width: 73.5%;
        height: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        
        padding: 20px;
        padding-left: 40px;
        background-color: white;
      
    
    }
    .footer p {
        color: var(--main-project-color);
        font-size: 17px;
        font-weight: bold;
        white-space: nowrap;
    }
    .footer a {
        color: var(--main-project-color);
        font-weight: bold;
        white-space: nowrap;
        font-size: 17px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    .inner__success {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        color:#44d494;
    }

  
     @media screen and (max-width: 600px) {
       
        .mainViewRouter {
            width: 100%;
            margin: 0;
        }
        .main__title {
            display: none;
        }
        .sidebar__head {
            height: 280px;
        }
        .sidebar__head_title p {
            font-size: 22px;
        }
        .sidebar__social a {
            margin-right: 7px;
        }
        .sidebar__social a:active {
            color: var(--main-a-hover-color);
        }
        .sidebar__social i {
            margin-right: 20px;
            font-size: 22px;
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

        .mainViewRouter__hello {
            height: 80px;
            width: 100%;
        }
        .mainViewRouter__hello .fa-bars {
            display: block;
            margin-left: 20px;
        }
        .mainViewRouter__hello button {
            margin-right: 20px;
        }
        .mainViewRouter__slogan {
            width: 100%;
        }
     
        .mainViewRouter__slogan img {
            display: none;
        }
        .mainViewRouter__slogan p {
            display: none;
        }
        .mainViewRouter__slogan i {
            display: block;
        }
        .mainViewRouter__social {
            width: unset;
            margin-right:  20px;
            justify-content: center;
        }
        .mainViewRouter__social i {
            margin-right: 10px;
            font-size: 20px;
        }
        .mainViewRouter__social p{
            display :none;

        }
        .footer {
          border-top: 1px solid #ccc;
          padding: 0;
            width: 100%;
            flex-direction: column;
            align-items: center;
            height: 60px;
            background-color: unset;
            position: unset;
        }
        .footer p {
            color: var(--main-project-color);
            text-align: center;
            font-size: 15px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .footer a {
            color: var(--main-project-color);
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: center;
            font-size: 15px;
            padding-bottom: 10px;
            
        }

        .sidebar {
            position: fixed;
            left: -320px;
            z-index: 9999;
            top: 0;
            width: 220px;
       
        }
        .sidebar__social {
            display: none;
        }
        .sidebar button {
            margin-bottom: 20px;
        }
        .sidebar__menu {
            width: 100%;
        }
        .sidebar__head_title {
            display: flex;
            justify-content: space-between;
            width: 220px;
        }
        .sidebar__head_title i{
            font-size: 28px;
            display: block;
        }
      
        .sidebar__social {
            display: flex;
            flex-direction: row;
        
        }
        .mainViewRouter__social {
            display: none;
        
        }
        .sidebar__menu {
            display: none;
        }
        .sidebar__menu_mobile {
            width: 250px;
            display: block;
        }
        .modal__inner {
            width: 300px;
            height: 100vh;
        }
       
    }
    @media screen and (max-width: 320px) {
        .modal__inner {
            width: 260px;
        }
        .inner__header {
            font-size: 16px;
        }
        .modal__inner {
            justify-content: flex-start;
            padding-top: 0;
          
            width: 240px;
        }
        .modal__inner i {
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
        .sidebar__head_title {
            justify-content: flex-start;
        }
        .sidebar__head_title p {
            margin-right: 10px;
        }
        .sidebar__head_title i {
            margin-left: 80px;
        }
    }

 


</style>


