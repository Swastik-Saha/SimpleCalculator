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
    problem = calc_screen.innerHTML
    problem = problem.replace(/\x/g, '*')
    problem = problem.replace(/\^/g, '**')
    ans = eval(problem)
    calc_screen.innerHTML = ans
}

function clear_scr() {
    calc_screen.innerHTML = ''
}
