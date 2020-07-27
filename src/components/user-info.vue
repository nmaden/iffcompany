<template>
    <div class="contacts">

        <div class="user__client">
            <p style="font-weight: bold">Клиент:</p>
            <p class="">{{client.name}}</p>
            <p class="">{{client.surname}}</p>
        </div>
        <div class="addPayment" @click="openmodal">
            Добавить оплату
        </div>
        
     
         <p class="user__title">Cписок транзакций</p>
            
                <div class="list__table">
                    <div class="list__head">

                        <div>
                            <p>№</p>
                        </div>

                         <div>
                            <p>СУММА</p>
                        </div>

                         <div>
                            <p>ТИП ОПЛАТЫ</p>
                        </div>

                         <div>
                            <p>АДРЕС</p>
                        </div>
                        
                         <div>
                            <p>ДАТА ТРАНЗАКЦИЙ</p>
                        </div>

                    </div>

                    <div class="list__scroll">
                     
                        <div class="list__row" v-for="(item,index) in transactions" :key="index">
                            <div>
                                <p>{{index+1}}</p>
                            </div>
  
                            <div>
                                <p>{{item.amount}}</p>
                            </div>
                            <div>
                                <p v-if="item.type_of_transaction==1">Вступительный взнос</p>
                                <p v-else>Паевый взнос</p>
                            </div>
                            <div>
                                 <p>{{item.street_of_bank}}</p>
                            </div>
                             <div>
                                <p>{{item.date_of_transaction}}</p>
                            </div>

                        </div>
                      
                
                    </div>
                 

                </div>


                <div class="modal modal__create">
                <div class="modal__inner">
                    <i class="fas fa-times modal__close" @click="closemodal('modal__create')"></i>

                    <div class="modal__inner_header">
                        <!-- <div class="modal__loader" v-if="loader">
                            <img src="../assets/images/loader.gif" alt="">
                        </div> -->
                        <p class="inner__text inner__header">Добавить транзакцию</p>
                        
                    </div>

                    <div>
                      
                        <form action="" @submit.prevent="create_transaction" >

                            <p class="label">Cумма</p>
                            
                            <input class="inner__input"  type="text" placeholder="Введите сумму" v-model="amount">
                            
                            
                             <p class="label">Номер чека</p>
                            
                            <input class="inner__input"  type="text" placeholder="Номер чека" v-model="number_payment">
                            
                            <p class="label">Тип транзакций</p>
                           
                            <select class="inner__select" name="" v-model="type" id="">
                                <option value="1" v-if="!check">Вступительный взнос</option>
                                <option value="2">Паевый взнос</option>
                            </select>

                            <p class="label">Адрес банка</p>

                            <input type="text" class="inner__input"  placeholder="Введите адрес" v-model="street">
                            
                            <p class="label">Дата транзакций</p>

                            <input type="date" class="inner__input"  placeholder="Введите дату" v-model="date">
                            
                          
                          
                            <button class="button" type="submit"><p class="button__text">Добавить</p></button>

                        </form>
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
                number_payment: '',
                show: false,
                phone: '',
                errors: [],
                name: '',
                type: '',
                email: '',

                transactions: [],
                client_id: '',
                amount: '',
                type: '',
                street: '',
                date:'',
                client: [],
                check: false
             
            };
        },
        mounted() {
            this.getTransactions(this.$route.params.id);
            this.getClient(this.$route.params.id);
        },
        methods: {
            openmodal() {
                var modal = document.querySelector('.modal__create');
                modal.style.display = "flex";
            },
            closemodal() {
                var modal = document.querySelector('.modal__create');
                modal.style.display = "none";
            },
            getClient(id) {
                axios.get('http://127.0.0.1:8000/api/v1/user/get/client?id='+id,
                {
                  
                })
                .then(response => {
                     this.client = response.data
                })
                .catch(error => {
                   console.log(error);
                });
            },
            getTransactions(id) {
                axios.get('http://127.0.0.1:8000/api/v1/user/get/transactions?id='+id,
                {
                  
                })
                .then(response => {
                
                     this.transactions = response.data

                    for (let index = 0; index < this.transactions.length; index++) {
                        
                        if(this.transactions[index].type_of_transaction=='1') {
                            this.check = true;
                           
                        }
                        
                    }

                })
                .catch(error => {
                   console.log(error);
                });
            },

            create_transaction() {
                axios.post('http://127.0.0.1:8000/api/v1/user/send/transaction',
                {
                    client_id: this.$route.params.id,
                    amount: this.amount,
                    type_of_transaction: this.type,
                    street_of_bank: this.street,
                    date_of_transaction: this.date,
                    number_payment: this.number_payment
                })
                .then(response => {
                    this.$alert(response.data.success);
                    var modal = document.querySelector('.modal__create');
                    modal.style.display = "none";
                    this.getTransactions(this.$route.params.id);

                })
                .catch(error => {
                   console.log(error);
                });
               
            }
        }
     
    }
</script>
<style lang="scss">
  .user__client {
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 230px;
      align-self: flex-start;
      margin-left: 60px;
      justify-content: space-between;
      border-bottom: 1px solid var(--main-project-color);
      cursor: pointer;
      font-size: 16px;
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
            font-size: 14px;
            border-bottom: 3px solid #ccc;
            
            div {
                width: 100%;
                padding: 20px;
                font-weight: bold;
                border-right: 1px solid #ccc;
                text-align: center;
            }
        }

        .list__scroll {
            height: 100%;
            overflow-y: scroll;
        }
        .list__row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #ccc;
            div {
                width: 100%;
                padding: 5px;
            
                text-align: center;
            }
        }
    }
    .addPayment {
        cursor: pointer;
        padding: 10px;
        background-color: var(--main-project-color);
        color: white;
        font-family: Tahoma;
        margin-bottom: 10px;

    }
    .contacts {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 40px;
    }

    .contacts__left,.contacts__right {
     
        border-radius: 10px;
        width: 400px;
        height: 300px;
        background-color: white;
        box-shadow: rgba(74, 92, 184, 0.4) 0px 0px 20px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        
        padding: 5px;
    }
    .contacts__left p, .contacts__left a {
        margin-bottom: 10px;
    }
    .contacts__left a {
        text-decoration: none;
        color: black;
    }
    .contacts__left:hover,.contacts__right:hover {
      
    }
    .contacts__right img {
        width: 400px;
        height: 300px;
        
        border-radius: 10px;
        transition: transform .2s; /* Animation */
    }
    .contacts__right img:hover {
         transform: scale(1.2);    
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


    
    @media screen and (max-width: 600px) {
         .contacts {
             width: 100%;
             flex-direction: column;
             margin-bottom: 70px;
         }
         .contacts__left {
             width: 260px;
             margin-bottom: 20px;
             padding: 20px;
         }
        .contacts__right {
            width: 260px;
            margin-bottom: 20px;
            padding: 20px;
        }
        .contacts__right img {
            width: 280px;
        }
     }


    



</style>