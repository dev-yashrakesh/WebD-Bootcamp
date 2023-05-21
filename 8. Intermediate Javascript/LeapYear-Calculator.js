function leapyear(year){
    if (year%4==0){
        if (year%100==0){
            if (year%400==0){
                return "LeapYear"
            }
            else {
                return "Not LeapYear"
            }
        }
        else{
            return "Not LeapYear"
        }
    }
    else{
        return "Not LeapYear"
    }
}

leapyear(2001);