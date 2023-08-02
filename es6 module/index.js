//cookie -small text file used to remeber info about user saved in nam evalue pair
//document.cookie = "firstName=Sbob; expires=Sun,30 July 2023 12:23:00 UTC; path=/";
// console.log(document.cookie)
// //deleteCookie("firstName");
// setCookie("email", "abc.gmai.com", 365);
// setCookie("email", "acd.gmai.com", 365);
// getCookie("email");
// console.log(document.cookie);
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitbtn = document.querySelector("#btn");
const cookiebtn = document.querySelector("#cookiebtn");

submitbtn.addEventListener("click", () => {
    //alert(firstText.value);
    setCookie("firstName", firstText.value, 365)
    setCookie("lasstName", lastText.value, 365)
    alert("cookie set")
    //alert(getCookie("firstName"));
});

cookiebtn.addEventListener("click", () => {
    alert(`showing cookie`);
    getCookie("firstName");
    //     getCookie("lastName");

    // });
});
function setCookie(name, value, dayToLive) {
        const date = new Date();
        date.setTime(date.getTime() + dayToLive * 24 * 60 * 60 * 1000);
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;

    }
function deleteCookie(name) {
        setCookie(name, null, null);
    }
function getCookie(name) {
        const cDecoded = decodeURIComponent(document.cookie);
        let result;
        const cArray = cDecoded.split("; ")
        cArray.forEach(element => {
            if (element.indexOf(name) == 0) {
                result = element.substring(name.lenght + 1);
                console.log(result);
            }
            else {
                return `No cooki efound`;
            }
        });
}    
