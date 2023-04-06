
const vm = new Vue({
        el:"#header__box",
        data:{
            time:{},
            delivery: "Pedido minimo R$ 20,00",
            status: "Aberto",
            color:"color"
        },
            

        methods: {
            fetchTimeZone(){
                fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo")
                .then(response => response.json())
                .then(json=>{
                    this.time = json;
                    console.log(json);
                })
            } 
        },
})










