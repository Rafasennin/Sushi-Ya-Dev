
const vm = new Vue({
        el:"#header__box",
        data:{
            time:{},
            delivery: "Pedido minimo R$ 20,00",
            status: "Aberto",
            color:"color",
            recipe:"Hossomaki Skin Head",
            
        },

        methods: {
            fetchTimeZone(){
                fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo")
                .then(response => response.json())
                .then(json=>{
                    this.time = json;
                    console.log(json.datetime);
                })
            }
        }
})



const vm2 = new Vue({
    el:".main__box",
    data:{
        hossomaki:{
            recipe:"Hossomaki Skin Head",
            price: 15
        },
        
        generalText: "generalText",
        counter: 0,
        total: 0
    },

    methods:{
        increment(){
            if(this.counter >= 0){
            this.counter++
            this.total+= this.hossomaki.price
            }
        },

        decrement(){
            if(this.counter > 0){
            this.counter--;
            this.total-= this.hossomaki.price
            
            }
        }
    }

})










