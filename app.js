const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

//update totals and count
function updateCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    console.log(seatsIndex);

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateCount();
})

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateCount();
    } 
})


