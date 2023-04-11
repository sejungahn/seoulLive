var errorMessage = ()=> {
    $(".errorMessegeArea").text('');

    if($("#UserInputText").val()=='' && $("#UserInputTextps").val()==''){
        $(".errorMessegeArea").text("아이디와 비밀번호를 입력해주세요!");
        }

    // if($("#userInputText").val() == "dlehddud60" && $("#userInputTextps").val() == "ehd124578!"){
    //     alert("로그인 성공!");
    //     }else{
    //         $(".errorMessegeArea").text("아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.");

    //     }
    // }
    // if($("#UserInputText").val()==''){
    // $(".errorMessegeArea").text("아이디를 입력해주세요!");
    // console.log("test");
    // }
    
    
}