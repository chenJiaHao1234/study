

const obj = new Vue ({
    el: '.app',
    data: {
        arr: [
            {
                bookname: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                quantity: 1,
            },
            {
                bookname: '《UNIX编程艺术》',
                date: '2009-9',
                price: 95.00,
                quantity: 1,
            },
            {
                bookname: '《代码大全》',
                date: '2012-9',
                price: 105.00,
                quantity: 1,
            },
            {
                bookname: '《编程珠玑》',
                date: '2015-9',
                price: 135.00,
                quantity: 1,
            },
        ]
    },
    methods: {
        qincrease(index) {
            this.quantity = this.arr[index].quantity++;
        },
        reduce(index) {
                this.quantity = this.arr[index].quantity--;
        },
        del(index) {
            this.arr.splice(index, 1)
        },
        totes() {
            let sum = 0;
            for (let i = 0; i < this.arr.length; i++) {
                sum = sum + this.arr[i].quantity * this.arr[i].price
            }
            return sum
        }
    }
})