<template>
    <div class="news">
        <div class="news__list">
            <div class="news__list_item">
                <div class="news__list_top">
                    <div><img src="https://instagram.fala4-1.fna.fbcdn.net/v/t51.2885-15/e35/74892119_818860268557323_135208043957900561_n.jpg?_nc_ht=instagram.fala4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=JjTT0heOxbsAX-JKiSw&oh=21ae7d947c6fca798b3bfb4f339a02f9&oe=5E81174C" alt=""></div>
                    <p>Программа TechGirls 2020 – интенсивная четырехнедельная программа</p>
                </div>

                <div class="news__list_bottom">
                    <p v-on:click="seen = !seen">Подробнее </p>
                    <i class="fa fa-arrow"></i>
                    <p>11.02.2020</p>
                </div>

                
                <div class="help__item_line"></div>
            </div>
            <div class="news__list_item">
                <div class="news__list_top">
                    <div><img src="https://instagram.fakx1-1.fna.fbcdn.net/v/t51.2885-15/e35/77032800_2892458850834341_8996085281046427038_n.jpg?_nc_ht=instagram.fakx1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=PBsFuRfXQdIAX9K9yhT&oh=cf734df23b10bc576f09a08b5d7bfad6&oe=5E89C2BE" alt=""></div>
                    <p>Стипендия фонда Кларендон (Clarendon Fund Scholarship) самая большая стипендия Оксфордского университета. </p>
                </div>
                <div class="news__list_info">
                    <div class="news__list_bottom">
                        <p>Подробнее</p>
                        <i class="fa fa-arrow"></i>
                        <p>11.02.2020</p>
                    </div>
                 
                </div>

                
                <div class="help__item_line"></div>
            </div>
            <div class="news__list_item">
                <div class="news__list_top">
                    <div><img src="https://informburo.kz/img/article/1017/42_tn.jpg" alt=""></div>
                    <p> День Высшего Образования в Великобритании
                        Презентация Подготовительных программ к поступлению 
                        в университеты  KAPLAN PATHWAYS - ...</p>
                </div>
                <div class="news__list_info">
                    <div class="news__list_bottom">
                        <p>Подробнее</p>
                        <i class="fa fa-arrow"></i>
                        <p>11.02.2020</p>
                    </div>
                </div>
                <div class="help__item_line"></div>
            </div>
            <div class="news__list_item">
                <div>   
                    <div><img src="https://informburo.kz/img/article/1010/17_tn.jpg" alt=""></div>
                 
                </div>
                <div class="news__list_info">
                    <p>Шетел университеттерінде тегін білім алуға болады. Гранттар мен стипендиялар топтамасы</p>
                    <p>Подробнее</p>
                    <div  class="news__list_bottom">
                        <i class="fa fa-arrow"></i>
                        <p>12.02.2020</p>
                    </div>
                </div>

                
                <div class="help__item_line"></div>
            </div>
        </div>
       
    </div>
</template>

<style  scoped>
    .news {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 30px;
        margin-bottom: 100px;
    }
    .news__body {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
    }
    .news__list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      
    }
    .news__list_item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        width: 230px;
        padding: 20px;
        margin: 30px;
        height: 300px;
        -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         3px 3px 5px 6px #ccc; 
     }
     .news__list_item p {
         font-size: 14px;
     }
 
    .news__list_bottom p {
        color: var(--main-project-color);
    }
    .news__list_top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .news__list_bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .news__list img {
        align-self: center;
        width: 200px;
        /* height: 140px; */
        margin-bottom: 10px;
    }
    .help__item_line {
        height: 3px;
        width: 240px;
        border-radius: 40px;
        background-color: var(--main-a-hover-color);
    }
    
     @media screen and (max-width: 600px) {
         .news {
             width: 100%;
             margin: 0;
         }
         .news__list {
             flex-direction: column;
             align-items: center;
         }
         .news__list_item {
            width: 270px;
            margin: 0;
            margin-top: 20px;
           
         }
         .help__item_line  {
             width: 270px;
         }
     }
    @media screen and (max-width: 320px) { 
         .news__list_item {
             width: 240px;
           
             margin-top: 20px;
             margin-bottom: 0;
         }
         .help__item_line  {
             width: 240px;
         }
    }
    
</style>