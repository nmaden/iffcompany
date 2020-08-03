<template>
    <div class="contactss">
        <div class="contacts__left">

            <p>​Aдрес:ул. Газиза Жубанова 3Ж​</p>
            <div>
                 <p>ТОО "ААА"</p>
                 <a href="tel:8(747)362-80-80">8(747)362-80-80</a>
            </div>
           
            <p>Whatsapp</p>
            <a href="wa.me/77473628080">wa.me/77473628080</a>
        </div>

        <div class="contacts__right">
            <img src="../assets/images/card.png" alt="">
        </div>

    </div>
</template>


<style>

    .contactss {
        display: flex;
        flex-direction: row;
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

    
    @media screen and (max-width: 600px) {
         .contacts,.contactss {
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