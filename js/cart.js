var vm = new Vue({
    el: "#app",
    data: {
        products: [
            {
                name: "糖葫蘆",
                content: "選用新鮮水果，將熬煮的冰糖包裹在外，形成脆脆的糖衣，一口咬下，水果本身的汁液與外層的糖融合，酸酸甜甜，讓人一口接一口。",
                price: 45,
                thumb: "img/product1.jpg",
                idName: "tab1",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "臭豆腐",
                content: "剛炸好的臭豆腐外酥內軟，搭配泡菜更是一絕，臭豆腐如其名聞起來是臭的，但吃下第一口後，有一種讓人乎略掉氣味的魔力，令人越罷不能。",
                price: 50,
                thumb: "img/product2.jpg",
                idName: "tab2",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "蚵仔煎",
                content: "臺灣夜市經典小吃，用平底鍋把油燒熱，放上牡蠣、攪拌後的雞蛋、蔬菜後再淋上澱粉芡水，淋上特製醬料後即可食用，味道鮮美，簡單方便。",
                price: 70,
                thumb: "img/product3.jpg",
                idName: "tab3",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "貢丸湯",
                content: "清淡的湯頭搭上Q彈的肉丸，便宜又大碗，是大人小孩都愛吃的湯品，適合搭配主餐食用，解膩也解饞。可自行選擇是否加芹菜。",
                price: 20,
                thumb: "img/product4.jpg",
                idName: "tab4",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "紅豆餅",
                content: "手拿熱門小吃，外皮柔軟，內餡飽滿豐富，口味具有多種選擇:紅豆、奶油、芋泥...等，鹹的甜的、你想得到的、你想不到的，我們都有。",
                price: 30,
                thumb: "img/product5.jpg",
                idName: "tab5",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "陽春麵",
                content: "陽春麵是一種幾乎不加上任何配菜的湯麵或乾麵，便宜簡便是受歡迎的主因，更是許多人從小吃到大的古早味麵食，獨家特製湯頭，香而不膩。",
                price: 35,
                thumb: "img/product6.jpg",
                idName: "tab6",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "魷魚羹麵",
                content: "大片的魷魚羹，濃稠的湯頭，滑順的麵線，超過50年老字號製作，海鮮的鮮甜是受歡迎的主要原因，不因物價增加而減料，多層的口感，令人流連忘返。",
                price: 55,
                thumb: "img/product7.jpg",
                idName: "tab7",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "沙威瑪",
                content: "沙威瑪是將肉層疊堆砌烘烤，一邊烤還會刷上醬料，有點像ＢＢＱ的感覺，月見山沙威瑪用的是比較常見的雞肉，老闆切肉的手法也很俐落，厚薄均勻。",
                price: 45,
                thumb: "img/product8.jpg",
                idName: "tab8",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "烤玉米",
                content: "口感有嚼勁，較為硬實，外層用剛好的火侯去考，焦香焦香，刷上特製醬汁，夜市人手一支，是不可錯過的手拿小吃。",
                price: 30,
                thumb: "img/product9.jpg",
                idName: "tab9",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "滷味",
                content: "依照個人喜好選擇食材，用獨家滷汁下去滷，讓食物充滿滷汁的香味，色香味俱全，多汁又入味，是夜市的霄夜之王。",
                price: 30,
                thumb: "img/product10.jpg",
                idName: "tab10",
                amount: 0,
                amountShow: 1,
            },
            {
                name: "蚵仔麵線",
                content: "飽滿的蚵仔和滷到軟爛入味的大腸鹹香帶勁，麵線可以品嚐到油蔥酥的香味，舀一口滑順的麵線搭配滿滿好料一秒就被征服。",
                price: 45,
                thumb: "img/product11.jpg",
                idName: "tab11",
                amount: 0,
                amountShow: 1,
            },
        ]
    },
    methods: {
        minusOne(product){
            product.amountShow--
            product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow 
        },
        addOne(product){
            product.amountShow++
            product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
        },
        addToCart(product){
            product.amount += product.amountShow
        },
        remove(product){
            product.amount = 0
        }
    },
    computed: {
        productInCart(){
            return this.products
            .filter(p => p.amount)
            .map(p => {
                p.sum = p.price * p.amount
                return p
            })
        },
        total(){
            return this.productInCart
            .reduce((sum,p)=> (sum+p.sum),0)
        }
    }
})