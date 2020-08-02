<template>
    <div class="feedback">


        <form @submit.prevent="send_feedback()">
            <div class="feedback__row">
                <p>Ссылка для видео</p>
                <input type="text" v-model="feedback.url_video" placeholder="Ссылка для видео" required>
            </div>
            <div class="feedback__row">
                <p>Тема обратной связи</p>
                <input type="text" v-model="feedback.title_fd" placeholder="Тема обратный связь" required>
            </div>
            <div class="feedback__row">
                <p>Текст обратной связи</p>
                <input type="textarea" row="5" v-model="feedback.text_fd" placeholder="Текст обратной связи" required>
            </div>
            <div class="feedback__row">
                <p>Дата обратной связи</p>
                <input type="date" v-model="feedback.date_fd" required>
            </div>
            <button type="submit">Отправить</button>
        </form>
        
    </div>
</template>

<script>

import axios from 'axios';
    export default {
        data() {
            return {
                feedback: {
                    url_video: '',
                    title_fd: '',
                    text_fd: '',
                    date_fd: ''
                },
                show: false,
                phone: '',
                errors: [],
                name: '',
                type: '',
                email: '',
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
            send_feedback() {
              
                axios.post('http://127.0.0.1:8000/api/v1/user/send/feedback/user',
                {
                    title: this.feedback.title_fd,
                    description: this.feedback.text_fd,
                    url_video: this.feedback.url_video,
                    date: this.feedback.date_fd
                      
                })
                .then(response => {
                    this.$alert(response.data.success);
                    this.$router.push('create-feedback');
                })
                .catch(error => {
                    console.log(error);
                });
            },
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

    .feedback {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    .feedback__row {
        display: column;

        input {
            width: 300px;
            padding: 10px;
            border: 1px solid var(--main-project-color);
            margin-bottom: 10px;
        }
        p {
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: bold;
        }
     
    }
    button {

        background-color: var(--main-project-color);
        padding: 10px;
        color: white;
        border: none;
        outline: none;
        width: 320px;
    }
   



</style>