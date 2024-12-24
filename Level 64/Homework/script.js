/////////////////////////////1.
function check_scores(score1,score2){
    let required_score = 5;
    if (score1 || score2 > required_score){
        console.log("Passed");
    }
    else{
        console.log("Couldn't Pass");
    }
}
check_scores(8,4);
/////////////////////////////2.
function can_go_outside(weather_state,enough_time,ready_or_not){
    let first_two = weather_state || enough_time;
    if (first_two && ready_or_not){
        console.log("we can go outside");
    }
    else{
        console.log("we cant go outside");
    }
}
can_go_outside(true,false,false);
// //////////////////////////////////3.
function can_step(barrier,enough_area,is_signal){
    if (barrier!==true && enough_area || is_signal){
        console.log("we can step");
    }
    else{
        console.log("we can't step");
    }
}
can_step(false,false,true);
////////////////////////////////////////4.
function can_take(accessible,allowed,wanted_by_others){
    if (accessible && allowed || wanted_by_others==false){
        console.log("you can take it");
    }
    else {
        console.log("you can't take it");
    }
}
can_take(true,true,false);
///////////////////////////////////////5.
function need_to_remember(work_is_actual,info_needed,time_for_work){
    let work_info = work_is_actual || info_needed;
    if (work_info &&time_for_work){
        console.log("need to remember");
    }
    else{
        console.log("don't need to remember");
    }
}
/////////////////////////////////////6.
function need_to_sleep(current_time_late,person_tired,need_to_wake_up_early,lights_off){
    if (current_time_late && person_tired || need_to_wake_up_early && lights_off){
        console.log("need to sleep");
    }
    else{
        console.log("don't need to sleep");
    }
}
/////////////////////////////////////7.
function can_party(friends_agree,tomorrow_work,party_is_close){
    if (friends_agree && tomorrow_work==false || party_is_close){
        console.log("you can party");
    }
    else {
        console.log("you can't party")
    }
}
//////////////////////////////////////8.
function should_stay_home(snowy,rainy,plans_forcing_to_go,){\
    let snowy_or_rainy = snowy || rainy;
    if (snowy_or_rainy && plans_forcing_to_go!==false){
        console.log("should stay at home");
    }
    else {
        console.log("you shouldn't stay home");
    }
}
//////////////////////////////////////9.
function can_run(dry_weather,shoes_accessible,friend_ready){
    if (dry_weather && shoes_accessible || friend_ready){
        console.log("you can run");
    }
    else {
        console.log("you can't run");
    }
}
function can_watch_football(saturday,sunday,plans,favorite_team_playing){
    let saturday_or_sunday = saturday || sunday;
    if (saturday_or_sunday & plans!==true || favorite_team_playing){
        console.log("you can watch football");
    }
    else {
        console.log("you cant watch football");
    }
}
