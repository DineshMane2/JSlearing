

var dayOfWeek = function (day) {
    //  if (day==1) {
    //     console.log(`${day}-Monday`);
    //  }
    //  if (day==2) {
    //     console.log(`${day} -Tuesday`);
    //  }
    //  if (day==3) {
    //     console.log(`${day} -Wed`);
    //  }
    //  if (day==4) {
    //     console.log(`${day} -Thur`);
    //  }
    //  if (day==5) {
    //     console.log(`${day} -Fri`);
    //  }
    //  if (day==6) {
    //     console.log(`${day} -Sat`);
    //  }
    //  if (day==7) {
    //     console.log(`${day} -Sunday`);
    //  }
    switch (day) {
        case 1:
            console.log(`${day}-Monday`);
            break;
        case 2:
            console.log(`${day}-Tuesday`);
            break;
        case 3:
            console.log(`${day}-Wensday`);
            break;
        case 4:
            console.log(`${day}-Thursday`);
            break;
        case 5:
            console.log(`${day}-Friday`);
            break;
        case 6:
            console.log(`${day}-Saturday`);
            break;
        case 7:
            console.log(`${day}-Sunday`);
            break;

        default:
            console.log(`${day}-Invalid Input`);
            break;
    }
    console.log(`End of Switch Case`);
}
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(null);
dayOfWeek(undefined);
dayOfWeek("GK");
