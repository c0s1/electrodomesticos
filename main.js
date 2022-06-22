let app = new Vue({
    el: "#app",
    data: {
        dataProducts: [
            {
                tv: [
                    { id: 1, name: 'LG 3000', price: 1600000, img: 'assets/televisor1.jpg' },
                    { id: 2, name: 'SAMSUNG', price: 1900000, img: 'assets/televisor2.jpg' }
                ],
                fryer: [
                    { id: 1, name: 'IMUSA 4.2', price: 450000, img: 'assets/freidora1.jpg' },
                    { id: 2, name: 'HOLSTEIN 3.0', price: 300000, img: 'assets/freidora2.jpg' }
                ],
                wash: [
                    { id: 1, name: 'SAMSUNG 2400', price: 1100000, img: 'assets/lavadora1.jpg' },
                    { id: 2, name: 'LG 1200', price: 1000000, img: 'assets/lavadora2.jpg' }
                ],
                refrigerator: [
                    { id: 1, name: 'MABE 12', price: 1250000, img: 'assets/nevera1.jpg' },
                    { id: 2, name: 'WHIRLPOOL', price: 1100000, img: 'assets/nevera2.jpg' }
                ]

            }
        ]
    }

})