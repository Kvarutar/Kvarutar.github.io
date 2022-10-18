let stompClient;
let test;


const connect = () => {
    let socket = new SockJS("http://localhost:7070/ws");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function(frame){
        stompClient.subscribe('/list/', function(response){
            showData(JSON.parse(response.body).fullName)
        })
    })
};

function showData(data){
    document.querySelector(".test_block").textContent = data;
}

connect();

function sendMessage(){
    let fullName = document.querySelector(".full_name").value;
    let note = document.querySelector(".note").value;
    stompClient.send("/queue/add", {}, JSON.stringify({
        fullName: fullName,
        subjectName: "Безопасность жизнедеятельности",
        groupName: "3-МД-15",
        note: note
    }))
}

let btn = document.querySelector(".test_btn");
btn.addEventListener('click', () => {
    sendMessage();
})

// function connect() {
//     var socket = new SockJS('/list');
//     console.log(2);
//     stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//         stompClient.subscribe('/queue/list', function (greeting) {
//             console.log("1")
//         });
//     });
// }