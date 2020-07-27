<template>
    <div class="main" v-if="auth">


            <div class="main__top--action" >
                <p v-if="user.role==1">Администратор системы</p>
                <p v-if="user.role==2">Пользователь системы</p>

                <button class="main__logout" @click="logout()">Выйти из системы</button>
                
            </div>
           


            <div class="main__list list">
                

                <div class="main__buttons">

                    <router-link  class="list__create" to="/register-user">Регистрация пайщика</router-link>
                    <button class="list__create" @click="openmodal()">Создать личный кабинет пайщика</button>
                </div>
               
                <p class="list__title">Список пайщиков</p>
                
                <div class="list__table">
                    <div class="list__head">

                        <div class="list__col">
                            <p>№ Очередь</p>
                        </div>  
                      

                        <div class="list__col">
                            <p>ФИО</p>
                        </div>

                         <div class="list__col">
                            <p>ИИН</p>
                        </div>

                         <div class="list__col">
                            <p>Общая сумма</p>
                        </div>

                        <div class="list__col">
                            <p>Дата договора</p>
                        </div>
                      

                        <div class="list__col">
                            <p>Действие</p>
                        </div>

                    </div>

                    <div class="list__row" v-for="(list,index) in clients" :key="index"  >
                        <div class="list__col">
                            <p>{{index+1}}</p>
                        </div>

                         <div class="list__col">
                            <p>{{list.name +' '+list.surname}}</p>
                        </div>

                        <div class="list__col">
                            <p>{{list.iin}}</p>
                        </div>

                        <div class="list__col" >

                            <p>{{list.amount}}</p>
                        </div>
                        
                        <div class="list__col">
                            <p>{{list.date_agreement}}</p>
                        </div>

                        <!-- <div class="list__col">
                            <p>{{list.id}}</p>
                        </div> -->

                        <div class="list__col list__actions">

                            <div><p style="font-size:12px">{{list.warning}}  замечания</p></div>
                            
                            <div @click="showUser(list.id)">
                                <i class="fas fa-chevron-circle-right"></i>

                            </div>
                            <div @click="modal_edit(list.id)" v-if="user.role==1">
                                <i class="fas fa-pen list__edit"></i>
                            </div>
                            <div @click="modal_delete()" v-if="user.role==1">
                                <i class="far fa-trash-alt list__remove"></i>
                            </div>
                           
                        </div>
                    </div>

                </div>

                
            </div>

            
            <div class="modal modal__create">
                <div class="modal__inner">
                    <i class="fas fa-times modal__close" @click="closemodal('modal__create')"></i>

                    <div class="modal__inner_header">
                        <div class="modal__loader" v-if="loader">
                            <img src="../assets/images/loader.gif" alt="">
                        </div>
                        <p class="inner__text inner__header">Зарегистрировать нового пользователя</p>
                        
                    </div>

                    <div>
                      
                        <form action="" @submit.prevent="create_user">
                            <p class="label">ФИО</p>
                            
                            <div class="inner__search"> 
                                
                                <select name="" id="" v-model="client" class="inner__select">
                                        <option  v-for="user in list_without_account"  :key="user.id" v-bind:value="user.id" >{{user.name+' '+user.surname}}</option>
                                </select>
                                <!-- <i class="fas fa-search"></i> -->

                            </div>
                            

                            <p class="label">Логин</p>
                            <!-- <vue-tel-input v-model="phone"  placeholder="" enabledCountryCode="true" defaultCountry='Kazakhstan' class="modal__phone"></vue-tel-input>
                                -->
                            <input class="inner__input"  type="text" placeholder="Введите логин" v-model="login">
                            
                            <p class="label">Пароль</p>

                            <input type="text" class="inner__input"  placeholder="Введите пароль" v-model="password">
                            
                          
                            <button class="button" type="submit"><p class="button__text">СОЗДАТЬ</p></button>

                        </form>
                    </div>

                </div>
            </div>

                        
            <div class="modal modal__edit">

                <div class="modal__inner">
                    <i class="fas fa-times modal__close" @click="closemodal('modal__edit')"></i>

                    <div class="modal__inner_header">
                        <div class="modal__loader" v-if="loader">
                            <img src="../assets/images/loader.gif" alt="">
                        </div>
                        <p class="inner__text inner__header">Редактировать данные пайщика</p>
                        
                    </div>
                    <div>


                        <form action="" @submit.prevent="update_user">
                            <p class="label">Имя</p>
                            <input class="inner__input" type="text" v-model="update.name">

                            <p class="label">Фамилия</p>
                            <input class="inner__input"  type="text" v-model="update.surname">
                            
                            <p class="label">Очества</p>
                            <input class="inner__input" type="text" v-model="update.patronymic">
                            
                            <p class="label">ИИН</p>
                            <input class="inner__input"  type="text" v-model="update.iin">

                            <p class="label">Дата договора</p>
                            <input class="inner__input"  type="date" v-model="update.date_agreement">
                            
                             <p class="label">Замечания</p>
                            <input class="inner__input"  type="text" v-model="update.warning">
                            

                            <p class="label">Логин</p>
                            <input class="inner__input"  type="text" v-model="update.email">
                            
                            <p class="label">Пароль</p>
                            <input class="inner__input" type="text" v-model="update.password">
                            
                            
<!-- 
                            <p class="label">Логин</p> -->
                            <!-- <vue-tel-input v-model="phone"  placeholder="" enabledCountryCode="true" defaultCountry='Kazakhstan' class="modal__phone"></vue-tel-input>
                                -->
                            <!-- <input class="inner__input"  type="text" placeholder="Введите логин" v-model="update.email">
                            
                            <p class="label">Пароль</p>

                            <input type="text" class="inner__input"  placeholder="Введите пароль" v-model="update.password">
                            
                           -->
                            <button class="button" ><p class="button__text">Редактировать</p></button>
                        </form>
                    </div>

                </div>
            </div>

                    
            <div class="modal modal__delete">
                <div class="modal__inner" style="text-align: center">
                    <i class="fas fa-times modal__close" @click="closemodal('modal__delete')"></i>

                    <p class="modal__deltitle">Вы действительно хотите удалить данного пользователя?</p>

                    <div class="modal__yesno">
                        <div class="modal__yes">Да</div>
                        <div class="modal__no">Нет</div>
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

                update: {
                    client_id: null,
                    name: null,
                    surname: null,
                    patronymic: null,
                    iin: null,
                    date_agreement: null,
                    warning: null,
                    email: null,
                    password: null
                },
                options: [
                    1,2,3
                ],
                clients: [],
                list_without_account: [],
                auth: '',
                loader: false,
            
                    client: '',
                    login: '',
                    password: '',
                 
                users: [],
                data: false,
                show: false,
                phone: '',
                errors: [],
                name: '',
                type: '',
                email: '',
                user: {
                    role: ''
                },
                video: {
                sources: [{
                    src: '../assets/images/feed3.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                   
                    poster: '../assets/images/feed3.mp4'
                }
            }
            };
        },
        methods: {
            showUser(id) {
                   this.$router.push('user-info-'+id);
            },
            logout() {
                localStorage.removeItem('access_token');
                this.$router.go(0);
                this.$router.push('/');
            },
            openmodal() {
                var modal = document.querySelector('.modal__create');
                modal.style.display = "flex";
            },
            modal_delete() {
                var modal = document.querySelector('.modal__delete');
                modal.style.display = "flex";
            },
            modal_edit(id) {
                var modal = document.querySelector('.modal__edit');
                modal.style.display = "flex";

                this.getClient(id);
                this.getEmail(id);


            },
            getEmail(id) {
                axios.get('http://127.0.0.1:8000/api/v1/user/get/user/email?client_id='+id,
                {
                  
                })
                .then(response => {
                     this.update.email = response.data.email
                })
                .catch(error => {
                   console.log(error);
                });
            },
            getClient(id) {
                axios.get('http://127.0.0.1:8000/api/v1/user/get/client?id='+id,
                {
                  
                })
                .then(response => {
                     this.update.client_id = response.data.id
                     this.update.name = response.data.name
                     this.update.surname = response.data.surname
                     this.update.patronymic = response.data.surname
                     this.update.iin = response.data.iin
                     this.update.date_agreement = response.data.date_agreement

                     this.update.warning = response.data.warning

                })
                .catch(error => {
                   console.log(error);
                });
            },
            closemodal(type) {
               
                    var modal = document.querySelector('.'+type);
                    modal.style.display = "none";
            },
            check_auth() {
                if (localStorage.getItem('access_token')) {
                        this.auth = true;

                } else {
                        this.auth = false;
                        this.$router.push(this.$route.query.redirect || '/login')
                }
            },
            get_list() {
                
                axios.get('http://127.0.0.1:8000/api/v1/user/paysender/list?type='+1
                )
                .then(response => {
                   
                        this.clients = response.data;

                        console.log("clients");
                        console.log(this.clients);
                    
                })
                .catch(error => {
                   console.log(error);
                });
            },
            get_list_without_account() {
                
                axios.get('http://127.0.0.1:8000/api/v1/user/paysender/list?type='+2
                )
                .then(response => {
                   
                        this.list_without_account = response.data;
                    
                })
                .catch(error => {
                   console.log(error);
                });
            },
            get_profile() {
                axios.post('http://127.0.0.1:8000/api/v1/user/me',
                {
                    
                })
                .then(response => {
                   
                        this.user.role = response.data.roles[0].id;
                        
                        this.get_list();
                })
                .catch(error => {
                   console.log(error);
                });
            },
            create_user() {
                axios.post('http://127.0.0.1:8000/api/v1/user/create',
                {
                    email: this.login,
                    password: this.password,
                    client_id: this.client
                })
                .then(response => {
                        this.$alert(response.data.success);
                })
                .catch(error => {
                    if(error.response.data.error.email.length!=0) {

                     this.$alert("Пользователь существует");
                    }
                });
            },
            update_user() {
                axios.post('http://127.0.0.1:8000/api/v1/user/update/data',
                {
                    client_id: this.update.client_id,
                    name: this.update.name,
                    surname: this.update.surname,
                    patronymic: this.update.patronymic,
                    iin: this.update.iin,
                    date_agreement: this.update.date_agreement,
                    warning: this.update.warning,
                    email: this.update.email,
                    password: this.update.password
                })
                .then(response => {
                    this.$alert(response.data.success);
                    this.get_list();
                })
                .catch(error => {
                    if(error.response.data.error.email.length!=0) {

                     this.$alert("Пользователь существует");
                    }
                });
            }
        },
        mounted() {
             this.check_auth();
             
             this.get_profile();
            this.get_list_without_account();
             
        },
         watch: {
            '$route'() {
                this.check_auth();        
            },
        },
     
    }
</script>
<style lang="scss" scoped>
    .main {
        display: flex;
        flex-direction: column;
        
        justify-content: center;

        width: 95%;
        .main__top--action {
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            align-self: center;
            margin-top: 20px;
            p {
                border-bottom: 1px solid var(--main-project-color);
            }
        }
        .main__buttons {
            width: 600px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-self: center;
        }
        .main__logout {
            padding: 10px;
          
            background-color: var(--main-a-hover-color);
        
            color: white;
            border: none;
            outline: none;
        }
        .main__logout:hover {
            color: white;
        }
    }  

    .list__create {
        text-align: center;
        text-decoration: none;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 250px;
        padding: 10px;
        background-color: var(--main-project-color);
        color: white;
        font-size: 14px;
        border: none;
        align-self: center;
    }
    .main__list {
        display: flex;
        flex-direction: column;
        .list__title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 20px;
            align-self: center;
        }
    }

    .list__table {
        width: 100%;
        display: flex;
        flex-direction: column;
        .list__head {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            border-bottom: 2px solid #ccc;
            
            div {
                width: 100%;
                padding: 20px;
                font-weight: bold;
                border-right: 1px solid #ccc;
                text-align: center;
            }
        }
    }


    .modal {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        z-index: 999;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: none;
        background:linear-gradient( rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.5)100%), url("https://images.unsplash.com/photo-1509095660908-d9b1e7ffec62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
        
        .modal__inner {
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            padding: 20px;
            width: 380px;
            height: 600px;
            overflow-y: scroll;
            .inner__search {
                display: flex;
                flex-direction: row !important;
                align-items: center;
                i {
                    margin-left: 5px;
                    margin-bottom: 10px;
                    font-size: 20px;
                }
            }
            input{
                font-size: 16px;
            } 
            .label {
                margin-bottom: 10px;
            }  
            .modal__close {
                align-self: flex-end;
                font-size: 25px;
                margin-bottom: 20px;
            }
            .modal__close:hover {
                color: var(--main-a-hover-color);
            }
            button {
                width: 350px;
                padding-top: 10px;
                padding-bottom: 10px;
                background-color: var(--main-project-color);
                border:var(--main-a-hover-color);
                outline: none; 
                color: white;
            }
         
            .modal__phone {
                padding: 10px;
                font-size: 14px;
                width: 330px;
                margin-bottom: 15px;
            }
            .inner__select {
                width: 350px;
                margin-bottom: 15px;
                padding: 14px;
                
                border: 1px solid #ccc;
                outline: none;
            }
            .inner__input {
                width: 320px;
                margin-bottom: 15px;
                padding: 14px;
              
                border: 1px solid #ccc;
                outline: none;
            }
        
            .modal__inner_header {
                display: flex;
                flex-direction: column;
              
                margin-bottom: 20px;
                .inner__header {
                    justify-self: center;
                    align-self: center;
                    text-align: center;
                    font-weight: bold;
                    font-size: 18px;
                    margin-bottom: 50px;
                }
            }
            .modal__loader {
                text-align: center;
                align-self: center;
            }
            .modal__loader img{
                width: 150px;
                height: 110px;
            }

        }
        .modal__yesno {
            width: 250px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 16px;
            .modal__yes {
                text-align: center;
                width: 80px;
                padding: 10px;
                background-color: seagreen;
                color: white;
            }
            .modal__no {
                text-align: center;
                width: 80px;
                padding: 10px;
                background-color: red;
                color: white;
            }
        }
     
    }


    .modal__deltitle {
        align-self: center;
        margin-bottom: 20px;
        font-weight: bold;
    }
    

     .list__table {
        width: 100%;
        display: flex;
        flex-direction: column;
        .list__col {
                width: 100px;
        }
        .list__head {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            
            div {
                width: 100%;
                padding: 5px;
                font-weight: bold;
                // border-right: 1px solid #ccc;
                text-align: center;
            }
        }
        .list__row {
            width: 100%;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #ccc;
            font-size: 14px;
            .list__actions {

                display :flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                div {
                    cursor: pointer;
                }
                i {
                    font-size: 16px;
                }
                .list__edit {
                    color: #4c6ef5;
                    font-size: 12px;
                }
                
                
                .list__remove {
                    color: red;
                    font-size: 12px;
                }
                .list__action {
                    color: #4c6ef5;
                }
            }
            .list__col {
               
                padding: 20px;
            
                // border-right: 1px solid #ccc;
                text-align: center;
            }
          
        }
        .list__row:hover {
            background-color: #ccc;
            color: var(--main-project-color);
        }
    }

   
  

</style>