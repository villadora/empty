var currentIdx = 0;
var wrongs = [];

function loadQuestion(idx) {
    var q = questions[idx];
    if('pre' in q) $('#q-pre').html(q.pre);
    else $('#q-pre').html('');
    $('#q-qe').html(q.qe);
}

function applyResult() {
    var total = questions.length, rnum = total - wrongs.length ;
    $('#result-txt').html("( " + rnum + " / " + total + " ) 答对 " + rnum +" 题");
    if(wrongs.length == 0) {
        $('.cong').removeClass('hide');
        $('#rs-table').html('');
    }else {
        $('#rs-table').html("<tr><th>题目</th><th>你的答案</th><th>正确答案</th><th>备注</th></tr>");
        for(var i = wrongs.length; i-- > 0; ) {
            var idx = wrongs[i], q = questions[wrongs[i]];
            $('#rs-table').append("<tr><th class='blue'>"+ q.qe +"</th><th class='red'>"
                                  +!q.answer+"</th><th class='green'>"+q.answer+"</th><th>"+ (('why' in q)?q.why:"")+"</th></tr>");
        }
    }
}

function next() {
    if(++currentIdx < questions.length) {
        loadQuestion(currentIdx);
    }else {
        $('.answering').addClass('hide');
        $('.result').removeClass('hide');
        applyResult();
    }
}


$(document).ready(function() {
    $(".start").removeClass('hide');

    $("#start-btn").on("click", function(evt) {
        currentIdx = 0;
        wrongs = [];
        $('.start').addClass('hide');
        $('.answering').removeClass('hide');
        loadQuestion(currentIdx);
    });

    $("#true-btn").on('click', function(evt) {
        if(!questions[currentIdx].answer)
            wrongs.push(currentIdx);
        next();
    });

    $("#false-btn").on('click', function(evt) {
        if(questions[currentIdx].answer)
            wrongs.push(currentIdx);
        next();
    });
});
