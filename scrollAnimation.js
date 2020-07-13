/*  scrollAnimation.js =>>>
    A project by ChalanaN  >>> > https://chalanan.tk;
                               > https://blog.chalanan.tk;
                               > eMail mailto:wchalanaw@gmail.com || mailto:me@chalanan.tk;
                               > Instagram @chalana_n;
                               > Facebook @ Chalana Nethasara Wickramaarachchi;
                               > Twitter @ChalanaNethasara;
                               > Pinterest @ Chalana Nethsara;
    Free for non-commercial use :) */

    window.addEventListener('scroll', function () {
        var animate = document.querySelectorAll('.animate');
        var scrollAnimate = document.querySelectorAll('.scrollAnimate');
        var i = 0;
    
        if (animate != null) {
            animate.forEach(function () {
                var scroll = animate[i].getAttribute("data-animate-on");
                var time = animate[i].getAttribute("data-animate-time");
                var repeat = animate[i].getAttribute("data-animate-repeat");
                var scrollN = animate[i].getAttribute("data-animate-on-n");
                var scroll1 = 0;
                var scroll2 = window.innerHeight;
    
                if (time == null) {
                    time = "0.35s";
                }
    
                if (scroll == 'top') {
                    scroll = 0;
                } else if (scroll == 'center') {
                    scroll = window.innerHeight / 2;
                } else if (scroll == 'bottom') {
                    scroll = window.innerHeight;
                }
    
                let numP = scroll + '-' + scrollN;
                let numM = scroll + '+' + scrollN;
                let numP1 = scroll1 + '+' + scrollN;
                let numM1 = scroll2 + '-' + scrollN;
    
                if (scrollN != null) {
                    if (scroll == 'bottom') {
                        scroll = eval(numM);
                    } else if (scroll == 'view') {
                        scroll1 = eval(numP1);
                        scroll2 = eval(numM1);
                    } else {
                        scroll = eval(numP);
                    }
                }
    
                var fin = eval(animate[i].offsetTop + animate[i].parentElement.offsetTop - window.scrollY);
    
                if (scroll == 'view') {
                    if (fin >= scroll1 && fin <= scroll2) {
                        animate[i].style.transition = time;
                        animate[i].classList.add('after');
                    } else if (repeat == "yes") {
                        animate[i].classList.remove('after');
                    }
                } else {
                    if (fin <= scroll) {
                        animate[i].style.transition = time;
                        animate[i].classList.add('after');
                    } else if (repeat == "yes") {
                        animate[i].classList.remove('after');
                    }
                }
    
                i = i + 1;
            })
            i = 0;
        }
        if (scrollAnimate != null) {
            scrollAnimate.forEach(function () {
                var elem = scrollAnimate[i];
    
                var from = elem.getAttribute("data-animate-from");
                var to = elem.getAttribute("data-animate-to");
                var repeat = elem.getAttribute("data-animate-repeat");
    
                var leftFrom = elem.getAttribute("data-animate-from-left");
                var rightFrom = elem.getAttribute("data-animate-from-right");
                var topFrom = elem.getAttribute("data-animate-from-top");
                var bottomFrom = elem.getAttribute("data-animate-from-bottom");
                var opacityFrom = elem.getAttribute("data-animate-from-opacity");
                var rotateFrom = elem.getAttribute("data-animate-from-rotate");
                var scaleFrom = elem.getAttribute("data-animate-from-scale");
    
                if (leftFrom != null && leftFrom.includes("%")) {
                    leftFrom = leftFrom.replace("%", "");
                    leftFrom = window.innerWidth / 100 * leftFrom;
                }
                if (rightFrom != null && rightFrom.includes("%")) {
                    rightFrom = rightFrom.replace("%", "");
                    rightFrom = window.innerWidth / 100 * rightFrom;
                }
                if (topFrom != null && topFrom.includes("%")) {
                    topFrom = topFrom.replace("%", "");
                    topFrom = window.innerHeight / 100 * topFrom;
                }
                if (bottomFrom != null && leftFrom.includes("%")) {
                    bottomFrom = bottomFrom.replace("%", "");
                    bottomFrom = window.innerHeight / 100 * bottomFrom;
                }
    
                var leftTo = elem.getAttribute("data-animate-to-left");
                var rightTo = elem.getAttribute("data-animate-to-right");
                var topTo = elem.getAttribute("data-animate-to-top");
                var bottomTo = elem.getAttribute("data-animate-to-bottom");
                var opacityTo = elem.getAttribute("data-animate-to-opacity");
                var rotateTo = elem.getAttribute("data-animate-to-rotate");
                var scaleTo = elem.getAttribute("data-animate-to-scale");
    
                if (from.includes("top")) {
                    from = from.replace("top-", "");
                } else if (from.includes("center")) {
                    from = window.innerHeight / 2 + "+" + from.replace("center-", "");
                    from = eval(from);
                } else if (from.includes("bottom")) {
                    from = window.innerHeight - from.replace("bottom-", "");
                }
    
                if (to.includes("top")) {
                    to = to.replace("top-", "");
                } else if (to.includes("center")) {
                    to = window.innerHeight / 2 + "+" + to.replace("center-", "");
                    to = eval(to);
                } else if (to.includes("bottom")) {
                    to = window.innerHeight - to.replace("bottom-", "");
                }
    
                var fin = eval(elem.offsetTop + elem.parentElement.offsetTop - window.scrollY);
    
                if (fin <= from && fin >= to) {
                    var past = fin - from;
                    var sdiff = to - from;
                    var diff;
                    var value;
                    var presentage = past / sdiff * 100;
    
                    if (leftTo != null) {
                        diff = leftTo - leftFrom;
                        value = presentage / 100 * diff;
                        value = value + "+" + leftFrom;
                        value = eval(value);
                        elem.style.left = value;
                    }
                    if (rightTo != null) {
                        diff = rightTo - rightFrom;
                        value = presentage / 100 * diff;
                        value = value + "+" + rightFrom;
                        value = eval(value);
                        elem.style.right = value;
                    }
                    if (topTo != null) {
                        diff = topTo - topFrom;
                        value = presentage / 100 * diff;
                        value = value + "+" + topFrom;
                        value = eval(value);
                        elem.style.top = value;
                    }
                    if (bottomTo != null) {
                        diff = bottomTo - bottomFrom;
                        value = presentage / 100 * diff;
                        value = value + "+" + bottomFrom;
                        value = eval(value);
                        elem.style.bottom = value;
                    }
                    if (opacityTo != null) {
                        diff = opacityTo - opacityFrom;
                        value = presentage / 100 * diff;
                        value = value + "+" + opacityFrom;
                        value = eval(value);
                        elem.style.opacity = value;
                    }
                    if (rotateTo != null) {
                        diff = rotateTo - rotateFrom;
                        value = presentage / 100 * diff;
                        value = value + "+" + rotateFrom;
                        value = eval(value);
                        elem.style.transform = "rotate(" + value + "deg)";
                    }
                } else if (fin > to) {
                    if (leftFrom != null) {elem.style.left = leftFrom}
                    if (rightFrom != null) {elem.style.right = rightFrom}
                    if (topFrom != null) {elem.style.top = topFrom}
                    if (bottomFrom != null) {elem.style.bottom = bottomFrom}
                    if (opacityFrom != null) {elem.style.opacity = opacityFrom}
                    if (rotateFrom != null) {elem.style.transform = "rotate(" + rotateFrom + "deg)"}
                    if (scaleFrom != null) {elem.style.transform = "scale(" + scaleFrom + ")"}
                } else if (fin < from) {
                    if (leftTo != null) {elem.style.left = leftTo}
                    if (rightTo != null) {elem.style.right = rightTo}
                    if (topTo != null) {elem.style.top = topTo}
                    if (bottomTo != null) {elem.style.bottom = bottomTo}
                    if (opacityTo != null) {elem.style.opacity = opacityTo}
                    if (rotateTo != null) {elem.style.transform = "rotate(" + rotateTo + "deg)"}
                    if (scaleTo != null) {elem.style.transform = "scale(" + scaleTo + ")"}
                }
    
                i = i + 1;
            })
            i = 0;
        }
    })

/* Hope you enjoy it... :D :P (^_^) */