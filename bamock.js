function check() {
    var c=0
    var q1=document.bamock.question1.value;
    var q2=document.bamock.question2.value;
    var q3=document.bamock.question3.value;
    var q4=document.bamock.question4.value;
    var q5=document.bamock.question5.value;
    var q6=document.bamock.question6.value;
    var q7=document.bamock.question7.value;
    var q8=document.bamock.question8.value;
    var q9=document.bamock.question9.value;
    var q10=document.bamock.question10.value;
    var q11=document.bamock.question11.value;
    var q12=document.bamock.question12.value;
    var q13=document.bamock.question13.value;
    var q14=document.bamock.question14.value;
    var q15=document.bamock.question15.value;
    var q16=document.bamock.question16.value;
    var q17=document.bamock.question17.value;
    var q18=document.bamock.question18.value;
    var q19=document.bamock.question19.value;
    var q20=document.bamock.question20.value;
    var q21=document.bamock.question21.value;
    var q22=document.bamock.question22.value;
    var q23=document.bamock.question23.value;
    var q24=document.bamock.question24.value;
    var q25=document.bamock.question25.value;
    var q26=document.bamock.question26.value;
    var q27=document.bamock.question27.value;
    var q28=document.bamock.question28.value;
    var q29=document.bamock.question29.value;
    var q30=document.bamock.question30.value;
    var q31=document.bamock.question31.value;
    var q32=document.bamock.question32.value;
    var q33=document.bamock.question33.value;
    var q34=document.bamock.question34.value;
    var q35=document.bamock.question35.value;
    var q36=document.bamock.question36.value;
    var q37=document.bamock.question37.value;
    var q38=document.bamock.question38.value;
    var q39=document.bamock.question39.value;
    var q40=document.bamock.question40.value;
    var q41=document.bamock.question41.value;
    var q42=document.bamock.question42.value;
    var q43=document.bamock.question43.value;
    var q44=document.bamock.question44.value;
    var q45=document.bamock.question45.value;
    var q46=document.bamock.question46.value;
    var q47=document.bamock.question47.value;
    var q48=document.bamock.question48.value;
    var q49=document.bamock.question49.value;
    var q50=document.bamock.question50.value;
    var result=document.getElementById('result');
    var bamock=document.getElementById("bamock");
    if (q1=="Answer2") {c++}
    if (q2=="Answer1") {c++}
    if (q3=="Answer1") {c++}
    if (q4=="Answer4") {c++}
    if (q5=="Answer2") {c++}
    if (q6=="Answer4") {c++}
    if (q7=="Answer4") {c++}
    if (q8=="Answer3") {c++}
    if (q9=="Answer4") {c++}
    if (q10=="Answer3") {c++}
    if (q11=="Answer4") {c++}
    if (q12=="Answer3") {c++}
    if (q13=="Answer1") {c++}
    if (q14=="Answer3") {c++}
    if (q15=="Answer2") {c++}
    if (q16=="Answer3") {c++}
    if (q17=="Answer4") {c++}
    if (q18=="Answer1") {c++}
    if (q19=="Answer2") {c++}
    if (q20=="Answer1") {c++}
    if (q21=="Answer4") {c++}
    if (q22=="Answer3") {c++}
    if (q23=="Answer2") {c++}
    if (q24=="Answer3") {c++}
    if (q25=="Answer4") {c++}
    if (q26=="Answer4") {c++}
    if (q27=="Answer4") {c++}
    if (q28=="Answer1") {c++}
    if (q29=="Answer2") {c++}
    if (q30=="Answer3") {c++}
    if (q31=="Answer1") {c++}
    if (q32=="Answer4") {c++}
    if (q33=="Answer3") {c++}
    if (q34=="Answer1") {c++}
    if (q35=="Answer3") {c++}
    if (q36=="Answer1") {c++}
    if (q37=="Answer2") {c++}
    if (q38=="Answer3") {c++}
    if (q39=="Answer3") {c++}
    if (q40=="Answer1") {c++}
    if (q41=="Answer2") {c++}
    if (q42=="Answer2") {c++}
    if (q43=="Answer1") {c++}
    if (q44=="Answer3") {c++}
    if (q45=="Answer3") {c++}
    if (q46=="Answer2") {c++}
    if (q47=="Answer4") {c++}
    if (q48=="Answer3") {c++}
    if (q49=="Answer3") {c++}
    if (q50=="Answer4") {c++}
    bamock.style.display="none";

    if (c<50) {
        result.textContent='FAILED. Your score is  ' + c + '/50'
    } else {
        result.textContent='PASSED. Your score is  ' + c + '/50'
    }
}