// heart-button-count functionality 


const heartBtns = document.querySelectorAll(".heart-btn");
let heartCount = 0;

for (const heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function () {
        heartCount++
        document.getElementById("heart-btn-count").innerText = heartCount;
    })
}


// call button functionality


let coinCount = parseInt(document.getElementById("coin-count").innerText);
const callBtns = document.querySelectorAll(".call-button");

let phoneNumbers = {
    "জাতীয় জরুরি সেবা": "999",
    পুলিশ: "999",
    "ফায়ার সার্ভিস": "999",
    অ্যাম্বুলেন্স: "1994-999999",
    "নারী ও শিশু সহায়তা": "109",
    "দুদক": "106",
    "বিদ্যুৎ বিভ্রাট": "16216",
    ব্র্যাক: "16445",
    "বাংলাদেশ রেলওয়ে": "163"
};

const callHistoryContainer = document.getElementById("call-history-container");
const callInfo = document.getElementById("call-info");



for (const callBtn of callBtns) {
    callBtn.addEventListener("click", function () {
        const service = callBtn.dataset.service
        let confirmation = confirm("Calling " + service + " " + phoneNumbers[service])
        if (confirmation) {
            coinCount = coinCount - 20;
            if (coinCount >= 0) {
                document.getElementById("coin-count").innerText = coinCount;
                const callDiv = document.createElement("div");
                callDiv.innerHTML = `<div
                        class="flex justify-between items-center w-[97%] mx-auto h-[80px] bg-[#d4d6d5]/40 rounded-lg p-3 mt-3">
                        <div>
                            <h1 class="text-lg font-semibold">${service}</h1>
                        <p class="text-[#5c5c5c]">${phoneNumbers[service]}</p>
                        </div>
                        <p class="font-semibold">${new Date().toLocaleTimeString()}</p>
                     </div>`

                callHistoryContainer.appendChild(callDiv);

            }
            else {
                alert("You Don't Have Enough Coin To Call")
            }

        }
        else {
            alert("Calling Canceled")
        }
    })
}


// call history button functionality 


const clearBtn = document.getElementById("clear-button").addEventListener("click", function () {
    callHistoryContainer.innerHTML = "";
})

// copy button functionality 

const copyBtns = document.querySelectorAll(".copy-button");
let copyCounter = document.getElementById("copy-counter");
let count = parseInt(copyCounter.innerText);

for (const copyBtn of copyBtns) {
    const service = copyBtn.dataset.service
    copyBtn.addEventListener("click", function () {
        const confirmed = confirm("Do you want to copy this number: ", phoneNumbers[service])
        if (confirmed) {
            navigator.clipboard.writeText(phoneNumbers[service])
        }
        else {
            alert("Copy Cancelled")
        }
        count++;
        copyCounter.innerText = count;

    })
}