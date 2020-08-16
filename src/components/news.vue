<template>
    <div class="feedback">

        
        <div v-if="news!=null" style="width: 92%" class="news__items">
                <div class="feedback__column" v-for="(feedback,index) in news" :key="index"  >
                    <!-- <iframe width="94%" height="315"
                                :src="get_by_url(feedback.url_video)">
                    </iframe> -->
                    <div v-for="(image,i) in feedback.news_image" :key="i">
                        <img :src="get_image_url(host,image.image)"  class="feedback__image" alt="">
                    
                    </div>

                    <div class="feedback__row">
                        <div class="feedback__info" >
                        
                            <p class="feedback__title">{{feedback.title}}</p>
                            <p class="feedback__text"  v-if="feedback.description.length>100">{{feedback.description.substring(0,100)}}</p>
                            <p class="feedback__text" style="display: none" :id="'long__' + feedback.id">{{feedback.description.substring(100,feedback.description.length)}}</p>
                            <p class="feedback__seeall" :id="'show__' + feedback.id" @click="showAll(feedback.id)">Посмотреть все</p>
                            <p class="feedback__seeall" :id="'hide__' + feedback.id" style="display: none" @click="hideAll(feedback.id)">Скрыть</p>

                            <p class="feedback__date"></p>

                        </div>

                        <div class="feedback__action">

                            <!-- <i class="fas fa-pencil-alt" ></i>
                            <i class="far fa-trash-alt" @click="delete_news(feedback.id)"></i> -->

                        </div>
                    </div>
                
                </div>
        </div>
       

        <div class="feedback__empty" v-else>

            <p>Уважаемый пользователь здесь можно посмотреть новостей</p>
            <!-- <div class="feedback__info" >
                    
                <p class="feedback__title">Новости</p>
                <p class="feedback__text">Пример</p>
                <p class="feedback__date">Пример</p>

            </div>

            <div class="feedback__action">

                <i class="fas fa-pencil-alt"></i>
                <i class="far fa-trash-alt "></i>

            </div> -->
        </div>
        
    </div>
</template>

<script>

import axios from 'axios';
    export default {
        data() {
            return {
                showall:false,
                news: null,
                host: null,
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
        mounted() {
            this.get_news();
        },
        methods: {
            showAll(id) {
                
                document.getElementById("show__"+id).style.display = 'none';

                document.getElementById("hide__"+id).style.display = 'block';
                document.getElementById("long__"+id).style.display = 'block';
            },
            hideAll(id) {
                
                document.getElementById("show__"+id).style.display = 'block';

                document.getElementById("hide__"+id).style.display = 'none';
                document.getElementById("long__"+id).style.display = 'none';
            },
            get_image_url(host,image) {
                if(image!="") {
                    return "http://127.0.0.1:8000"+image;
                }
            },
            get_by_url(url) {
                if(url!="") {
                    return "https://www.youtube.com/embed/"+url;
                }
                else {

                }
            },
            delete_news(id) {
                axios.post(process.env.VUE_APP_API+process.env.VUE_APP_API_VERSION+'user/delete/news',
                {
                    id:id
                      
                })
                .then(response => {   
                    this.$alert(response.data.success);
                    this.get_news();
                })
                .catch(error => {
                    // if(error.response.data.error.iin.length!=0) {
                    //     this.$alert("Пользователь существует");
                    // }
                });
            },
            get_news() {
                axios.get(process.env.VUE_APP_API+process.env.VUE_APP_API_VERSION+'user/get/news',
                {
                    
                })
                .then(response => {
                    console.log("news");
                    console.log(response.data);
                    this.news=response.data.data;
                    this.host = response.data.host;
                })
                .catch(error => {
                    // if(error.response.data.error.iin.length!=0) {
                    //     this.$alert("Пользователь существует");
                    // }
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
        margin-left: 50px;
       
    }


    .feedback__empty {
        width: 90%;
        background-color: white;
        padding: 20px;
        text-align:center;

        p {

            font-size: 16px;
            font-weight: bold;
        }
      
    }

    .news__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .feedback__column {
        width: 27%;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
      
    }

    // .feedback__column:nth-child(even) {
    //     margin-left: 90px;
    //     margin-right: 90px;
    // }
    .feedback__image {
        width: 280px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

    }

    .feedback__row {
        display:flex;
         justify-content: space-between;
         border-bottom: 5px solid var(--main-project-color);
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        // border-bottom: 5px solid var(--main-project-color);
        width: 240px;
        background-color:white;
        padding: 20px;
        p:nth-child(1) {
            font-size: 20px;
            font-weight: bold;
        }
        p {
            margin-bottom: 10px;
        }
        .feedback__seeall {
            color: var(--main-project-color) !important;
           
            cursor: pointer;
        }
        .feedback__seeall:hover {
             border-bottom: 1px solid var(--main-project-color);
        }
        .feedback__date {
            color: #ccc;

            font-size: 12px;
        }

        .feedback__info {
            display: flex;
            flex-direction: column;
        }
        .feedback__action {
           display: flex;
           flex-direction: row;
           i {
               margin-right: 10px;
           }
        }
    }





</style>