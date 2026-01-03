"use strict"




function
findLeftHandedSeats
(
    table
)
{
    let answer = 0
    
    
    for
    (
        let i = 0
        ; i < 3
        ; i ++
    )
    {
        
        if
        (
            table[0][i] === "U"
            && table[0][i + 1] !== "R"
        )
        {
            answer ++
        }
        
        if
        (
            table[1][3 - i] === "U"
            && table[1][2 - i] !== "R"
        )
        {
            answer ++
        }
        
    }
    
    
    if
    (
        table[0][3] === "U"
    )
    {
        answer ++
    }
    
    if
    (
        table[1][0] === "U"
    )
    {
        answer ++
    }
    
    
    return answer
}
