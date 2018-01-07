﻿var weight, height, age, gender, birth, goal, coff = 0; function getAge(year, month, day) { var today = new Date(); console.log(today); var birthDate = new Date(year, month, day, 0, 0, 0, 0); var age = today.getFullYear() - birthDate.getFullYear(); var m = today.getMonth() - birthDate.getMonth(); if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; } return age; } function CalculateCal(w, h, a, g, s) { console.log(w + ' ' + h + ' ' + a + ' ' + g + ' ' + s); var basal = 0, bmi = 0, activity = s, riskFactor = 1, kcal = 0; if (w > 0 && h > 0 && a > 0 && g > 0) { bmi = w / Math.pow((h / 100), 2); if (g == 1) { basal = 66 + (13.7 * w) + (5 * h) - (6.8 * a); } else { basal = 655 + (9.6 * w) + (1.85 * h) - (4.7 * a); } kcal = basal * riskFactor * activity; } return kcal; } function Calculate_Bmi(weight, height) { console.log(weight + " " + height); return (weight && height) ? (weight / Math.pow((height / 100), 2)).toFixed(1) : 0; }; function Apply_Goal(kcalField, goalVal) { if (goalVal) { var sugg = CalorieSuggestion(parseInt(Math.round(parseInt($("#Calorie").val())) * 0.8)); $("#calorieresulttxt").css('display', 'block').html(sugg + ' <br/>Kilo vermek için günlük almanız gereken kalori miktarı: ' + parseInt(Math.round(parseInt($("#Calorie").val())) * 0.8) + ' kkal'); } else { var sugg1 = CalorieSuggestion(parseInt(Math.round(parseInt($("#Calorie").val())))); $("#calorieresulttxt").css('display', 'block').html(sugg1 + ' <br/> Formunuzu korumak için günlük almanız gereken kalori miktarı: ' + parseInt(Math.round(parseInt($("#Calorie").val()))) + " kkal "); } return true; } function Apply_GoalKcal(kcalField, goalVal) { if (goalVal) { return parseInt(Math.round(kcalField) * 0.8); } else { return parseInt(Math.round(kcalField)); } return true; } function CalorieSuggestion(kcal) { if (kcal <= 1300) { return "Size en uygun Rafinera kalori paketi: <br class='visible-xs'> 1100 Kalori Paketi"; } if (kcal > 1300 && kcal <= 1700) { return "Size en uygun Rafinera kalori paketi: <br class='visible-xs'> 1500 Kalori Paketi"; } if (kcal > 1700) { return "Size en uygun Rafinera kalori paketi: <br class='visible-xs'> 1900 Kalori Paketi"; } return ""; } function CalculateCalorie() { console.log('CalculateCalorie'); var ckn = 0; weight = $("#weight").val(); height = $("#height").val(); birth = $("#datepicker").val(); sport = $("#HasSport").val(); gender = $("#CustomerDetail_Gender").val(); goal = $("#Goal").val(); error_text = ''; if (weight === "") { $("#weight").next().text('Lütfen kilonuzu giriniz'); error_text += 'weight '; ckn = 1; } if (height === "") { error_text += 'height '; $("#height").next().text('Lütfen boyunuzu giriniz'); ckn = 1; } if (height > 300) { $("#height").next().text('Lütfen boyunuzu giriniz'); ckn = 1; } if (weight > 300) { $("#height").next().text('Lütfen kilonuzu giriniz'); ckn = 1; } if (birth === "") { error_text += 'birth '; $("#datepicker").next().text('Lütfen doğum tarihinizi giriniz'); ckn = 1; } if (sport === "") { error_text += 'sport '; $("#HasSport").next().text('Lütfen fiziksel aktivitenizi seçiniz'); ckn = 1; } if (gender === "" || gender === "0") { error_text += 'gender '; $("#CustomerDetail_Gender").next().text('Lütfen cinsiyetinizi giriniz'); ckn = 1; } if (goal === "") { error_text += 'goal '; $("#Goal").next().text('Lütfen hedefinizi seçiniz'); } if (ckn === 1) { console.log(error_text); return false; } var day = birth.substring(0, 2); var month = birth.substring(3, 5); var year = birth.substring(6, 10); age = getAge(year, month, day); var bmi = Calculate_Bmi(weight, height); var sportlength = $('.activity_cof').length; console.log(sportlength + " sportlength "); if (sportlength === 0) { coff = 1.2; } else { $(".activity_cof").each(function () { var isnumber = $(this).val(); if (isnumber != "") { var value = parseFloat(isnumber); if (value > coff) { coff = value; } } }); } var kcal = CalculateCal(weight, height, age, gender, coff); var bmistring = bmi.toString(); if (bmistring.indexOf('.') > -1) { bmistring = bmistring.replace('.', ','); } $("#Mspeet").val(parseInt(kcal)); $("#Bki").val(bmistring); $("#Calorie").val(parseInt(kcal)); console.log(parseInt(kcal)); console.log(bmistring); console.log(parseInt(kcal)); var cl = $("#Goal").val(); if (cl == "1") { Apply_Goal("1", true); } else if (cl == "2") { Apply_Goal("2", false); } return true; } function CalculateCalorieMyHealth() { console.log('CalculateCalorie'); var ckn = 0; weight = $("#weight").val(); height = $("#height").val(); birth = $("#datepicker").val(); gender = $("#CustomerDetail_Gender").val(); goal = $("#Goal").val(); error_text = ''; var day = birth.substring(0, 2); var month = birth.substring(3, 5); var year = birth.substring(6, 10); age = getAge(year, month, day); if ((gender === "" || gender === "0") || (age == 0 || age === 1)) { error_text += 'gender '; $("#calorieresulttxt").html('Cinsiyet ve doğum tarihiniz sistemde kayıtlı olmadığından kaloriniz hesaplanamamaktadır. Bilgilerinizi hesap bilgilerim sayfasından güncelleyebilirsiniz.'); ckn = 1; } else if (age == 0 || age === 1) { $("#calorieresulttxt").html('Doğum tarihiniz sistemde kayıtlı olmadığından kaloriniz hesaplanamamaktadır. Bilgilerinizi hesap bilgilerim sayfasından güncelleyebilirsiniz.'); ckn = 1; } else if ((gender === "" || gender === "0")) { $("#calorieresulttxt").html('Cinsiyetiniz sistemde kayıtlı olmadığından kaloriniz hesaplanamamaktadır. Bilgilerinizi hesap bilgilerim sayfasından güncelleyebilirsiniz.'); ckn = 1; } if (ckn === 1) { return false; } if (weight === "") { $("#weight").next().text('Lütfen kilonuzu giriniz'); error_text += 'weight '; ckn = 1; } if (height === "") { error_text += 'height '; $("#height").next().text('Lütfen boyunuzu giriniz'); ckn = 1; } if (height > 300) { $("#height").next().text('Lütfen boyunuzu giriniz'); ckn = 1; } if (weight > 300) { $("#height").next().text('Lütfen kilonuzu giriniz'); ckn = 1; } if (birth === "") { error_text += 'birth '; $("#datepicker").next().text('Lütfen doğum tarihinizi giriniz'); ckn = 1; } if (goal === "") { error_text += 'goal '; $("#Goal").next().text('Lütfen hedefinizi seçiniz'); } if (ckn === 1) { return false; } var bmi = Calculate_Bmi(weight, height); var sportlength = $('.activity_cof').length; console.log(sportlength + " sportlength "); if (sportlength === 0) { coff = 1.2; } else { $(".activity_cof").each(function () { var isnumber = $(this).val(); if (isnumber != "") { var value = parseFloat(isnumber); if (value > coff) { coff = value; } } }); } var kcal = CalculateCal(weight, height, age, gender, coff); var bmistring = bmi.toString(); if (bmistring.indexOf('.') > -1) { bmistring = bmistring.replace('.', ','); } $("#Mspeet").val(parseInt(kcal)); $("#Bki").val(bmistring); $("#Calorie").val(parseInt(kcal)); if (goal == "1") { Apply_Goal("1", true); } else if (goal == "2") { Apply_Goal("2", false); } return true; } function Calculate_Ideal_Weight(h, a, g) { console.log(h + " " + a + " " + g); var averageBMI = 0; if (g == 1) { if (a <= 18) { averageBMI = 22; } else if (a >= 19 && a <= 24) { averageBMI = 23.5; } else if (a >= 25 && a <= 34) { averageBMI = 24.5; } else if (a >= 35 && a <= 44) { averageBMI = 25.5; } else if (a >= 45 && a <= 54) { averageBMI = 26.5; } else if (a >= 55 && a <= 65) { averageBMI = 27.5; } else if (a > 65) { averageBMI = 28.5; } } else { if (a <= 18) { averageBMI = 22; } else if (a >= 19 && a <= 24) { averageBMI = 19.5; } else if (a >= 25 && a <= 34) { averageBMI = 20.5; } else if (a >= 35 && a <= 44) { averageBMI = 21.5; } else if (a >= 45 && a <= 54) { averageBMI = 22.5; } else if (a >= 55 && a <= 65) { averageBMI = 23.5; } else if (a > 65) { averageBMI = 24.5; } } var ideal = (averageBMI * (Math.pow((h / 100), 2))).toFixed(1); console.log(ideal); return ideal; } function Calculate_Obesity(waist, gender) { var result = ""; if (gender == 1) { if (waist > 102) { result = "Yüksek Risk Grubu"; } else if (waist > 93) { result = "Hafif Risk Grubu"; } else { result = "Risk Yok"; } } else { if (waist > 88) { result = "Yüksek Risk Grubu"; } else if (waist > 80) { result = "Hafif Risk Grubu"; } else { result = "Risk Yok"; } } return result; } function Calculate_Risk(waist, teigh, gender) { var calcResult = (waist / teigh); result = ""; if (gender === 1) { if (calcResult > 1) { result = "Riskli"; } else { result = "Normal"; } } else { if (calcResult > 0.8) { result = "Riskli"; } else { result = "Normal"; } } return result; } $(document).on("change", "#Goal", function () { var vl = $(this).val(); if (vl !== null && vl !== undefined && vl !== null) { $("#Goal").next().html(''); } }); $(document).on("change", "#CustomerDetail_Gender", function () { var vl = $(this).val(); if (vl !== null && vl !== undefined && vl !== null) { $("#CustomerDetail_Gender").next().html(''); } }); $(document).on("input", "#height", function () { var vl = $(this).val(); if (vl !== null && vl !== undefined && vl !== null) { $("#height").next().html(''); } }); $(document).on("change", "#HasSport", function () { var vl = $(this).val(); if (vl !== null && vl !== undefined && vl !== null) { $("#HasSport").next().html(''); } }); $(document).on("input", "#weight", function () { var vl = $(this).val(); if (vl !== null && vl !== undefined && vl !== null) { $("#weight").next().html(''); } }); $(document).on("input", "#datepicker", function () { var vl = $(this).val(); if (vl !== null && vl !== undefined && vl !== null) { $("#datepicker").next().html(''); } });