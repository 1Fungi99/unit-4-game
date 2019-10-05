$(function () {
    //declaring variables
    var check = false, rand1, rand2, rand3, rand4, randnum, sum = 0, wins=0,loses=0, win=false,lose=false;

    //Before random values are set
    $(".button").on("click", function () {
        if (win===true){
            wins+=1;
            $(".wins").text("Wins: " + wins);
            console.log("fire");
        }
        if (lose===true){
            loses+=1;
            $(".lose").text("Losses: "+ loses);
        }
        check = true, win=false, lose=false;

        rand1 = Math.floor(Math.random() * 12) + 1;
        rand2 = Math.floor(Math.random() * 12) + 1;
        rand3 = Math.floor(Math.random() * 12) + 1;
        rand4 = Math.floor(Math.random() * 12) + 1;

        randnum = Math.floor(Math.random() * 101) + 20;

        console.log("rand1 = " + rand1 + " rand2 = " + rand2 + " rand3 = " + rand3 + " rand4 = " + rand4 + " randNum = " + randnum);
        $(".randomNum").text(randnum);
        sum=0;
        $(".score").text("0");
    });

    $(".crystal-1").on("click", function () {
        console.log("crystal-1 was clicked!")
        if (check == true) { addition1(); }
        if (sum == randnum) {
            win=true;
            check=false;
            alert("You Win! Hit Generate Number Again!");
        }
        if (sum > randnum) {
            alert("You Lost!")
            check = false;
            lose=true;
        }
    });
    $(".crystal-2").on("click", function () {
        console.log("crystal-2 was clicked!")
        if (check == true) { addition2(); }
        if (sum == randnum) {
            win=true;
            check=false;
            alert("You Win! Hit Generate Number Again!");
        }
        if (sum > randnum) {
            alert("You Lost!")
            check = false;
            lose=true;
        }
    });
    $(".crystal-3").on("click", function () {
        console.log("crystal-3 was clicked!")
        if (check == true) { addition3(); }
        if (sum == randnum) {
            win=true;
            check=false;
            alert("You Win! Hit Generate Number Again!");
        }
        if (sum > randnum) {
            alert("You Lost!")
            check = false;
            lose=true;
        }
    });
    $(".crystal-4").on("click", function () {
        console.log("crystal-4 was clicked!")
        if (check == true) { addition4(); }
        if (sum == randnum) {
            win=true;
            check=false;
            alert("You Win! Hit Generate Number Again!");
        }
        if (sum > randnum) {
            alert("You Lost!")
            check = false;
            lose=true;
        }
    });

    function addition4() {
        sum += rand4;
        $(".score").text(sum);
    }
    function addition3() {
        sum += rand3;
        $(".score").text(sum);
    }
    function addition2() {
        sum += rand2;
        $(".score").text(sum);
    }
    function addition1() {
        sum += rand1;
        $(".score").text(sum);
    }
});