let people = [
            {
                personIMG: "https://www.w3schools.com/w3images/avatar3.png",
                personSub: "Remember Me",
                personName: "Borge Refsnes",
                personDate: "Sep 27, 2026.",
                personButton1: "Reply <i class='fa-solid fa-reply'></i>",
                personButton2: "Forward <i class='fa-solid fa-arrow-right'></i> ",
                personPara: "Hello, I just wanted to let you know that I'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br> <br> Best Regards, <br> Borge Refsnes"


            },
            {
                personIMG: "images/avatar5.png",
                personSub: "None",
                personName: "Jane Doe",
                personDate: "Sep 25, 2026.",
                personButton1: "Reply <i class='fa-solid fa-reply'></i>",
                personButton2: " Forward <i class='fa-solid fa-arrow-right'></i>",
                personPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>  Forever yours, <br> Jane"

            },
            {
                personIMG: "images/avatar2.png",
                personSub: "None",
                personName: "John Doe",
                personDate: "Sep 23, 2026.",
                personButton1: " Reply <i class='fa-solid fa-reply'></i>",
                personButton2: " Forward <i class='fa-solid fa-arrow-right'></i>",
                personPara: " Welcome. <br> That's it!"

            }
        ];
        function getperson(i) {

            document.getElementById("pic").src = people[i].personIMG;
            document.getElementById("sub").innerText = "Subject: " + people[i].personSub;
            document.getElementById("n&d").innerHTML = "<i class='fa-regular fa-clock'></i> From " + people[i].personName + "," + people[i].personDate;
            document.getElementById("button1").innerHTML = people[i].personButton1;
            document.getElementById("button2").innerHTML = people[i].personButton2;
            document.getElementById("para").innerHTML = people[i].personPara;
        }
        getperson(0);