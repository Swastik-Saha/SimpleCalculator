function show_on_screen(text) {
    pre_text = calc_screen.innerHTML
    calc_screen.innerHTML = pre_text + text

    // Always keep textarea scrolled right
    let textarea = document.getElementById('calc_screen');
    textarea.scrollLeft = textarea.scrollWidth;
};

function backspace() {
    pre_text = calc_screen.innerHTML
    new_text = pre_text.slice(0, pre_text.length - 1)
    calc_screen.innerHTML = new_text
}

function calculate_scr() {
    raw_problem = calc_screen.innerHTML
    processed_problem = raw_problem.replace(/x/g, '*')
    processed_problem = raw_problem.replace(/\^/g, '**')
    console.log(processed_problem)
    ans = eval(processed_problem)
    calc_screen.innerHTML = ans
}

function clear_scr() {
    calc_screen.innerHTML = ''
}
