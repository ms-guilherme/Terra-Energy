function _Compare() {
    let section = document.getElementById("_comparison");
    section.style.display = "block";
    
    let other = document.getElementById("_other-num");
    let our = document.getElementById("_our-num");
    let year = document.getElementById('_year');

    let other_num = document.getElementById('_initial-value').value;
    let our_num = document.getElementById('_initial-value').value;

    let current_date = new Date();
    let year_num = current_date.getFullYear();

    other.innerHTML = '';
    year.innerHTML  = '';
    our.innerHTML   = '';

    other.innerHTML += '<p class = "_first-num">$' + other_num + '</p>';
    year.innerHTML  += '<p style = "margin-bottom:5px;">— ' + year_num + ' —</p>'
    our.innerHTML   += '<p class = "_first-num">$' + our_num + '</p>';

    let alpha_other = 6;
    for(let i = 1; i < 15; i++) {
        other_num = other_num * 1.12;
        alpha_other += 4;
        other.innerHTML += `<p class = "_other-num" style="background-color: #b35050${alpha_other};">$${other_num.toFixed(2)}</p>`;

        year_num += 1;
        year.innerHTML  += '<p>— ' + year_num + ' —</p>';
    }


    let alpha_our = 6;
    for(let i = 1; i < 15; i++) {
        our_num = our_num * 1.019;
        alpha_our += 4;
        our.innerHTML += `<p class = "_our-num" style="background-color: #50B37D${alpha_our};">$${our_num.toFixed(2)}</p>`;
    }

    let _finalmessage = document.getElementById("_final-message");
    let _saving = (other_num - our_num).toFixed(2);
    _finalmessage.innerHTML = 'By the year of ' + year_num + ', you would had <b>saved $' + _saving + '</b> with Terra Energy. <br> Go solar now!';
}