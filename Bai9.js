    /**
     * Bai 9.1
     */
    function kt(n){
            if (n > 0)
        {       
            console.log ("n la so nguyen duong ")
        }
        else
            if (n< 0 ) {
            console.log ("n la so nguyen am ")
    }
}
kt(5)
        /**
 * Bai 9.2
 */
    function ktra(n){
        if(n % 3 ==0) {
            console.log("n chia het cho 3 ")
        } else {
            console.log("n khong chia het cho 3 ")
        }
        if(n % 5 ==0) {
            console.log("n chia het cho 5 ")
        } else {
            console.log("n khong chia het cho 5 ")
        }
    }
    ktra(9)
    /**
     * 9.3
     */
        function month(n , m) {
            if(n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
                console.log("Thang co 31 ngay ")
            }
            if(n == 4 || n == 6 || n == 9 || n == 11){
                console.log("Thang co 30 ngay")
            }
            if(n == 2  && m % 4 ==0) {
                console.log ("Thi thang co 29 ngay")
            } else 
                console.log ("Thi thang co 28 ngay")
        }
        month(7,2021)
    /**
     * 9.4
     */
    function kiemtra(a,b,c){
        var delta = Math.pow(b,2)-4*a*c
        if (delta < 0) {
            console.log("Phuong trinh vo nghiem")
        }
        if (delta == 0) {
            console.log("Phuong trinh co 2 nghien kep x1 = x2 =" + (-b/2/a) )
        }
        if (delta > 0) {
            console.log("phuong trinh co nghiem x1 = "+ ((-b-Math.sqrt(delta))/2/a)+", x2 = "+ ((-b+Math.sqrt(delta))/2/a)+" ");
        } 
    }
    kiemtra(1,10,18)
    
    /**
     * 9.5
     */
    function kiemtraCanh(a,b,c) {
        if ((a + b > c) || (a + c > b) || (b + c > a)) {
			console.log("Day la tam giac")
		}
		if ((a == b) || (b == c) || (c == a)) {
			console.log("Day la tam giac can")
		} else if ((a == b) && (b == c) && (c == a)) {
            console.log("Day la tam giac deu")
		} else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)) {
			console.log("Day la tam giac vuong")
		} else {
			console.log("Day khong phai la tam giac")
		}
    }
    kiemtraCanh(3,5,6)
    
     