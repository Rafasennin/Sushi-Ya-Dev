
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
                    console.log(json);
                })
            },

            fetchRecipes(){
                fetch("https://api.spoonacular.com/recipes/informationBulk")
                .then(response => response.json())
                .then(jsonRecipe=>{
                    this.recipe = jsonRecipe;
                    console.log(jsonRecipe);
                })   
            }
        }
})


const vm2 = new Vue({
    el:".main__box",
    data:{
        recipe:"Hossomaki Skin Head",
        generalText: "generalText"
    },

})










