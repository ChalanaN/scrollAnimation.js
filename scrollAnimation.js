/*  scrollAnimation.js =>>>
    A project by ChalanaN  >>> > https://chalanan.tk;
                               > https://blog.chalanan.tk;
                               > eMail mailto:wchalanaw@gmail.com || mailto:me@chalanan.tk;
                               > Instagram @chalana_n;
                               > Facebook @ Chalana Nethasara Wickramaarachchi;
                               > Twitter @ChalanaNethasara;
                               > Pinterest @ Chalana Nethsara;
    Free for non-commercial use :) */

(function () {
    var animate = document.querySelectorAll('.animate');
    var scrollAnimate = document.querySelectorAll('.scrollAnimate');
    var scrollAnimateE = [];
    var scrollAnimateContainer = document.querySelectorAll('.scrollAnimateContainer');
    var isSticky = [];
    var i = 0;

    scrollAnimate.forEach(function (e) {
        scrollAnimateE.push(e);
    })

    if (scrollAnimateContainer != null) {
        scrollAnimateContainer.forEach(function () {
            var sticky = scrollAnimateContainer[i].getAttribute("data-animate-sticky");

            if (sticky == "yes") {
                var stickyContainer = document.createElement("div");
                var parentelement = scrollAnimateContainer[i].parentElement;
                var sac = scrollAnimateContainer[i];
                parentelement.insertBefore(stickyContainer, sac);
                stickyContainer.appendChild(scrollAnimateContainer[i]);

                sac.style.position = "sticky";
                sac.style.top = 0;

                var n = 0;
                var widthOfsc = 0;

                scrollAnimateContainer[i].childNodes.forEach(function (e) {
                    n = 0;
                    scrollAnimate.forEach(function () {
                        if (scrollAnimate[n] == e) {
                            scrollAnimateE[n] = scrollAnimateContainer[i].parentElement;

                            var to = scrollAnimate[n].getAttribute("data-animate-to");

                            if (to.includes("top")) {
                                to = to.replace("top-", "");
                            } else if (to.includes("center")) {
                                to = window.innerHeight / 2 + "+" + to.replace("center-", "");
                                to = eval(to);
                            } else if (to.includes("bottom")) {
                                to = window.innerHeight - to.replace("bottom-", "");
                            }
                            if (to <= widthOfsc) {
                                widthOfsc = Number(to);
                            }
                        }
                        n++;
                    })
                })
                widthOfsc = widthOfsc.toString();
                widthOfsc = widthOfsc.replace("-", "");
                widthOfsc = eval(widthOfsc + "+" + scrollAnimateContainer[i].offsetHeight);
                stickyContainer.style.height = widthOfsc;

                if (sac.getAttribute("data-animate-style") != null) {
                    sac.setAttribute("data-animate-style", sac.getAttribute("data-animate-style") + "position: sticky;top: 0;");
                } else {
                    sac.setAttribute("data-animate-style", "position: sticky;top: 0;");
                }
            }
            i++
        })
    }

    window.addEventListener('scroll', function () {
        i = 0;
        if (animate != null) {
            animate.forEach(function () {
                var scroll = animate[i].getAttribute("data-animate-on");
                var time = animate[i].getAttribute("data-animate-time");
                var repeat = animate[i].getAttribute("data-animate-repeat");
                var scroll1 = 0;
                var scroll2 = window.innerHeight;

                if (scroll.includes("top-")) {
                    scroll = scroll.replace("top-", "");
                } else if (scroll.includes("center-")) {
                    scroll = window.innerHeight / 2 + "+" + scroll.replace("center-", "");
                    scroll = eval(scroll);
                } else if (scroll.includes("bottom-")) {
                    scroll = window.innerHeight - scroll.replace("bottom-", "");
                } else if (scroll.includes("view-")) {
                    scroll = scroll.replace("view-", "");
                    scroll1 = scroll1 + '+' + scroll;
                    scroll2 = scroll2 + '-' + scroll;
                    scroll1 = eval(scroll1);
                    scroll2 = eval(scroll2);
                    scroll = "view";
                }

                var fin = eval(animate[i].offsetTop + animate[i].parentElement.offsetTop - window.scrollY);

                if (scroll == 'view') {
                    if (fin >= scroll1 && fin <= scroll2) {
                        if (time != null) {
                            animate[i].style.transition = time;
                        }
                        animate[i].classList.add('after');
                    } else if (repeat == "yes") {
                        animate[i].classList.remove('after');
                    }
                } else {
                    if (fin <= scroll) {
                        if (time != null) {
                            animate[i].style.transition = time;
                        }
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
                var styleFrom = elem.getAttribute("data-animate-from-style");
                var styleTo = elem.getAttribute("data-animate-to-style");
                var additionalStyle = elem.getAttribute("data-animate-style");

                styleFrom = styleFrom.trim();
                styleTo = styleTo.trim();

                styleFrom = styleFrom.split(";");
                styleTo = styleTo.split(";");

                styleFrom.pop();
                styleTo.pop();

                var n = 0;

                styleFrom.forEach(function () {
                    styleFrom[n] = styleFrom[n].trim();
                    styleTo[n] = styleTo[n].trim();

                    n++;
                })

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

                var fin;

                if (window.getComputedStyle(scrollAnimateE[i].parentElement).position == "relative") {
                    fin = eval(scrollAnimateE[i].offsetTop + elem.parentElement.offsetTop - window.scrollY);
                } else {
                    fin = eval(scrollAnimateE[i].offsetTop - window.scrollY);
                }

                if (fin <= from && fin >= to) {
                    var past = fin - from;
                    var sdiff = to - from;
                    var diff;
                    var value;
                    var presentage = past / sdiff * 100;
                    var finalStyle = "";
                    var num = 0;

                    styleFrom.forEach(function () {
                        var From = styleFrom[num];
                        var To = styleTo[num];
                        n = 0;

                        var property = styleFrom[num].split(":")[0];
                        var propertiesFrom = styleFrom[num].split(":")[1];
                        var propertiesTo = styleTo[num].split(":")[1];
                        propertiesFrom = propertiesFrom.trim();
                        propertiesTo = propertiesTo.trim();
                        propertiesFrom = propertiesFrom.split(" ");
                        propertiesTo = propertiesTo.split(" ");

                        finalStyle += property + ":";

                        propertiesFrom.forEach(function () {
                            var func = "";

                            if (propertiesFrom[n].includes("(") && propertiesFrom[n].includes(")")) {
                                func = propertiesFrom[n].split("(")[0];
                                propertiesFrom[n] = propertiesFrom[n].replace(func, "");
                                propertiesFrom[n] = propertiesFrom[n].replace("(", "");
                                propertiesFrom[n] = propertiesFrom[n].replace(")", "");
                                propertiesTo[n] = propertiesTo[n].replace(func, "");
                                propertiesTo[n] = propertiesTo[n].replace("(", "");
                                propertiesTo[n] = propertiesTo[n].replace(")", "");
                            }


                            if (func == "") {
                                var unit = getText(propertiesFrom[n]);
                                unit = unit.replace(/\s/g, '');
                                From = propertiesFrom[n].replace(unit, "");
                                To = propertiesTo[n].replace(unit, "");
                                From = From.trim();
                                To = To.trim();

                                diff = To - From;
                                value = presentage / 100 * diff;
                                value = value + " + " + From;
                                value = eval(value);
                                finalStyle += value + unit + " ";
                            } else {
                                var funcFrom = propertiesFrom[n].split(",");
                                var funcTo = propertiesTo[n].split(",");

                                var numb = 0;

                                finalStyle += func + "(";

                                funcFrom.forEach(function () {
                                    var unit = getText(funcFrom[numb]);
                                    unit = unit.replace(/\s/g, '');
                                    From = funcFrom[numb].replace(unit, "");
                                    To = funcTo[numb].replace(unit, "");
                                    From = From.trim();
                                    To = To.trim();

                                    diff = To - From;
                                    value = presentage / 100 * diff;
                                    value = value + " + " + From;
                                    value = eval(value);

                                    if (numb == funcFrom.length - 1) {
                                        finalStyle += value + unit;
                                    } else {
                                        finalStyle += value + unit + ",";
                                    }

                                    numb++;
                                })
                                finalStyle += ") ";
                            }

                            n++;
                        })
                        finalStyle += ";";

                        num = num + 1;
                    })

                    if (additionalStyle != null) {
                        elem.style = additionalStyle + finalStyle;
                    } else {
                        elem.style = finalStyle;
                    }

                } else if (fin > to) {
                    if (additionalStyle != null) {
                        elem.style = additionalStyle + styleFrom.join(";") + ";";
                    } else {
                        elem.style = styleFrom.join(";") + ";";
                    }
                } else if (fin < from) {
                    if (additionalStyle != null) {
                        elem.style = additionalStyle + styleTo.join(";") + ";";
                    } else {
                        elem.style = styleTo.join(";") + ";";
                    }
                }
                i = i + 1;
            })
            i = 0;
        }    
    })
    function getText(txt) {
        return txt.replace(/0|1|2|3|4|5|6|7|8|9|-/g, "");
    }
}) ()

/* Hope you enjoy it... :D :P (^_^) */

/////////////////////// Made in Sri Lanka \\\\\\\\\\\\\\\\\\\\\\
