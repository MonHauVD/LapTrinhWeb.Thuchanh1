function checkAnswer() {
    let answers = {}; // Đối tượng lưu trữ câu trả lời
    let mark = 0;
        // Kiểm tra câu trả lời cho câu hỏi 1
        var cau1Answer = document.querySelector('input[name="cau1"]:checked');
        if (cau1Answer) {
            answers.cau1 = cau1Answer.value;
            if (answers.cau1 == "true")
                mark += 0.25;
        }

        var cau2Answer = document.querySelector('input[name="cau2"]:checked');
        if (cau2Answer) {
            answers.cau2 = cau2Answer.value;
            if (answers.cau2 == "false")
                mark += 0.25;
        }

        var cau3Answer = document.querySelector('input[name="cau3"]:checked');
        if (cau3Answer) {
            answers.cau3 = cau3Answer.value;
            if (answers.cau3 == "true")
                mark += 0.25;
        }

        var cau4Answer = document.querySelector('input[name="cau4"]:checked');
        if (cau4Answer) {
            answers.cau4 = cau4Answer.value;
            if (answers.cau4 == "false")
                mark += 0.25;
        }

        var cau5Answer = document.querySelector('input[name="cau5"]:checked');
        if (cau5Answer) {
            answers.cau5 = cau5Answer.value;
            if (answers.cau5 == "true")
                mark += 0.25;
        }

        var cau6Answer = document.querySelector('input[name="cau6"]:checked');
        if (cau6Answer) {
            answers.cau6 = cau6Answer.value;
            if (answers.cau6 == "false")
                mark += 0.25;
        }

        var cau7Answer = document.querySelector('input[name="cau7"]:checked');
        if (cau7Answer) {
            answers.cau7 = cau7Answer.value;
            if (answers.cau7 == "true")
                mark += 0.25;
        }

        var cau8Answer = document.querySelector('input[name="cau8"]:checked');
        if (cau8Answer) {
            answers.cau8 = cau8Answer.value;
            if (answers.cau8 == "false")
                mark += 0.25;
        }

        var cau9Answer = document.querySelector('input[name="cau9"]:checked');
        if (cau9Answer) {
            answers.cau9 = cau9Answer.value;
            if (answers.cau9 == "true")
                mark += 0.25;
        }

        var cau10Answer = document.querySelector('input[name="cau10"]:checked');
        if (cau10Answer) {
            answers.cau10 = cau10Answer.value;
            if (answers.cau10 == "false")
                mark += 0.25;
        }

        // Nhóm câu 2

        var cau11Answer = document.querySelector('input[name="cau11"]:checked');
        if (cau11Answer) {
            answers.cau11 = cau11Answer.value;
            if (answers.cau11 == "A")
                mark += 0.25;
        }

        var cau12Answer = document.querySelector('input[name="cau12"]:checked');
        if (cau12Answer) {
            answers.cau12 = cau12Answer.value;
            if (answers.cau12 == "B")
                mark += 0.25;
        }

        var cau13Answer = document.querySelector('input[name="cau13"]:checked');
        if (cau13Answer) {
            answers.cau13 = cau13Answer.value;
            if (answers.cau13 == "C")
                mark += 0.25;
        }

        var cau14Answer = document.querySelector('input[name="cau14"]:checked');
        if (cau14Answer) {
            answers.cau14 = cau14Answer.value;
            if (answers.cau14 == "D")
                mark += 0.25;
        }

        var cau15Answer = document.querySelector('input[name="cau15"]:checked');
        if (cau15Answer) {
            answers.cau15 = cau15Answer.value;
            if (answers.cau15 == "A")
                mark += 0.25;
        }

        var cau16Answer = document.querySelector('input[name="cau16"]:checked');
        if (cau16Answer) {
            answers.cau16 = cau16Answer.value;
            if (answers.cau16 == "B")
                mark += 0.25;
        }

        var cau17Answer = document.querySelector('input[name="cau17"]:checked');
        if (cau17Answer) {
            answers.cau17 = cau17Answer.value;
            if (answers.cau17 == "C")
                mark += 0.25;
        }

        var cau18Answer = document.querySelector('input[name="cau18"]:checked');
        if (cau18Answer) {
            answers.cau18 = cau18Answer.value;
            if (answers.cau18 == "D")
                mark += 0.25;
        }

        var cau19Answer = document.querySelector('input[name="cau19"]:checked');
        if (cau19Answer) {
            answers.cau19 = cau19Answer.value;
            if (answers.cau19 == "A")
                mark += 0.25;
        }

        var cau20Answer = document.querySelector('input[name="cau20"]:checked');
        if (cau20Answer) {
            answers.cau20 = cau20Answer.value;
            if (answers.cau20 == "B")
                mark += 0.25;
        }

        //Nhóm câu 3

        let checkboxes21A = document.querySelectorAll('input[type="checkbox"][name="cau21A"]:checked');
        let checkboxes21B = document.querySelectorAll('input[type="checkbox"][name="cau21B"]:checked');
        let checkboxes21C = document.querySelectorAll('input[type="checkbox"][name="cau21C"]:checked');
        let checkboxes21D = document.querySelectorAll('input[type="checkbox"][name="cau21D"]:checked');
        answers.cau21 = checkboxes21A.value + checkboxes21B.value + checkboxes21C.value + checkboxes21D.value;
        // if (answers.cau21.includes('A') && answers.cau21.includes('C')) {
        //     mark += 0.25;
        // }
        console.log(answers.cau21);

        // for (let i = 1; i <= 10; i++)
        // {
        //     let questionName = 'cau' + i;
        //     answers[questionName] = document.querySelector("input[name="+questionName+"]:checked");
        //     if(answers[questionName] == "true")
        //     {
        //         mark += 0.25;
        //     }
        // }
        //Nhóm câu 4
        mark += 2.5;
        alert("Điểm bài thi của thí sinh là:" + mark); // In kết quả kiểm tra vào console hoặc xử lý dữ liệu theo mục đích của bạn
}