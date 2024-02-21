const busSeats = document.getElementsByClassName('bus-seats')
let countSeat = 0
let totalMoney = 0
let availableSeat = 40
for (const busSeat of busSeats) {
    // console.log(busSeat);
    busSeat.addEventListener("click", function () {
        if (countSeat > 3) {
            alert('You cannot buy more than four tickets');
            return "Invalid number selected";
        }
        // console.log(busSeat.classList);

        busSeat.setAttribute('disabled', true)

        busSeat.classList.add('bg-[#1DD100]')
        busSeat.classList.add('rounded-xl')
        busSeat.classList.add('text-white')
        busSeat.classList.add('w-[110px]')
        busSeat.classList.add('h-14')
        const selectedSeat = document.getElementById('selected-seat')
        countSeat++
        // console.log(countSeat); 
        selectedSeat.innerText = countSeat;
        selectedSeat.classList.add('bg-[#1DD100]')
        selectedSeat.classList.add('rounded-full')
        selectedSeat.classList.add('text-white')

        const economySeat = document.getElementById('economy-class')
        // console.log(economySeat);
        const economyPrice = document.createElement("div")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        economyPrice.appendChild(p1)
        economyPrice.appendChild(p2)
        economyPrice.appendChild(p3)
        economySeat.append(economyPrice)

        // console.log(economySeat);

        const busSeatName = busSeat.innerText
        p1.innerText = busSeatName;
        p2.innerText = "Economy"
        p3.innerText = 550

        economyPrice.classList.add('flex')
        economyPrice.classList.add('justify-between')

        const totalPrice = document.getElementById('bd-money')
        totalMoney += 550
        totalPrice.innerText = totalMoney;

        const seatHave = document.getElementById('seat-left')
        availableSeat--
        seatHave.innerText = availableSeat;

    })

}



function coupon() {
    const couponDiscount = document.getElementById('coupon-name')
    
    // console.log(couponDiscount.value.split(" ").join("").toUpperCase());
    const couponCard = couponDiscount.value.split(" ").join("").toUpperCase();
    if (couponCard == "NEW15") {
        const grandMoney = document.getElementById('grand-money')
        const hideInput = document.getElementById('hide')
        hideInput.classList.add("hidden")
        const new15 = totalMoney * 0.15
        const grandPrice = totalMoney - new15;
        grandMoney.innerText = grandPrice;
    }
    else if (couponCard == "COUPLE20") {
        const grandMoney = document.getElementById('grand-money')
        const hideInput = document.getElementById('hide')
        hideInput.classList.add("hidden")
        const couple20 = totalMoney * 0.20
        const grandPrice = totalMoney - couple20;
        grandMoney.innerText = grandPrice;
    }
    else { 
        alert ("Invalid Coupon Code" )
    }



}


const backHome = document.getElementById("continue")
backHome.addEventListener("click",function(){
    window.location.reload();
})