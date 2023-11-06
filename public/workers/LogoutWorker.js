let remainingTime;

onmessage = (e) => {
    if (e.data.type === 'setTime') {
        remainingTime = e.data.time;
        countDown();
    }
};

const countDown = () => {
    if (remainingTime == undefined) {
        return;
    }
    remainingTime -= 1;
    if (remainingTime <= 0) {
        postMessage('logout');
        return;
    }

    // if(!localStorage.getItem("ACCESS_TOKEN")) {
    //     postMessage('logout');
    //     return;
    // }
    postMessage(remainingTime);
    setTimeout(countDown, 1000);
};

