let timer = document.querySelector("#countdown");
let text = document.querySelector("#text");

let count = 10;
let x = () => {
    timer.textContent = count;
    timer.classList.add('pop');
    setTimeout(() => {
        timer.textContent = count--;
        timer.classList.add('pop');
        setTimeout(()=>{
            timer.textContent=count--;
            timer.classList.add('pop');
            setTimeout(()=>{
                timer.textContent=count--;
                timer.classList.add('pop');
                setTimeout(()=>{
                    timer.textContent=count--;
                    timer.classList.add('pop');
                    setTimeout(()=>{
                        timer.textContent=count--;
                        timer.classList.add('pop');
                        setTimeout(()=>{
                            timer.textContent=count--;
                            timer.classList.add('pop');
                            setTimeout(()=>{
                                timer.textContent=count--;
                                timer.classList.add('pop');
                                setTimeout(()=>{
                                    timer.textContent=count--;
                                    timer.classList.add('pop');
                                    setTimeout(()=>{
                                        timer.textContent=count--;
                                        timer.classList.add('pop');
                                        setTimeout(()=>{
                                            timer.textContent=count--;
                                            timer.classList.add('pop');
                                            setTimeout(()=>{
                                                timer.style.display="none";
                                                text.style.display="block";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}
x(count);

