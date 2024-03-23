function _Compare() {
    let section = document.getElementById("_comparison");
    section.style.display = "block";
    
    let our = document.getElementById("_our-num");
    let other = document.getElementById("_other-num");
    let year = document.getElementById('_year');

    let our_num = document.getElementById('_initial-value').value;
    let other_num = document.getElementById('_initial-value').value;
    let total = [0, 0];

    let current_date = new Date();
    let year_num = current_date.getFullYear();

    our.innerHTML   = '';
    year.innerHTML  = '';
    other.innerHTML = '';

    our.innerHTML   += '<p class = "_first-num">$' + our_num + '</p>';
    year.innerHTML  += '<p style = "margin-bottom:5px;">— ' + year_num + ' —</p>'
    other.innerHTML += '<p class = "_first-num">$' + other_num + '</p>';

    let alpha_our = 6;
    for(let i = 1; i < 15; i++) {
        our_num = our_num * 1.019;
        total[0] += our_num;
        alpha_our += 4;
        our.innerHTML += `<p class = "_our-num" style="background-color: #50B37D${alpha_our};">$${our_num.toFixed(2)}</p>`;
        
        year_num += 1;
        year.innerHTML  += '<p>— ' + year_num + ' —</p>';
    }

    let alpha_other = 6;
    for(let i = 1; i < 15; i++) {
        other_num = other_num * 1.08;
        total[1] += other_num;
        alpha_other += 4;
        other.innerHTML += `<p class = "_other-num" style="background-color: #b35050${alpha_other};">$${other_num.toFixed(2)}</p>`;
    }


    let _finalmessage = document.getElementById("_final-message");
    let _saving = (total[1] - total[0]).toFixed(2);
    _finalmessage.innerHTML = 'By the year of ' + year_num + ', you would had <b>saved $' + _saving + '</b> with Terra Energy. <br> <a href="https://terraenergy.io/contact">Go solar now! Contact Us!</a>';

    document.getElementById('_titles').scrollIntoView({
        behavior: 'smooth'
    });
}
